<template>
    <div>
        <v-app>
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
                                            :src="item.img_url"
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
                                        :src="item.img_url"
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
                            Gs. 150.000
                        </h3>
                        <v-divider class="grey"></v-divider>
                        <v-card-actions class="justify-center">
                            <v-row class="card-actions">
                                <v-col>
                                    <v-btn
                                        v-if="product.venta"
                                        class="bg-success text-white"
                                        >Comprar</v-btn
                                    >
                                </v-col>
                                <v-col>
                                    <v-btn
                                        v-if="product.alquiler"
                                        class="bg-primary text-white"
                                        >Alquilar</v-btn
                                    >
                                </v-col>
                                <v-col>
                                    <v-btn class="bg-info text-white"
                                        >Consultar</v-btn
                                    >
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-col>
                </v-row>
                <v-row class="my-10">
                    <template>
                        <h3 v-if="product.product_detail.length > 0">
                            Especificaciones
                        </h3>
                        <v-simple-table>
                            <template v-slot:default>
                                <!--    <thead>
                                <tr>
                                <th class="text-left">
                                    Name
                                </th>
                                <th class="text-left">
                                    Calories
                                </th>
                                </tr>
                            </thead> -->
                                <tbody>
                                    <tr
                                        v-for="item in product.product_detail"
                                        :key="item.name"
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
                    <v-btn fab class="mb-1 instagram text-white">
                        <v-icon>mdi-instagram </v-icon>
                    </v-btn>
                    <v-btn fab class="info text-white">
                        <v-icon>mdi-telegram </v-icon>
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
import { mapState, mapActions } from "vuex";
export default {
    data: () => ({
        carousel: "",
        desserts: {},
    }),
    components: {},
    mounted() {
        this.getOneProduct(this.product); //reemplazar con la ID del producto
        console.log(this.product);
    },
    computed: {
        ...mapState("product", ["product"]),
    },
    methods: {
        ...mapActions("product", ["getOneProduct"]),
        setCarousel(i) {
            this.carousel = i;
        },
        goToWhatsapp() {
            let link =
                "https://api.whatsapp.com/send?phone=595995360910&text=" +
                "Hola, estoy interesado en comprar este producto: " +
                this.product.nombre;
            window.open(link, "_blank");
            // window.location.href = link;
        },
        goToInsta() {},
        goTotelegram() {},
    },
};
</script>
