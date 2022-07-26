<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-dialog v-model="dialog" @click:outside="setDialog">
            <v-card class="pa-5">
                <v-card-title class="ml-n5"> Nuevo Producto </v-card-title>

                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            v-model="product.nombre"
                            placeholder="Nombre Producto"
                            label="Nombre"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="product.codigo"
                            placeholder="ej: 858478587"
                            label="Codigo"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <!-- seleccion y busqueda de marca -->
                        <v-autocomplete
                            :menu-props="{
                                nudgeBottom: 15 + 'px',
                            }"
                            v-model="product.brand_id"
                            :items="brands"
                            :search-input.sync="searchBrand"
                            :rules="marcaRules"
                            label="Elija una marca"
                            item-text="nombre"
                            item-value="id"
                            cache-items
                            clearable
                        >
                            <!-- En caso que no encuentra -->
                            <!-- Opcion para crear marca -->
                            <template v-slot:no-data>
                                <v-sheet class="d-flex justify-center ma-2">
                                    <h5>Marca inexistente</h5>
                                </v-sheet>
                                <v-sheet class="d-flex justify-center">
                                    <v-btn
                                        @click="
                                            setDialogBrand();
                                            setIsBrandForOther();
                                        "
                                        >Crear Marca</v-btn
                                    >
                                </v-sheet>
                            </template>

                            <template v-slot:item="{ item }">
                                <v-img
                                    max-height="50"
                                    max-width="50"
                                    :src="item.img_url"
                                    class="rounded"
                                ></v-img>
                                {{ item.nombre }}
                            </template>
                        </v-autocomplete>
                    </v-col>

                    <v-col cols="12">
                        <v-textarea
                            v-model="product.descripcion"
                            placeholder="Descripcion"
                            label="Descripcion"
                            rows="3"
                        ></v-textarea>
                    </v-col>

                    <v-col cols="4">
                        <v-subheader class="mr-2">Metodo </v-subheader>
                        <v-row>
                            <v-col cols="6">
                                <v-checkbox
                                    v-model="product.venta"
                                    label="Venta"
                                    :value="1"
                                ></v-checkbox>
                            </v-col>
                            <v-col cols="6">
                                <v-checkbox
                                    v-model="product.alquiler"
                                    label="Alquiler"
                                    :value="1"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="setDialog">
                        Cancelar
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="validateSubmit(edit, product)"
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
        nameRules: [(v) => !!v || "Nombre del Producto es obligatorio"],
        codigoRules: [(v) => !!v || "Codigo del Producto es obligatorio"],
        marcaRules: [(v) => !!v || "Marca del Producto es obligatorio"],
        localItem: {},
        searchBrand: "",
        filename: null,
        showImg: null,
    }),
    watch: {
        //actualiza al agregar nueva Marca desde el Form Producto
        //agrega el id Marca creado al campo de seleccion Marca
        brands: function () {
            if (this.isBrandForOther) {
                this.product.brand_id = this.brandForOther.id;
                this.clearBarndForOther;
            }
        },
        dialog: function () {
            if (this.product.img_url !== null) {
                this.showImg = this.product.img_url;
                this.setImage(this.product.img_url);
            } else {
                this.showImg = null;
                this.setImage(null);
            }
        },
    },
    mounted() {
        this.getBrands();
    },
    computed: {
        ...mapState("product", [
            "product",
            "products",
            "dialog",
            "headers",
            "edit",
            "brand",
            "deleteDialog",
        ]),
        ...mapState("brand", ["brands", "isBrandForOther", "brandForOther"]),
        formTitle() {
            return this.edit === false ? "Nuevo Producto" : "Editar Producto";
        },
        btnName() {
            return this.edit === false ? "Guardar" : "Editar";
        },
    },
    methods: {
        ...mapMutations("product", [
            "setDialog",
            "setEdit",
            "clearProduct",
            "setImage",
        ]),
        ...mapMutations("brand", { setDialogBrand: "setDialog" }),
        ...mapMutations("brand", ["setIsBrandForOther", "clearBrandForOther"]),

        //llamada de peticiones del store
        ...mapActions("product", [
            "createProduct",
            "editProduct",
            "getProducts",
        ]),
        ...mapActions("brand", ["getBrands"]),

        //validar campo requerido
        //Dependiendo del edit (boolean), crea o edita la marca
        //resetea validacion, obtiene las listas marca, borra los campos nombre url
        validateSubmit(edit, item) {
            this.product.img_url = this.img;

            if (this.$refs.form.validate()) {
                if (edit) {
                    this.editProduct(item);
                } else {
                    this.createProduct(item);
                }

                this.resetValidate();
                this.clearBrandForOther();
            }
        },
        resetValidate() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>

<style></style>
