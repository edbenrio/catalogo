// Vue & vuex
import Vue from "vue";
import Vuex from "vuex";

// Modules
import app from "./modules/app";
import brand from "./modules/brand";
import product from "./modules/product";
import category from "./modules/category";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        brand,
        product,
        category,
    },
});

export default store;
