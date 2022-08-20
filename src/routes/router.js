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
    path: "/app-vue3*",
    name: "app-vue3",
    component: () =>
      import(/* webpackChunkName: "vue3" */ "@/views/page-vue3.vue"),
  },
];

export default routes;
