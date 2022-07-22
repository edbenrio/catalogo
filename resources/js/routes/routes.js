import Producto from "../page/admin/product/Producto.Component.vue";
import Image from "../page/admin/image/Image.Component.vue";
import Marca from "../page/admin/marca/Marca.Component.vue";
import Dashboard from "../page/admin/Dashboard.vue";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/admin",
        component: Dashboard,
        children: [
            {
                path: "image",
                name: "Image",
                component: Image,
            },
            {
                path: "producto",
                name: "Producto",
                component: Producto,
            },
            {
                path: "marca",
                name: "marca",
                component: Marca,
            },
        ],
    },
];

export default new VueRouter({
    mode: "history",
    routes,
});
