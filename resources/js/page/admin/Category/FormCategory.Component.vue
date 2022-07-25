<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-dialog v-model="dialog" @click:outside="setDialog">
            <v-card class="pa-5">
                <v-card-title class="ml-n5"> {{ formTitle }} </v-card-title>

                <v-text-field
                    label="Nombre"
                    v-model="category.nombre"
                    :rules="nameRules"
                    required
                ></v-text-field>
                <v-file-input
                    v-model="filename"
                    accept="image/*"
                    label="Selccionar Imagen"
                    show-size
                    counter
                    clearable
                    @change="onFileChange"
                >
                </v-file-input>
                <v-img
                    v-if="showImg"
                    v-bind:src="showImg"
                    height="100"
                    width="120"
                    class="rounded text-center align-end pa-1"
                    aspect-ratio="2"
                    contain
                >
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-fab-transition>
                                <v-btn
                                    x-small
                                    dark
                                    bottom
                                    color="red"
                                    v-on="on"
                                    v-bind="attrs"
                                    @click="resetImage"
                                    >Eliminar
                                </v-btn>
                            </v-fab-transition>
                        </template>
                        <span>Eliminar Imagen</span>
                    </v-tooltip>
                </v-img>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="setDialog">
                        Cancelar
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="validateSubmit(edit, category)"
                    >
                        {{ btnName }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-form>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    data: () => ({
        valid: true,
        nameRules: [(v) => !!v || "Nombre es obligatorio"],
        showImg: null,
        filename: null,
    }),
    computed: {
        ...mapState("category", ["dialog", "edit", "category", "img"]),
        formTitle() {
            return this.edit === false ? "Nueva Categoria" : "Editar Categoria";
        },
        btnName() {
            return this.edit === false ? "Guardar" : "Editar";
        },
    },

    watch: {
        dialog: function () {
            if (this.category.img_url !== null) {
                this.showImg = this.category.img_url;
                this.setImage(this.category.img_url);
            } else {
                this.showImg = null;
                this.setImage(null);
            }
        },
    },
    methods: {
        ...mapMutations("category", [
            "setDialog",
            "setEdit",
            "clearCategory",
            "clearCategoryForOther",
            "setImage",
        ]),

        ...mapActions("category", [
            "createCategory",
            "editCategory",
            "getCategories",
            "deleteCategory",
        ]),

        validateSubmit(edit, category) {
            category.img_url = this.img;
            if (this.$refs.form.validate()) {
                if (edit) {
                    this.editCategory(category);
                } else {
                    this.createCategory(category);
                }
                this.clearCategory();
                this.resetImage();
                this.$refs.form.resetValidation();
            }
        },
        onFileChange(payload) {
            let formData = new FormData();
            const file = payload; //obtener datos de la variable
            if (file) {
                this.showImg = URL.createObjectURL(file); //guardar solo la ruta guardada
                URL.revokeObjectURL(file); // liberar memoria
                formData.append("image", file);
                this.setImage(formData);
            } else {
                this.setImage(null);
            }
        },
        saveImage(payload) {
            let data = new FormData();
            data.append("image", payload);
            this.setImage(data);
        },
        resetImage() {
            this.showImg = null;
            this.setImage(null);
            this.filename = null;
        },
    },
};
</script>

<style></style>
