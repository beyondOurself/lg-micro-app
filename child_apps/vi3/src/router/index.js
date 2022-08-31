/*
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-31 14:18:49
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-31 17:06:43
 * @FilePath: \vi3\src\router\index.js
 * @Description:
 */

import { createRouter, createWebHashHistory } from "vue-router";
import RootApp from "../root-app.vue";
import Home from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("../views/page2.vue"),
  },
  {
    path: window.__MICRO_APP_BASE_ROUTE__ || "/",
    component: RootApp,
    children: [
      // 其他的路由都写到这里
      { path: "test1", component: () => import("../views/page-test1.vue") },
      { path: "test2", component: () => import("../views/page-test2.vue") },
    ],
  },
];

console.log("routes", routes);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
