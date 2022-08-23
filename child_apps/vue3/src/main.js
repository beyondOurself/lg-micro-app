import "./public-path";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/router.js";
import ElementPlus from "element-plus";

// > 环境变量

/**
 * 判断应用是否在微前端环境中
 *
 * */
console.log(
  "window.__MICRO_APP_ENVIRONMENT__",
  "是否在微环境:",
  window.__MICRO_APP_ENVIRONMENT__
);

/**
 *应用名称
 */

console.log("__MICRO_APP_NAME__", "应用名称:", window.__MICRO_APP_NAME__);
/**
 *子应用的静态资源前缀
 */

console.log(
  "__MICRO_APP_PUBLIC_PATH__",
  "子应用的静态资源前缀:",
  window.__MICRO_APP_PUBLIC_PATH__
);
/**
 *子应用的基础路由
 */

console.log(
  "__MICRO_APP_BASE_ROUTE__",
  "子应用的基础路由:",
  window.__MICRO_APP_BASE_ROUTE__
);

// < 环境变量

// > 子应用 监听全局数据

/**
 * 绑定监听函数
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 * window.microApp.addGlobalDataListener(dataListener: Function, autoTrigger?: boolean)
 *
 * // 解绑监听函数
 * window.microApp.removeGlobalDataListener(dataListener: Function)
 *
 * // 清空当前子应用绑定的所有全局数据监听函数
 * window.microApp.clearGlobalDataListener()
 *
 */

window.microApp.addGlobalDataListener((globalData) => {
  console.log("vue3 子应用,监听全局数据", globalData);
}, true);

// < 子应用 监听全局数据

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
// 监听卸载操作
window.addEventListener("unmount", function () {
  console.log("子应用 被卸载了");
  app.unmount();
});
