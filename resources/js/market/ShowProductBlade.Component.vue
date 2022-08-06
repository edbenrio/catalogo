<template>
    <div>
        <v-app>
            <navigation class="mb-16" />
            <v-container>
                <v-row class="mb-5">
                    <v-col class="col-md-5 col-sm-12 col-12">
                        <template>
                            <v-row class="mb-2">
                                <v-carousel
                                    class="pa-0"
                                    eager
                                    height="auto"
                                    v-model="carousel"
                                    hide-delimiter-background
                                >
                                    <v-carousel-item
                                        v-for="(item, i) in product.image"
                                        :key="i"
                                    >
                                        <v-img
                                            :src="'../' + item.img_url"
                                            contain
                                            max-height="500"
                                        ></v-img>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-row>
                            <v-row justify="center">
                                <v-card
                                    v-for="(item, i) in product.image"
                                    :key="i"
                                    width="50"
                                    height="50"
                                    class="mb-2 pa-0 mx-1"
                                    hover
                                    @click="carousel = i"
                                >
                                    <v-img
                                        :src="'../' + item.img_url"
                                        height="50"
                                        width="50"
                                    ></v-img>
                                </v-card>
                            </v-row>
                        </template>
                    </v-col>

                    <v-col class="col-md-7 col-sm-12 col-12 card-outter">
                        <h3>{{ product.nombre }}</h3>
                        <v-divider class="grey"></v-divider>
                        <h5 v-if="product.brand != null">
                            Marca: {{ product.brand.nombre }}
                        </h5>
                        <p>{{ product.descripcion }}</p>

                        <p v-if="product.venta" class="text-success">
                            Disponible para venta
                        </p>
                        <p v-if="product.alquiler" class="text-success">
                            Disponible para alquiler
                        </p>

                        <h3 v-if="product.precio" class="text-warning">
                            {{ convertMoney(product.precio) }}
                        </h3>
                        <v-divider class="grey"></v-divider>
                        <v-card-actions class="justify-center">
                            <v-row class="card-actions">
                                <v-col>
                                    <v-btn
                                        v-if="product.venta"
                                        @click="goToCompraWhatsapp"
                                        class="bg-success text-white"
                                        >Comprar</v-btn
                                    >
                                </v-col>
                                <v-col>
                                    <v-btn
                                        v-if="product.alquiler"
                                        @click="goToAlquilerWhatsapp"
                                        class="bg-primary text-white"
                                        >Alquilar</v-btn
                                    >
                                </v-col>
                                <v-col>
                                    <v-btn
                                        class="bg-info text-white"
                                        @click="goToConsultaWhatsapp"
                                        >Consultar</v-btn
                                    >
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-col>
                </v-row>
                <v-row class="my-10">
                    <template>
                        <h3 v-if="product.product_detail">Especificaciones</h3>
                        <v-simple-table>
                            <template v-slot:default>
                                <tbody>
                                    <tr
                                        v-for="(
                                            item, index
                                        ) in product.product_detail"
                                        :key="index"
                                    >
                                        <td>{{ item.campo_nombre }}</td>
                                        <td>{{ item.campo_detalle }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </template>
                </v-row>
            </v-container>
            <template>
                <v-layout column class="fab-container mr-5 mb-5">
                    <v-btn fab class="mb-1 success" @click="goToWhatsapp">
                        <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        class="mb-1 instagram text-white"
                        @click="goToInsta"
                    >
                        <v-icon>mdi-instagram </v-icon>
                    </v-btn>
                    <v-btn fab class="info text-white" @click="goToFace">
                        <v-icon>mdi-facebook </v-icon>
                    </v-btn>
                </v-layout>
            </template>
        </v-app>
    </div>
</template>

<style>
.card-actions {
    position: absolute;
    bottom: 0;
}
.card-outter {
    position: relative;
    padding-bottom: 50px;
}
.fab-container {
    position: fixed;
    bottom: 0;
    right: 0;
}
.instagram {
    background: #f09433;
    background: -moz-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
    );
    background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
    );
    background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
</style>

<script>
import navigation from "../home/components/NavigationBlade";
//import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data: () => ({
        carousel: "",
        desserts: {},

        //product:{}
    }),
    components: {
        navigation,
    },
    props: ["product"],
    mounted() {
        //this.getOneProduct(this.$route.params); //reemplazar con la ID del producto
        //this.isHomePage();
    },
    computed: {
        //...mapState("product", ["product"]),
    },
    methods: {
        /*...mapActions("product", ["getOneProduct"]),
        ...mapMutations("app", ["setIsHomeActive", "setIsHomePasive"]),*/
        setCarousel(i) {
            this.carousel = i;
        },
        goToWhatsapp() {
            let link =
                "https://api.whatsapp.com/send?phone=595985373100&text=" +
                "Hola, estoy interesado en comprar este producto: " +
                this.product.nombre;
            window.open(link, "_blank");
            // window.location.href = link;
        },
        goToCompraWhatsapp() {
            let link =
                "https://api.whatsapp.com/send?phone=595985373100&text=" +
                "Hola, estoy interesado en comprar este producto: " +
                this.product.nombre;
            window.open(link, "_blank");
            // window.location.href = link;
        },
        goToAlquilerWhatsapp() {
            let link =
                "https://api.whatsapp.com/send?phone=595985373100&text=" +
                "Hola, estoy interesado en alquilar este producto: " +
                this.product.nombre;
            window.open(link, "_blank");
            // window.location.href = link;
        },
        goToConsultaWhatsapp() {
            let link =
                "https://api.whatsapp.com/send?phone=595985373100&text=" +
                "Hola, estoy interesado en este producto: " +
                this.product.nombre;
            window.open(link, "_blank");
            // window.location.href = link;
        },
        goToInsta() {
            let link = "//www.instagram.com/itapua_medical/";
            window.open(link, "_blank");
            // window.location.href = link;
        },
        goToFace() {
            let link = "https://www.facebook.com/oxigeno.electromedicina.7";
            window.open(link, "_blank");
            //window.location.href = link;
        },
        convertMoney(money) {
            return parseFloat(money).toLocaleString("es-PY", {
                style: "currency",
                currency: "PYG",
                minimumFractionDigits: 0,
            });
        },
    },
};
</script>
