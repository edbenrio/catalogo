import axios from "axios";
//Variables Brand
const state = {
    dialog: false,
    edit: false,
    deleteDialog: false,
    isDeleted: false,
    products: [],
    canCreate: false,
    canEdit: false,
    canDelete: false,
    brand: {
        id: "",
        nombre: "",
        img_url: "",
        user_id: "",
    },
    headers: [
        { text: "Opciones", value: "actions", sortable: false, width: "150px" },
    ],
};

//Acciones Brand
const actions = {};

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
    setProduct(state, product) {
        state.product = product;
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
