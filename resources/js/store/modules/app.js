import axios from "axios";
//import { commit } from "vuex-pathify";

const state = {
    drawer: true,
    mini: false,
    hasAccess: false,
    isLoadingPermissions: false,
    user: {},
    snackbar: {
        timeout: 1000,
        type: "info",
        icon: "mdi-alert",
        show: false,
        text: "Esto es snackbar",
    },
    items: [],
    gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
    canCreate: false,
    canEdit: false,
    canDelete: false,
};

const actions = {
    async getItems({ commit }) {
        let tempItems = [
            {
                title: "Producto y Marcas",
                groups: [
                    { text: "Marcas", to: "marca" },
                    {
                        text: "Productos",

                        to: "producto",
                    },
                   /* { text: "Imagen", to: "image" },*/
                    { text: "Categoria", to: "category" },
                ],
            },
        ];
        try {
            await axios.get(`/index_permissions`).then((response) => {
                let itemIndex = tempItems.length - 1;
                while (itemIndex >= 0) {
                    let e = tempItems[itemIndex];
                    let groupIndex = e.groups.length - 1;

                    while (groupIndex >= 0) {
                        let group = e.groups[groupIndex];

                        let permissionName = group.to.substring(1) + "_index";
                        let permitidos = response.data.find(
                            (o) => o.name === permissionName
                        );
                        if (permitidos == null) {
                            e.groups.splice(groupIndex, 1);
                            if (e.groups.length == 0) {
                                tempItems.splice(itemIndex, 1);
                            }
                        }
                        groupIndex -= 1;
                    }
                    itemIndex -= 1;
                }
            });
        } catch (e) {
            console.log(e);
        }

        commit("setItems", tempItems);
        commit("setIsLoadingPermissions", true);
    },
    async getPermissions({ commit }, path) {
        let permission = ["create", "edit", "delete"]; //lista de permisos
        let index = permission.length - 1;
        while (index >= 0) {
            //recorre el array de permisos
            let hasAccess = false;
            let url = "/permission" + path + "_" + permission[index];
            await axios
                .get(url)
                .then((response) => {
                    hasAccess = true;
                })
                .catch(() => {
                    hasAccess = false;
                });
            commit("set" + permission[index], hasAccess);
            index -= 1;
        }

        /* esta parte quita opciones del header 
        if(!state.canDelete && !state.canEdit){
            state.headers.splice(2,1);
        }*/
    },
    getUser({ commit }) {
        axios.get("get_current_user").then((response) => {
            commit("setUser", response.data);
        });
    },
    logout() {
        axios.post("logout").then((response) => {
            window.location.href = "/";
        });
    },
};

const mutations = {
    setDrawer(state) {
        state.drawer = !state.drawer;
    },
    setMini(state) {
        state.mini = !state.mini;
    },
    setSnackbar(state, payload) {
        state.snackbar.text = payload.text;
        state.snackbar.type = payload.type;
        state.snackbar.timeout = payload.timeout;
        state.snackbar.show = payload.show;
        state.snackbar.icon = payload.icon;
    },
    setItems(state, items) {
        state.items = items;
    },
    setUser(state, user) {
        state.user = user;
    },
    setSnackbarAlert(state, text) {
        state.snackbar.text = text;
        state.snackbar.type = "error";
        state.snackbar.timeout = 3000;
        state.snackbar.show = true;
        state.snackbar.icon = "mdi-alert-circle-outline";
    },
    setSnackbarInfo(state, text) {
        state.snackbar.text = text;
        state.snackbar.type = "info";
        state.snackbar.timeout = 3000;
        state.snackbar.show = true;
        state.snackbar.icon = "mdi-alert-rhombus-outline";
    },
    setSnackbarSuccess(state, text) {
        state.snackbar.text = text;
        state.snackbar.type = "success";
        state.snackbar.timeout = 3000;
        state.snackbar.show = true;
        state.snackbar.icon = "mdi-check-circle-outline";
    },
    setUser(state, user) {
        state.user = user;
    },
    setcreate(state, access) {
        state.canCreate = access;
    },
    setedit(state, access) {
        state.canEdit = access;
    },
    setdelete(state, access) {
        state.canDelete = access;
    },
    setIsLoadingPermissions(state, isLoadingPermissions) {
        state.isLoadingPermissions = isLoadingPermissions;
    },
};

const getters = {
    getDrawer: (state) => state.drawer,
    getMini: (state) => state.mini,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
