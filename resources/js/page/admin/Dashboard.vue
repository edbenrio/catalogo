<template>
    <v-app app class="pa-6" id="inspire">
        <drawer />
        <app-bar />

        <v-main app id="container">
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <!-- <content /> -->
        <!-- <router-view /> -->
        <footer />
    </v-app>
</template>
<script>
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        AppBar,
        Drawer,
        Content,
        Footer,
    },
};
</script>
