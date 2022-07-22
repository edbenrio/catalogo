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
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                AGREGAR
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">New Item</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                label="Dessert name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                label="Calories"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                label="Fat (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                label="Carbs (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                label="Protein (g)"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text>
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text> Save </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
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
            <template>
                <v-icon small class="mr-2"> mdi-pencil </v-icon>
                <v-icon small> mdi-delete </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
    computed: {},
};
</script>

<style></style>
