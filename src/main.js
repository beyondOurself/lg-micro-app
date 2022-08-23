import Vue from "vue";
import App from "./App.vue";
import routes from "@/routes/router.js";
import VueRouter from "vue-router";
import microApp from "@micro-zoe/micro-app";
import { EventCenterForMicroApp } from "@micro-zoe/micro-app";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

// > 预加载

// 方式一
microApp.preFetch([
  { name: "appname-vue3", url: "http://localhost:8082/" },
  { name: "appname-vue2", url: "http://localhost:8083/" },
]);

// 方式二
// microApp.preFetch(() => [
//   { name: 'my-app', url: 'xxx' }
// ])

// 方式三
// microApp.start({
//   preFetchApps: [
//     { name: 'my-app', url: 'xxx' }
//   ],
//   // 函数类型
//   // preFetchApps: () => [
//   //   { name: 'my-app', url: 'xxx' }
//   // ],
// })

// < 预加载

microApp.start({
  inline: false, // 默认值false
  /**
   * 子应用被卸载后会缓存静态资源，以便在重新渲染时获得更好的性能。
   * 开启destroy，子应用在卸载后会清空缓存资源，再次渲染时重新请求数据。
   */
  destroy: false, // 默认值false
  /**
   * 禁用样式隔离可以提升页面渲染速度，
   * 在此之前，请确保各应用之间样式不会相互污染。
   */
  disableScopecss: true, // 默认值false
  disableSandbox: false, // 默认值false
  shadowDOM: false, // 默认值false
  ssr: false, // 默认值false,
  // =====================================================================
  /**
   * globalAssets用于设置全局共享资源，它和预加载的思路相同，在浏览器空闲时加载资源并放入缓存，提高渲染效率。
   * 当子应用加载相同地址的js或css资源时，会直接从缓存中提取数据，从而提升渲染速度。
   */

  globalAssets: {
    js: ["", ""], // js地址
    css: ["", ""], // css地址
  },
  // =====================================================================

  /**
   * 全局监听会在每个应用的生命周期执行时都会触发。
   */

  lifeCycles: {
    created(e) {
      console.log("全局监听 created");
    },
    beforemount(e) {
      console.log("全局监听 beforemount");
    },
    mounted(e) {
      console.log("全局监听 mounted");
    },
    unmount(e) {
      console.log("全局监听 unmount");
    },
    error(e) {
      console.log("全局监听 error");
    },
  },
});

// > 基座向子应用,手动发送数据

// 发送数据给子应用 my-app，setData第二个参数只接受对象类型

Vue.prototype.$microApp = microApp;

microApp.setData("appname-vue3", { type: "appname-vue3 来的新数据" });

// < 基座向子应用,手动发送数据

// > 绑定监听函数

/**
 * 绑定监听函数
 * appName: 应用名称
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 *
 * microApp.addDataListener(appName: string, dataListener: Function, autoTrigger?: boolean)
 *
 * // 解绑监听my-app子应用的函数
 * microApp.removeDataListener(appName: string, dataListener: Function)
 *
 *
 * // 清空所有监听appName子应用的函数
 * microApp.clearDataListener(appName: string)
 *
 *
 */

microApp.addDataListener(
  "appname-vue3",
  (data) => {
    console.log("绑定监听函数,获取来自 appname-vue3 的数据 ", data);
  },
  true
);

// < 绑定监听函数

// > 获取全局数据

/**
 * 绑定监听函数
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 *
 * microApp.addGlobalDataListener(dataListener: Function, autoTrigger?: boolean)
 *
 * // 解绑监听函数
 * microApp.removeGlobalDataListener(dataListener: Function)
 *
 *
 * // 清空基座应用绑定的所有全局数据监听函数
 * microApp.clearGlobalDataListener()
 *
 */

microApp.addGlobalDataListener((globalData) => {
  console.log("基座应用,监听全局数", globalData);

  const { topic = "", msg = {} } = globalData;

  if (!topic) {
    console.log("主题无效");

    return;
  }

  if (topic === "/base/redirect/msg") {
    const { path = "" } = msg;

    if (!path) {
      console.log("path 无效");
      return;
    }

    console.log("跳转啦~");
    routes.push({
      path,
    });
  } else {
    console.log("不是跳转主题");
  }
}, true);

// < 获取全局数据

// > 关闭沙箱手动初始化通行对象

// 注意：每个子应用根据appName单独分配一个通信对象
window.eventCenterForAppVue3 = new EventCenterForMicroApp("appname-vue3");

window.eventCenterForAppVue3.addDataListener((data = {}) => {
  console.log("基座应用,自定义通讯对象,获取的数据", data);
}, true);

// < 关闭沙箱手动初始化通行对象

Vue.use(Antd);

const router = new VueRouter({
  mode: "hash",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
