import Vue from "vue";
import App from "./App.vue";
import routes from "@/routes/router.js";
import VueRouter from "vue-router";
import microApp from "@micro-zoe/micro-app";

Vue.config.productionTip = false;

microApp.start();

const router = new VueRouter({
  mode: "history",
  // 设置主应用基础路由为main-vue2(用于后续部署)，则子应用基础路由(baseroute)为/main-vue2/xxx
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
