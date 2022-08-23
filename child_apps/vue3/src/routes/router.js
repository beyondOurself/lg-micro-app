/*
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 14:42:18
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 14:47:26
 * @FilePath: \vue3\src\routes\router.js
 * @Description:
 */

import { createRouter, createWebHashHistory } from "vue-router";
import RootApp from "@/root-app.vue";
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
];
const router = createRouter({
  history: createWebHashHistory(
    window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL
  ),
  routes,
});

export default router;
