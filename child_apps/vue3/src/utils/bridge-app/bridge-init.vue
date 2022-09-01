<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-09-01 13:43:07
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-09-01 16:19:32
 * @FilePath: \vue3\src\utils\bridge-app\bridge-init.vue
 * @Description: 通讯初始化
-->

<template>
  <div></div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
const instance = getCurrentInstance();
const _self = instance?.appContext.config.globalProperties;
const $bridge = _self.$bridge;

const router = useRouter();

// 订阅 基座 传来的数据
$bridge.subscribe("/childs/all/data", (payLoad = {}) => {
  console.log("订阅了基座传输回来的数据", payLoad);
});
// 订阅 路由跳转
$bridge.subscribe(
  `/childs/${window.__MICRO_APP_NAME__}/router/action`,
  (payLoad = {}) => {
    console.log("订阅了基座路由跳转", payLoad);
    const { action = "", route = {} } = payLoad;

    switch (action) {
      case "push":
        router.push(route);

        break;

      default:
        break;
    }
  }
);

// 基座路由跳转
</script>