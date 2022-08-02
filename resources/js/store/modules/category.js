import axios from "axios";
//Variables Category
const state = {
    dialog: false,
    edit: false,
    deleteDialog: false,
    isDeleted: false,
    categories: [],
    categoryForOther: {},
    isCategoryForOther: false,
    category: {},
    img: null,
    headers: [
        {
            text: "Nombre",
            align: "start",
            value: "nombre",
        },
        { text: "Imagen", value: "img_url" },
        { text: "Opciones", value: "actions", sortable: false, width: "150px" },
    ],
};

//Acciones Categoria
const actions = {
    getCategories({ commit }) {
        axios.get("/categories").then((response) => {
            commit("GET_CATEGORIES", response.data);
        });
    },

    async createCategory({ commit, dispatch, state }, params) {
        //si existe imagen crea esa imagen sino pasa linea
        if (params.img_url) {
            await this.dispatch("image/createImage", params.img_url).then(
                (res) => {
                    params.img_url = res.data;
                }
            );
        }

        axios.post("/categories", params).then((response) => {
            if (state.isCategoryForOther) {
                state.categoryForOther = response.data;
            }
            commit("CREATE_CATEGORY", params);
        });
        await dispatch("getCategories");
    },

    //editar categoria
    //dispath: llama al mismo action para ejecutar
    //getters: llama a getter para retornar obj
    async editCategory({ commit, getters, dispatch }, params) {
        //busca categoria anterior luego para borrar la imagen anterior
        let item = getters.getCategoryById(params.id);

        //creamos nueva imagen si hay imagen

        if (params.img_url !== item.img_url) {
            await this.dispatch("image/createImage", params.img_url).then(
                (response) => {
                    params.img_url = response.data;
                    this.dispatch("image/editImage", item);
                }
            );
        }

        //editar agregando la imagen nueva
        axios.put(`/categories/${params.id}`, params).then((response) => {
            commit("EDIT_CATEGORY", response);
        });
        await dispatch("getCategories");
    },

    deleteCategory({ commit, dispatch }, params) {
        axios
            .delete(`/categories/${params.id}`)
            .then((response) => {
                commit("DELETE_CATEGORY", params);
            })
            .catch((error) => {
                console.log(error.response.data);
                alert(error.response.data);
            });

        dispatch("getCategories");
    },
};

//Metodos Category
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
    setCategory(state, category) {
        state.category = category;
    },
    setImage(state, img) {
        state.img = img;
    },
    clearCategoryForOther(state) {
        state.categoryForOther = {};
        state.isCategoryForOther = false;
    },
    setIsCategoryForOther(state) {
        state.isCategoryForOther = true;
    },
    clearCategory(state) {
        state.category = {};
    },
    getEdit(state, item) {
        state.category.id = item.id;
        state.category.nombre = item.nombre;
        state.category.img_url = item.img_url;
    },
    GET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    CREATE_CATEGORY(state) {
        state.dialog = false;
        state.img = "";
    },
    CREATE_IMAGE(state, item) {
        state.img = item;
    },
    EDIT_CATEGORY(state) {
        state.dialog = false;
        state.edit = false;
        state.img = "";
    },
    DELETE_CATEGORY(state) {
        state.delete = false;
        state.isDeleted = false;
    },
};

const getters = {
    //busca categoria por id
    getCategoryById: (state) => (id) => {
        return state.categories.find((obj) => obj.id === id);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
