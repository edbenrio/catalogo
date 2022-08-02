<template>
    <v-dialog
        @keydown.esc="setDialog"
        @click:outside="setDialog"
        v-model="dialog"
        max-width="500"
    >
        <v-alert
            border="right"
            colored-border
            type="error"
            elevation="2"
            icon="mdi-alert"
        >
            <h3 class="text-h5">Estas Seguro De Eliminar?</h3>
            <div>Los datos eliminados ya no se pueden restablecer.</div>
            <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
            <v-spacer></v-spacer>
            <v-btn class="mr-3" text @click="setDialog"> Cancelar </v-btn>

            <v-btn color="red" text v-on:click="deleteComponent(), setDialog()">
                Eliminar
            </v-btn>
        </v-alert>
    </v-dialog>
</template>

<script>
export default {
    props: ["dialog", "setDialog"],
    methods: {
        //Si preciona el boton Eliminar activa la funcion donde se llamo
        deleteComponent() {
            this.$emit("deleted");
        },
    },
};
</script>

<style></style>
