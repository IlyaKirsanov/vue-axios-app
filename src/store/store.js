import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    signUp({ commit, dispatch }, authData) {
      axios
        .post("/accounts:signUp?key=[API_KEY]", {
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
          dispatch("storeUser", authData);
        });
    },
    signIn({ commit }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=[API_KEY]",
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
    storeUser({ state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/users.json" + "?auth" + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios.get("/users.json" + "?auth" + state.idToken).then(res => {
        const users = [];
        const data = res.data;
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        commit("storeUser", users[0]);
      });
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
});
