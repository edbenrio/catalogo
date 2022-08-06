<template>
    <div id="listproducts">
        <v-app>
            <template>
                <v-container>
                    <v-row justify="space-around">
                        <!-- -->
                        <v-col
                            v-for="(product, i) in products"
                            :key="i + 'a'"
                            lg="3"
                            md="4"
                            sm="12"
                            cols="12"
                        >
                            <v-card
                                class="my-3 mx-3 card-outter"
                                @click="goToLink(product)"
                            >
                                <v-img
                                    :contain="true"
                                    height="150px"
                                    :src="
                                        product.image.length > 0
                                            ? product.image[0].img_url
                                            : image
                                    "
                                    class=""
                                ></v-img>
                                <v-card-title>
                                    {{ product.nombre }}
                                </v-card-title>
                                <v-card-subtitle>
                                    <span v-if="product.venta"
                                        >Disponible para venta</span
                                    >
                                    <br />
                                    <span v-if="product.alquiler"
                                        >Disponible para alquiler
                                    </span>
                                </v-card-subtitle>
                                <v-card-subtitle
                                    v-if="product.precio"
                                    class="text-h5 mb-1"
                                >
                                    {{ convertMoney(product.precio) }}
                                </v-card-subtitle>

                                <v-card-text> </v-card-text>
                                <v-card-actions>
                                    <v-btn depressed color="success" block>
                                        Ver producto
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </template>
        </v-app>
    </div>
</template>
<style>
.card-outter {
    position: relative;
    padding-bottom: 50px;
}
</style>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import imageUrl from "../../assets/no-foto.png";

export default {
    data: () => ({
        image: imageUrl,
        searchProduct: "",
    }),
    components: {},
    mounted() {
        this.getProducts();
        this.isHomePage();
    },
    computed: {
        ...mapState("product", ["products"]),
        ...mapState("app", ["isHome"]),
    },
    methods: {
        ...mapActions("product", ["getProducts", "buscarProductos"]),
        ...mapMutations("app", ["setIsHomeActive", "setIsHomePasive"]),
        verProducto(id) {
            alert(id);
        },
        isHomePage() {
            const path = `/listproducts`;
            if (this.$route.path === path) {
                this.setIsHomePasive();
            }
        },
        convertMoney(money) {
            return parseFloat(money).toLocaleString("es-PY", {
                style: "currency",
                currency: "PYG",
                minimumFractionDigits: 0,
            });
        },
        goToLink(product) {
            window.open(`/products/${product.id}`, "_parent");
        },
    },
};
</script>
