/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import RootApp from "@/root-app.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: window.__MICRO_APP_BASE_ROUTE__ || "/",
    component: RootApp,
    children: [
      // 其他的路由都写到这里
      { path: "test1", component: () => import("@/views/page-test1.vue") },
      { path: "test2", component: () => import("@/views/page-test2.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
