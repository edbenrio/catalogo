<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            temporary
            dark
            :src="require('../assets/img/bgDrawer.jpg')"
        >
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img
                            :src="require('../assets/img/logo.png')"
                            alt="Logo"
                        />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title"
                            >Itapúa Medical</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider />

            <v-list dense>
                <v-list-item
                    v-for="([icon, text, link], i) in items"
                    :key="i"
                    link
                    @click="$vuetify.goTo(link)"
                >
                    <v-list-item-icon class="justify-center">
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="subtitile-1">{{
                            text
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            :color="color"
            :flat="flat"
            class="px-15 d-none d-md-block"            
            :class="{ expand: flat }"
        >
            <v-toolbar-title>
                <v-img
                    :src="require('../assets/img/logo.png')"
                    max-width="180px"
                />
            </v-toolbar-title>
            <template>
                <v-text-field
                    class="mx-7 mt-3"
                    v-model="searchProduct"
                    dark
                    label="Buscar"
                    @keyup="buscarProductos(searchProduct)"
                    @click="goToProductList"
                    placeholder="Buscar Producto"
                ></v-text-field>
            </template>
            <v-spacer />
            
            <div>
                <v-btn
                    text
                    dark
                    :to="{ name: 'home' }"
                    @click="
                        setIsHomeActive();
                        $vuetify.goTo('#hero');
                    "
                >
                    <span class="mr-2">Inicio</span>
                </v-btn>
                <v-btn v-if="isHome" text dark @click="$vuetify.goTo('#about')">
                    <span class="mr-2">Nosotros</span>
                </v-btn>
                <v-btn
                    v-if="isHome"
                    text
                    dark
                    @click="$vuetify.goTo('#pricing')"
                >
                    <span class="mr-2">Productos y servicios</span>
                </v-btn>
                <v-btn text dark :to="{ name: 'list' }">
                    <span class="mr-2">Catalogo</span>
                </v-btn>
                <v-btn
                    v-if="isHome"
                    dark
                    rounded
                    outlined
                    @click="$vuetify.goTo('#contact')"
                >
                    <span class="mr-2">Contacto</span>
                </v-btn>
            </div>
        </v-app-bar>

        <v-app-bar
            app
            :color="color"
            :flat="flat"
            class="px-15 d-block d-md-none fixed-top"            
        >
            <template>
                <v-text-field
                    class="mx-7 mt-3"
                    v-model="searchProduct"
                    dark
                    label="Buscar"
                    @keyup="buscarProductos(searchProduct)"
                    @click="goToProductList"
                    placeholder="Buscar Producto"
                ></v-text-field>
            </template>
        </v-app-bar>

        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="mr-4 d-block d-md-none fixed-top"
            dark
        />
    </div>
</template>

<style scoped>
.v-toolbar {
    transition: 0.4s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}

.sombra {
    color: #001d6e;
}

.v-application--is-ltr .v-text-field .v-label {
    color: rgb(255 255 255 / 60%);
}

</style>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data: () => ({
        searchProduct: "",
        drawer: null,
        isXs: false,
        items: [
            ["mdi-home-outline", "Inicio", "#hero"],
            ["mdi-information-outline", "Nosotros", "#features"],
            ["mdi-archive", "Productos y Servicios", "#pricing"],
            ["mdi-email-outline", "Contato", "#contact"],
        ],
    }),
    props: {
        color: String,
        flat: Boolean,
    },
    methods: {
        ...mapMutations("app", ["setIsHomeActive", "setIsHomePasive"]),
        onResize() {
            this.isXs = window.innerWidth < 1300;
        },
        ...mapMutations("app", ["setIsHomePasive", "setIsHomeActive"]),

        ...mapActions("product", ["getProducts", "buscarProductos"]),

        goToProductList() {
            const path = `/listproducts`;
            if (this.$route.path !== path) this.$router.push(path);
            this.setIsHomePasive();
        },
    },

    watch: {
        isXs(value) {
            if (!value) {
                if (this.drawer) {
                    this.drawer = false;
                }
            }
        },
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
    computed: {
        ...mapState("app", ["isHome"]),
    },
};
</script>
