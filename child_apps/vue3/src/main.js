import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
// ** vue-router在hash模式无法通过base设置基础路由
// 创建一个空的路由页面，将其它路由作为它的children
import RootApp from "./root-app.vue";

import PateTest1 from "@/views/page-test1.vue";
import PateTest2 from "@/views/page-test2.vue";

console.log(
  "window.__MICRO_APP_BASE_ROUTE__ ",
  ">>>>",
  window.__MICRO_APP_BASE_ROUTE__
);
// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const routes = [
  {
    path: window.__MICRO_APP_BASE_ROUTE__ || "/",
    component: RootApp,
    children: [
      // 其他的路由都写到这里
      { path: "/", component: () => import("@/views/page-home.vue") },
      { path: "test1", component: PateTest1 },
      { path: "test2", component: PateTest2 },
    ],
  },
  // { path: "/app-vue3/", component: PateTest1 },
  // { path: "/app-vue3/about", component: PateTest2 },
];

console.log("routes", routes);

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  history: createWebHashHistory(
    window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL
  ),
  routes, // `routes: routes` 的缩写
});

// main.js
const app = createApp(App);
app.use(router);
app.mount("#app");
// 监听卸载操作
window.addEventListener("unmount", function () {
  app.unmount();
});
