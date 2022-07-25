<template>
    <v-card>
        <v-data-table
            sort-by="calories"
            class="elevation-1 pa-2"
            height="100vh"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="mt-1">PRODUCTO</v-toolbar-title>
                    <v-divider class="mx-5" vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark class="mb-2" @click="setDialog">
                        AGREGAR
                    </v-btn>
                    <v-dialog max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5"
                                >Are you sure you want to delete this
                                item?</v-card-title
                            >
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text>Cancel</v-btn>
                                <v-btn color="blue darken-1" text>OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
        </v-data-table>
        <form-product />
    </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import FormProduct from "./FormProduct.Component.vue";
export default {
    data: () => ({
        dialog: false,
    }),
    components: {
        FormProduct,
    },
    computed: {},
    methods: {
        ...mapMutations("product", ["setDialog"]),
    },
};
</script>

<style></style>
