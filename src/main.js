import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router/router";
import store from "./store/store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://vue-axios-test-bb762.firebaseio.com";

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log(res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
