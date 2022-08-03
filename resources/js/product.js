import Vuetify from "vuetify";
import Vue from "vue";

require("./bootstrap");

window.Vue = require("vue").default;

Vue.use(Vuetify);

Vue.component("mostrar-producto", require("./market/ShowProductBlade.Component.vue").default);

const app = new Vue({
    el: "#app2",
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: "#119DA4",
                    secondary: "#171b34",
                    accent: "3D87E4"
                }
            }
        }
    })  
});