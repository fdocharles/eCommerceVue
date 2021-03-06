import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Fragment from "vue-fragment";

Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

let app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

global.vm = app;
