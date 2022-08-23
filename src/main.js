import Vue from "vue";
import App from "./App.vue";
import routes from "@/routes/router.js";
import VueRouter from "vue-router";
import microApp from "@micro-zoe/micro-app";

Vue.config.productionTip = false;

microApp.start();

const router = new VueRouter({
  mode: "hash",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
