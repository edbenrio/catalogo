<template>
    <div class="pa-2">
        <v-list>
            <v-card
                v-for="(array, index) in product.product_details"
                :key="index"
                class="mt-2 pa-2 ma-2"
                color="blue-grey lighten-4"
            >
                <v-subheader class="ml-4"
                    >Adicional {{ index + 1 }}
                    <v-spacer />
                    <v-btn
                        fab
                        small
                        color="red"
                        @click="deleteProductDetail(index)"
                    >
                        <v-icon> mdi-delete-outline </v-icon>
                    </v-btn>
                </v-subheader>

                <v-list-item>
                    <v-subheader>Titulo:</v-subheader>
                    <strong>{{ array.campo_nombre }}</strong>
                </v-list-item>
                <v-list-item>
                    <v-subheader>Descripcion:</v-subheader>
                    <strong>{{ array.campo_detalle }}</strong>
                </v-list-item>
            </v-card>
        </v-list>

        <v-text-field
            v-model="product_detail.campo_nombre"
            label="Titulo "
            placeholder="Ej: Peso producto"
        >
        </v-text-field>
        <v-text-field
            v-model="product_detail.campo_detalle"
            label="Descripcion"
            placeholder="Ej: 80kg"
        >
        </v-text-field>
        <v-btn rounded @click="addNewProdcutDetail(product_detail)">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    data: () => ({}),
    computed: {
        ...mapState("product", ["product", "product_detail"]),
        ...mapGetters("product", ["getLengthProductDetails"]),
    },
    methods: {
        ...mapMutations("product", [
            "addNewProdcutDetail",
            "deleteProductDetail",
        ]),
    },
};
</script>

<style></style>
