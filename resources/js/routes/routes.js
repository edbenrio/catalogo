import Producto from "../page/admin/product/Producto.Component.vue";
import Category from "../page/admin/category/Category.Component.vue";
import Image from "../page/admin/image/Image.Component.vue";
import Marca from "../page/admin/brand/Marca.Component.vue";
import Dashboard from "../page/admin/Dashboard.vue";
import Home from "../home/Home.vue";
import Guest from "../home/Guest.vue";
import listProduct from "../market/ListProduct.component.vue";
import showProduct from "../market/ShowProduct.Component.vue";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/admin",
        component: Dashboard,
        children: [
            /* {
                path: "/image",
                name: "Image",
                component: Image,
            },*/
            {
                path: "/producto",
                name: "Producto",
                component: Producto,
            },
            {
                path: "/marca",
                name: "marca",
                component: Marca,
            },
            {
                path: "/category",
                name: "categoria",
                component: Category,
            },
        ],
    },
    {
        path: "/",
        component: Home,
        children: [
            {
                path: "home",
                component: Guest,
                name: "home",
            },
            {
                path: "listproducts",
                component: listProduct,
                name: "list",
            },
            {
                path: "showproduct/:id",
                component: showProduct,
                name: "show",
            },
        ],
    },
];

export default new VueRouter({
    mode: "history",
    routes,
});
