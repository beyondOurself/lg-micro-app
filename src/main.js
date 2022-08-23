import Vue from "vue";
import App from "./App.vue";
import routes from "@/routes/router.js";
import VueRouter from "vue-router";
import microApp from "@micro-zoe/micro-app";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

microApp.start();

Vue.use(Antd);

const router = new VueRouter({
  mode: "hash",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
