<template>
    <v-card class="overflow-hidden">
        <v-app-bar app color="white">
            <v-app-bar-nav-icon @click="setMini()"></v-app-bar-nav-icon>

            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <!--<span class="hidden-sm-and-down">{{user.name}}</span> -->
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        class="mx-2"
                        v-bind="attrs"
                        v-on="on"
                        color="primary"
                        dark
                    >
                        {{ user.username }}
                        <v-icon> mdi-account </v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item link>
                        <v-list-item-title @click="logout">
                            <v-icon> mdi-logout </v-icon>
                            Cerrar Sesión
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "AppBar",
    mounted() {
        this.getUser();
    },
    computed: {
        ...mapState("app", ["mini", "user"]),
    },
    methods: {
        ...mapMutations("app", ["setMini"]),
        ...mapActions("app", ["getUser", "logout"]),
    },
};
</script>
