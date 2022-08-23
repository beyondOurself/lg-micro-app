import Vue from "vue";
import App from "./App.vue";
import routes from "@/routes/router.js";
import VueRouter from "vue-router";
import microApp from "@micro-zoe/micro-app";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

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

Vue.use(Antd);

const router = new VueRouter({
  mode: "hash",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
