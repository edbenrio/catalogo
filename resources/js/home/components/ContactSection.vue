<template>
    <section class="pb-8" id="contact">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row justify="center">
                        <v-col cols="12" sm="5">
                            <h1 class="font-weight-light display-1">
                                Contacto
                            </h1>
                            <h3 class="font-weight-light mt-3 centrado">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil saepe, sint voluptatum optio necessitatibus.
                            </h3>
                            <h3 class="font-weight-light mt-3 centrado">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur suscipit ex laudantium.
                            </h3>
                            <h3 class="font-weight-light mt-3 centrado">
                                Telefono: +1 123 456789<br />
                                Telefono: +1 123 456123
                            </h3>
                            <h3 class="font-weight-light centrado">
                                Email: asdfasdfasd@gmail.com
                            </h3>
                        </v-col>
                        <v-col cols="12" sm="7">
                            <a
                                href="https://maps.app.goo.gl/N9xx7aVQRudoZpYK8"
                                target="_blank"
                            >
                                <img
                                    width="80%"
                                    src="/images/map.jpeg"
                                />
                            </a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <div class="svg-border-waves text-white">
            <v-img :src="require('../assets/img/borderWaves.svg')" />
        </div>
        <v-snackbar
            v-model="snackbar.enabled"
            timeout="3000"
            right
            top
            :color="snackbar.color"
        >
            {{ snackbar.text }}

            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
                    cerrar
                </v-btn>
            </template>
        </v-snackbar>
    </section>
</template>

<style scoped>
#contact {
    background-color: #f4f7f5;
}
.centrado {
    text-align: center;
}

.svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
}
</style>

<script>
// import {db} from '@/main'

export default {
    data: () => ({
        icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
        valid: true,
        name: "",
        nameRules: [
            (v) => !!v || "O campo nome é obrigatório",
            (v) =>
                (v && v.length >= 6) ||
                "O nome precisa ter mais de 6 caracteres",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "O campo email é obrigatório",
            (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
        ],
        textArea: "",
        textAreaRules: [
            (v) => !!v || "O campo de texto é obrigatório",
            (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
        ],
        lazy: false,
        snackbar: {
            enabled: false,
            text: "",
            color: "",
        },
    }),
    methods: {
        submit() {
            /*db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })*/
        },
    },
};
</script>
