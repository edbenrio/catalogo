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
                            >Calango</v-list-item-title
                        >
                        <v-list-item-subtitle>WEB</v-list-item-subtitle>
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
            dark
            class="px-15"
            :class="{ expand: flat }"
        >
            <v-toolbar-title>
                <v-img
                    :src="require('../assets/img/logo.png')"
                    max-width="50px"
                />
            </v-toolbar-title>
            <template>
                <v-text-field
                    class="mx-7 mt-3"
                    v-model="searchProduct"
                    label="Buscar"
                    @keyup="buscarProductos(searchProduct)"
                    @click="$router.push({ name: 'list' })"
                    placeholder="Buscar Producto"
                ></v-text-field>
            </template>
            <v-spacer />
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="mr-4"
                v-if="isXs"
            />
            <div v-else>
                <v-btn
                    to="/home"
                    text
                    @click="
                        $vuetify.goTo('#hero');
                        setIsHomeActive;
                    "
                >
                    <span class="mr-2">Home</span>
                </v-btn>
                <v-btn v-if="isHome" text @click="$vuetify.goTo('#features')">
                    <span class="mr-2">Sobre</span>
                </v-btn>
                <v-btn v-if="isHome" text @click="$vuetify.goTo('#download')">
                    <span class="mr-2">Download</span>
                </v-btn>
                <v-btn to="/listproducts" text>
                    <span class="mr-2">Producto</span>
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<style scoped>
.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
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
            ["mdi-home-outline", "Home", "#hero"],
            ["mdi-information-outline", "Sobre", "#features"],
            ["mdi-download-box-outline", "Download", "#download"],
            ["mdi-currency-usd", "Preços", "#pricing"],
            ["mdi-email-outline", "Contatos", "#contact"],
        ],
    }),
    props: {
        color: String,
        flat: Boolean,
    },
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 850;
        },
        ...mapMutations("app", ["setIsHomePasive", "setIsHomeActive"]),

        ...mapActions("product", ["getProducts", "buscarProductos"]),
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
