import Producto from "../page/admin/product/Producto.Component.vue";
import Category from "../page/admin/category/Category.Component.vue";
import Image from "../page/admin/image/Image.Component.vue";
import Marca from "../page/admin/brand/Marca.Component.vue";
import Dashboard from "../page/admin/Dashboard.vue";
import Home from "../home/Home.vue";
import listProduct from "../market/ListProduct.component.vue";

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
            {
                path: "category",
                name: "categoria",
                component: Category,
            },
        ],
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/listproducts",
        component: listProduct,
    }
];

export default new VueRouter({
    mode: "history",
    routes,
});
