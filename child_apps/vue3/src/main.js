import { createApp } from "vue";
import App from "./App.vue";

// main.js
const app = createApp(App);
app.mount("#app");

// 监听卸载操作
window.addEventListener("unmount", function () {
  app.unmount();
});
