import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/page-home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/app-vue2*",
    name: "app-vue2",
    component: () =>
      import(/* webpackChunkName: "vue2" */ "@/views/page-vue2.vue"),
  },
  {
    path: `${process.env.VUE_APP_V3_BASEROUTE}`,
    name: "app-vue3",
    component: () =>
      import(
        /* webpackChunkName: "vue3" */ `@/views${process.env.VUE_APP_V3_BASEROUTE}.vue`
      ),
  },
  {
    path: "/app-vite3*",
    name: "app-vite3",
    component: () =>
      import(/* webpackChunkName: "vite3" */ "@/views/page-vite3.vue"),
  },
];

export default routes;
