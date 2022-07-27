import axios from "axios";

//Variables Category
const state = {};

//Acciones Categoria
const actions = {
    //crea imagen y retorna la direccion url local
    createImage({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios
                .post("create_image", params)
                .then((response) => {
                    //resolve retorna la variable
                    resolve(response);
                })
                .catch((err) => {
                    //reject retorna error si hay
                    reject(err);
                });
        });
    },

    editImage({ commit }, params) {
        //API editar imagen
        axios.put(`create_image/${0}`, params);
    },
};

//Metodos Category
const mutations = {};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
