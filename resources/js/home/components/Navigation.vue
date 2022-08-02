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
                            >IDev</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider />

            <v-list dense v-if="isHome">
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
            <v-list dense v-else>
                <v-list-item
                    v-for="([icon, text, link], i) in itemsNoHome"
                    :key="i"
                    link
                    :href="link"
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
                    max-width="180px"
                />
            </v-toolbar-title>
            <template>
                <v-text-field
                    class="mx-7 mt-3"
                    v-model="searchProduct"
                    label="Buscar"
                    @keyup="buscarProductos(searchProduct)"
                    @click="goToProductList"
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
                <v-btn v-if="isHome" text @click="$vuetify.goTo('#hero')" class="sombra">
                    <span class="mr-2">Inicio</span>
                </v-btn>
                <v-btn v-else text href="/home" class="sombra">
                    <span class="mr-2">Inicio</span>
                </v-btn>
                <!--<v-btn text @click="$vuetify.goTo('#features')" class="sombra">
                    <span class="mr-2">Sobre</span>
                </v-btn>-->
                <v-btn text href="/listproducts" class="sombra">
                    <span class="mr-2">Productos y servicios</span>
                </v-btn>
                <v-btn v-if="isHome" rounded outlined text @click="$vuetify.goTo('#contact')" class="sombra">
                    <span class="mr-2">Contacto</span>
                </v-btn>
                <v-btn v-else rounded outlined text href="/home/#contact" class="sombra">
                    <span class="mr-2">Contacto</span>
                </v-btn>
            </div>
        </v-app-bar>
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
    text-shadow: 1px 1px #020202;
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
            /*["mdi-information-outline", "Sobre", "#features"],*/
            ["mdi-archive", "Productos y Servicios", "#pricing"],
            ["mdi-email-outline", "Contato", "#contact"],
        ],
        itemsNoHome: [
            ["mdi-home-outline", "Inicio", "/home"],
            ["mdi-archive", "Productos y Servicios", "/listproducts"],
            ["mdi-email-outline", "Contato", "/home/#contact"],
        ],
    }),
    props: {
        color: String,
        flat: Boolean,
    },
    methods: {
        ...mapMutations("app", ["setIsHomeActive", "setIsHomePasive"]),
        onResize() {
            this.isXs = window.innerWidth < 850;
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
