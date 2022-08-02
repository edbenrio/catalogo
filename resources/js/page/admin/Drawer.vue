<template>
    <v-card class="overflow-hidden">
        <v-navigation-drawer
            id="default-drawer"
            app
            :v-model="drawer"
            :mini-variant.sync="mini"
            mini-variant-width="80"
            permanent
            color="blue lighten-4"
        >
            <!-- Encabezado Navigation Drawer -->
            <v-list>
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Admin Page
                        </v-list-item-title>
                        <!-- <v-list-item-subtitle
                            >xxxxx_xxxx@xxxxx.com</v-list-item-subtitle
                        >-->
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <div class="text-center" high="100%" v-if="!isLoadingPermissions">
                <v-progress-circular
                    color="primary"
                    indeterminate
                ></v-progress-circular>
            </div>

            <v-list nav dense>
                <!-- Recorrido de grupo y titulo -->
                <v-list-item-group
                    color="primary"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-subheader>{{ item.title }}</v-subheader>

                    <!-- Recorrido de sub grupos -->
                    <v-list-item
                        v-for="(group, i) in item.groups"
                        :key="i"
                        :to="{ name: group.to }"
                        style="text-decoration: none"
                        active-class="primary white--text"
                        link
                        class="py-1"
                    >
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="group.text"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
    data: () => ({}),
    mounted() {
        this.getItems();
    },
    computed: {
        ...mapState("app", [
            "mini",
            "drawer",
            "items",
            "gradient",
            "isLoadingPermissions",
        ]),
    },
    methods: {
        //...mapMutations("app", ["setItems",]),
        ...mapActions("app", ["getItems"]),
    },
};
</script>
<style lang="sass">
#default-drawer

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 8px
    margin-bottom: 8px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
