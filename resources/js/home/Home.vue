<template>
    <v-app>
        <navigation :color="color" :flat="flat" class="mb-16" />
        <v-main class="pt-0">
            <router-view></router-view>
        </v-main>
        <v-scale-transition v-if="isHome">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        fab
                        v-scroll="onScroll"
                        dark
                        fixed
                        bottom
                        right
                        color="#25D366"
                        href="https://wa.me/595995360910?text=Estoy interesado en sus productos"
                        target="_blank"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                </template>
                <span>Contactar por WhatsApp</span>
            </v-tooltip>
        </v-scale-transition>
        <foote />
    </v-app>
</template>

<style scoped>
.v-main {
    background-image: url("./assets/img/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";
import { mapState, mapMutations } from "vuex";

export default {
    name: "App",

    components: {
        navigation,
        foote,
        home,
        about,
        pricing,
        contact,
    },

    data: () => ({
        fab: false,
        color: "#01579B",
        flat: null,
    }),

    created() {
        const top = window.pageYOffset || 0;
        if (top <= 60) {
            //this.color = "transparent";
            this.flat = true;
        }
    },

    watch: {
        fab(value) {
            if (value) {
                this.color = "#01579B";
                this.flat = false;
            } else {
                //this.color = "transparent";
                this.flat = true;
            }
        },
    },

    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 60;
        },
        toTop() {
            this.$vuetify.goTo(0);
        },
    },
    computed: {
        ...mapState("app", ["isHome"]),
    },
};
</script>
