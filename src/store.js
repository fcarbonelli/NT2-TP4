import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

const url = "https://60aec1525b8c300017deb313.mockapi.io/nombre/"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listaUsuarios: [],
  },
  actions : {
    async getUsersAxios({commit}) {
        try {
          let { data } = await axios(url);
          commit('getUsersAxios', data);
        } catch(e) {
          console.log(e);
        }
        return this.state.listaUsuarios;
      },
    async postUserAxios({commit}, userData) {
        try {
            let { data } = await axios.post(url, userData);
            commit('postUserAxios', data);
        } catch(e) {
            console.log(e);
        }
    },
  },
  mutations : {
    getUsersAxios(state, data) {
        state.listaUsuarios = data;
      },
    postUserAxios(state, userData) {
         state.listaUsuarios = [state.listaUsuarios, userData];
    },
  }
})