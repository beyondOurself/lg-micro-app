import "./public-path";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/router.js";
import ElementPlus from "element-plus";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
// 监听卸载操作
window.addEventListener("unmount", function () {
  app.unmount();
});
