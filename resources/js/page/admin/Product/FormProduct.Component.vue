<template>
    <v-dialog v-model="dialog" @click:outside="setDialog">
        <v-card class="pa-5">
            <v-card-title class="ml-n5"> Nuevo Producto </v-card-title>

            <v-text-field
                placeholder="Nombre Producto"
                label="Nombre"
            ></v-text-field>
            <v-textarea
                placeholder="Descripcion"
                label="Descripcion"
                rows="3"
            ></v-textarea>

            <v-list v-if="tam">
                <v-card
                    v-for="(array, index) in arrays"
                    :key="index"
                    class="mt-2"
                >
                    <v-subheader
                        >Item Adicional {{ index + 1 }}

                        <v-spacer></v-spacer>
                        <v-btn fab small color="red">
                            <v-icon> mdi-delete-outline </v-icon>
                        </v-btn>
                    </v-subheader>

                    <v-list-item>
                        <strong>{{ array.texto }}</strong>
                    </v-list-item>
                </v-card>
            </v-list>

            <v-form>
                <v-subheader>Adicional {{ tam + 1 }}</v-subheader>
                <v-text-field v-model="texto" label="Item adicional">
                </v-text-field>
                <v-btn fab @click="addNew">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-form>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="setDialog">
                    Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text> Guardar </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    data: () => ({
        tam: 0,
        texto: "",
        arrays: [],
    }),
    computed: {
        ...mapState("product", ["dialog"]),
    },
    methods: {
        ...mapMutations("product", ["setDialog"]),

        addNew() {
            console.log(this.texto);
            this.tam++;
            this.arrays.push({ texto: this.texto });
        },
    },
};
</script>

<style></style>
