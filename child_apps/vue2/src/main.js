import "./public-path";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

window.microApp.addGlobalDataListener((globalData) => {
  console.log("vue2 子应用,监听全局数据", globalData);
}, true);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
