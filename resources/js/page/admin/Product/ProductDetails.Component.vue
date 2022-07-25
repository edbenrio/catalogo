<template>
    <v-form>
        <v-list v-if="tam">
            <v-card v-for="(array, index) in arrays" :key="index" class="mt-2">
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

        <v-subheader>Adicional {{ tam + 1 }}</v-subheader>
        <v-text-field v-model="texto" label="Item adicional"> </v-text-field>
        <v-btn fab @click="addNew">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-form>
</template>

<script>
export default {
    data: () => ({}),
    methods: {
        addNew() {
            this.tam++;
            this.arrays.push({ texto: this.texto });
        },
    },
};
</script>

<style></style>
