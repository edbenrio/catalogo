<template>
    <v-app id="inspire">
        <navigation />
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import navigation from "../page/Navigation.Component.vue";
export default {
    components: {
        navigation,
    },
};
</script>
