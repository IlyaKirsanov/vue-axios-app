import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";
import globalAxios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signUp({ commit }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyD17ETHr7pXldHU3rveESWADlzidhTUhVk", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response);
          commit("authUser", {
            token: response.data.idToken,
            userId: response.data.localId
          });
        });
    },
    signIn({ commit }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyD17ETHr7pXldHU3rveESWADlzidhTUhVk",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(response => {
          console.log(response);
          commit("authUser", {
            token: response.data.idToken,
            userId: response.data.localId
          });
        });
    },

  },
  getters: {}
});
