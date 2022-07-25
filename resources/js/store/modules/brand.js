import axios from "axios";
//Variables Brand
const state = {
    dialog: false,
    edit: false,
    deleteDialog: false,
    isDeleted: false,
    brands: [],
    canCreate: false,
    canEdit: false,
    canDelete: false,
    img: "",
    brand: {
        id: "",
        nombre: "",
        img_url: "",
        user_id: "",
    },
    headers: [
        {
            text: "Nombre",
            align: "start",
            value: "nombre",
        },
        { text: "Imagen", value: "img_url", sortable: false },
        { text: "Opciones", value: "actions", sortable: false, width: "150px" },
    ],
};

//Acciones Brand
const actions = {
    getBrands({ commit }) {
        axios.get("/brands").then((response) => {
            commit("SET_BRANDS", response.data);
        });
    },
    async createBrand({ commit, state, dispatch }, params) {
        if (params.img_url) {
            await this.dispatch("image/createImage", params.img_url).then(
                (res) => {
                    params.img_url = res.data;
                }
            );
        }

        axios
            .post("/brands", params)
            .then((response) => {
                if (state.isBrandForOther) state.brandForOther = response.data;
                commit("CREATE_BRAND", params);
            })
            .then(() => {
                this.commit(
                    "app/setSnackbarSuccess",
                    "La marca guardo correctamente"
                );
            })
            .catch((error) => {
                this.commit("app/setSnackbarAlert", error);
            });

        await dispatch("getBrands");
    },
    async editBrand({ commit, dispatch, getters }, params) {
        //busca categoria anterior luego para borrar la imagen anterior
        let item = getters.getBrandById(params.id);

        //creamos nueva imagen
        if (params.img_url !== item.img_url) {
            await this.dispatch("image/createImage", params.img_url).then(
                (response) => {
                    params.img_url = response.data;
                    this.dispatch("image/editImage", item);
                }
            );
        }

        axios.put(`/brands/${params.id}`, params).then((response) => {
            commit("EDIT_BRAND", params);
            this.commit(
                "app/setSnackbarSuccess",
                "La marca editado correctamente"
            );
        });

        await dispatch("getBrands");
    },
    deleteBrand({ commit, dispatch }, params) {
        axios
            .delete(`/brands/${params.id}`)
            .then((response) => {
                commit("DELETE_BRAND", params);
                this.commit(
                    "app/setSnackbarSuccess",
                    "La marca eliminado correctamente"
                );
            })
            .catch((error) => {
                console.log(error.response.data);
                alert(error.response.data);
            });

        dispatch("getBrands");
    },
    async getPermissions({ commit }) {
        let permission = ["create", "edit", "delete"]; //lista de permisos
        let index = permission.length - 1;
        while (index >= 0) {
            //recorre el array de permisos
            let hasAccess = false;
            let url = "/brand_" + permission[index];
            await axios
                .get(`/permission${url}`)
                .then((response) => {
                    hasAccess = true;
                })
                .catch(() => {
                    hasAccess = false;
                });
            commit("set" + permission[index], hasAccess);
            index -= 1;
        }
        /* esta parte quita opciones del header */
        if (!state.canDelete && !state.canEdit) {
            state.headers.splice(2, 1);
        }
    },
};

//Metodos Brand
const mutations = {
    setDialog(state) {
        state.dialog = !state.dialog;
    },
    setEdit(state) {
        state.edit = !state.edit;
    },
    setDeleteDialog(state) {
        state.deleteDialog = !state.deleteDialog;
    },
    setBrand(state, brand) {
        state.brand = brand;
    },
    clearBrand(state) {
        state.brand = {};
    },
    getEdit(state, item) {
        state.brand = Object.create(item);
    },
    setImage(state, img) {
        state.img = img;
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
    SET_BRANDS(state, brands) {
        state.brands = brands;
    },
    CREATE_BRAND(state) {
        state.dialog = false;
    },
    EDIT_BRAND(state) {
        state.dialog = false;
        state.edit = false;
    },
    DELETE_BRAND(state) {
        state.delete = false;
        state.isDeleted = false;
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
