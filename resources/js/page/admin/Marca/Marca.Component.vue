<template>
    <v-card>
        <v-data-table
            class="elevation-1 pa-2"
            height="100vh"
            :headers="headers"
            :items="brands"
            :search="search"
            sort-by="nombre"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="mt-1">MARCA</v-toolbar-title>
                    <v-divider class="mx-5" vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark class="mb-2" @click="setDialog">
                        AGREGAR
                    </v-btn>
                </v-toolbar>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    v-if="canEdit"
                    small
                    class="mr-2"
                    color="blue"
                    @click="
                        setDialog();
                        setEdit();
                        getEdit(item);
                    "
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    v-if="canDelete"
                    small
                    color="red"
                    @click="
                        localBrand = item;
                        setDeleteDialog();
                    "
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
        <form-marca />
    </v-card>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import FormMarca from "./FormMarca.Component.vue";
export default {
    data: () => ({
        search: "",
        localBrand: {},
    }),
    mounted() {
        this.getBrands();
        this.getPermissions(this.$route.path);
    },
    components: {
        FormMarca,
    },
    computed: {
        ...mapState("brand", [
            "brands",
            "dialog",
            "headers",
            "edit",
            "brand",
            "deleteDialog",
        ]),
        ...mapState("app", ["canCreate", "canEdit", "canDelete"]),
    },
    methods: {
        ...mapMutations("brand", ["setDialog"]),
        ...mapActions("brand", ["getBrands", "deleteBrand"]),
        ...mapActions("app", ["getPermissions"]),
        ...mapMutations("brand", [
            "setDialog",
            "setEdit",
            "getEdit",
            "setBrand",
            "setDeleteDialog",
            "clearBrand",
        ]),

        //Eliminar brand
        setDeleteBrand(brand) {
            this.deleteBrand(brand);
            this.getBrands();
        },
    },
};
</script>

<style></style>
