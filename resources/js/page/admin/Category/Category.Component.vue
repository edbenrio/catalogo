<template>
    <v-card>
        <v-data-table
            sort-by="calories"
            class="elevation-1 pa-2"
            height="100vh"
            :headers="headers"
            :items="categories"
            :search="search"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="mt-1">CATEGORIA</v-toolbar-title>
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
                        getEdit(item);
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
        <form-category />
        <delete-dialog
            :dialog="deleteDialog"
            :setDialog="setDeleteDialog"
            v-on:deleted="deleteCategory(localItem)"
        />
    </v-card>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import FormCategory from "./FormCategory.Component.vue";
import DeleteDialog from "../../../components/DeleteItem.Component.vue";

export default {
    data: () => ({
        search: "",
        localItem: {},
    }),
    components: {
        FormCategory,
        DeleteDialog,
    },
    mounted() {
        this.getCategories();
    },
    computed: {
        ...mapState("category", [
            "category",
            "categories",
            "dialog",
            "headers",
            "edit",
            "brand",
            "deleteDialog",
        ]),
    },
    methods: {
        ...mapMutations("category", [
            "setDialog",
            "setEdit",
            "getEdit",
            "setCategory",
            "setDeleteDialog",
            "clearCategory",
        ]),
        ...mapActions("category", ["getCategories", "deleteCategory"]),
    },
};
</script>

<style></style>
