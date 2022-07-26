<template>
    <v-card>
        <v-data-table
            sort-by="calories"
            class="elevation-1 pa-2"
            height="100vh"
            :headers="headers"
            :items="products"
            :search="search"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="mt-1">PRODUCTO</v-toolbar-title>
                    <v-divider class="mx-5" vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark class="mb-2" @click="setDialog">
                        AGREGAR
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    color="blue"
                    @click="
                        setDialog();
                        setEdit();
                        setProduct(item);
                    "
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    color="red"
                    @click="
                        localItem = item;
                        setDeleteDialog();
                    "
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
        <form-product />
        <delete-dialog
            :dialog="deleteDialog"
            :setDialog="setDeleteDialog"
            v-on:deleted="deleteProduct(localItem)"
        />
    </v-card>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import FormProduct from "./FormProduct.Component.vue";
import DeleteDialog from "../../../components/DeleteItem.Component.vue";

export default {
    data: () => ({
        search: "",
        localItem: {},
    }),
    components: {
        FormProduct,
        DeleteDialog,
    },
    mounted() {
        this.getProducts();
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
    },
    methods: {
        ...mapMutations("product", [
            "setDialog",
            "setEdit",
            "getEdit",
            "setProduct",
            "setDeleteDialog",
            "clearProduct",
        ]),
        ...mapActions("product", ["getProducts", "deleteProduct"]),
    },
};
</script>

<style></style>
