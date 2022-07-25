import axios from "axios";
//Variables Brand
const state = {
    dialog: false,
    edit: false,
    deleteDialog: false,
    isDeleted: false,
    products: [],
    product: {},
    canCreate: false,
    canEdit: false,
    canDelete: false,
    product: {
        venta: 0,
        alquiler: 0,
    },
    headers: [
        { text: "Nombre", value: "nombre", sortable: true, width: "150px" },
        {
            text: "Descripcio",
            value: "descripcion",
            sortable: false,
            width: "150px",
        },
        { text: "Codigo", value: "codigo", sortable: false, width: "150px" },
        { text: "Metodo", value: "metodo", sortable: false, width: "150px" },
        { text: "Marca", value: "brand_id", sortable: false, width: "150px" },
        { text: "Opciones", value: "actions", sortable: false, width: "150px" },
    ],
};

//Acciones Brand
const actions = {
    getProducts({ commit }) {
        axios
            .get("/products")
            .then((response) => {
                commit("GET_PRODUCTS", response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    },

    async createProduct({ commit, dispatch }, params) {
        //si existe imagen crea esa imagen sino pasa linea
        if (params.img_url) {
            await this.dispatch("image/createImage", params.img_url).then(
                (res) => {
                    params.img_url = res.data;
                }
            );
        }

        axios
            .post("/products", params)
            .then((response) => {
                commit("CREATE_PRODUCT", params);
            })
            .then(() => {
                dispatch("getProducts");
                commit("clearProduct");
            });
    },

    async editProduct({ commit, dispatch, getters }, params) {
        let item = getters.getProductById(params.id);

        if (params.img_url !== item.img_url) {
            await this.dispatch("image/createImage", params.img_url).then(
                (res) => {
                    params.img_url = res.data;
                    this.dispatch("image/editImage", item);
                }
            );
        }

        await axios.put(`/products/${params.id}`, params).then((response) => {
            commit("EDIT_PRODUCT", params);
        });

        dispatch("getProducts");
        commit("clearProduct");
    },

    deleteProduct({ commit }, params) {
        axios
            .delete(`/products/${params.id}`)
            .then((response) => {
                commit("DELETE_PRODUCT", params);
            })
            .catch((error) => {
                console.log(error.response.data);
                alert(error.response.data);
            });
    },

    getOneProduct({ commit }, params) {
        axios.get(`/products/${params.id}`).then((response) => {
            commit("GET_ONE_PRODUCT", params);
        });
    },
};

//Metodos Brand
const mutations = {
    setDialog(state) {
        if (state.edit === true) {
            state.edit = false;
        }

        state.dialog = !state.dialog;
    },
    setEdit(state) {
        state.edit = !state.edit;
    },
    setDeleteDialog(state) {
        state.deleteDialog = !state.deleteDialog;
    },
    setProduct(state, item) {
        state.product = Object.assign({}, item);
    },
    clearProduct(state) {
        state.product = {};
    },
    GET_PRODUCTS(state, products) {
        state.products = products;
    },
    GET_ONE_PRODUCT(state, product) {
        state.product = product;
    },
    CREATE_PRODUCT(state) {
        state.dialog = false;
        state.img = null;
    },
    EDIT_PRODUCT(state) {
        state.dialog = false;
        state.edit = false;
        state.img = null;
    },
    DELETE_PRODUCT(state) {
        state.delete = false;
    },
    setImage(state, item) {
        state.img = item;
    },
};

const getters = {
    getProductById: (state) => (id) => {
        return state.products.find((obj) => obj.id === id);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
