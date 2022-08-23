<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 10:27:54
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 17:03:31
 * @FilePath: \vue3\src\components\demo\lg-demo-to.vue
 * @Description: 测试路由跳转
-->

<template>
  <div class="lg-demo-to">
    <div class="demo_to">
      <!-- S 跳转到页面 -->
      <div class="demo_to_item">
        <el-button @click="toTest1" type="primary">跳转到 test1 页面</el-button>
        <el-button @click="toTest2" type="primary">跳转到 test2 页面</el-button>
      </div>
      <!-- E 跳转到页面 -->

      <!-- S 获取真实window -->
      <div class="demo_to_item">
        <el-button @click="getRealWindow" type="primary"
          >获取到真实window</el-button
        >
      </div>
      <!-- E 获取真实window -->

      <!-- S 获取来自基座应用的数据 -->
      <div class="demo_to_item">
        <el-button @click="getBaseData" type="primary"
          >获取来自基座应用的数据</el-button
        >
      </div>
      <!-- E 获取来自基座应用的数据 -->

      <!-- S 子应用向基座应用发送数据 -->
      <div class="demo_to_item">
        <el-button @click="fetchBaseData" type="primary"
          >子应用向基座应用发送数据</el-button
        >
      </div>
      <!-- E 子应用向基座应用发送数据 -->
      <!-- S 子应用发送全局数据 -->
      <div class="demo_to_item">
        <el-button @click="setGlobalData" type="primary"
          >子应用发送全局数据</el-button
        >
      </div>
      <!-- E 子应用发送全局数据 -->
      <!-- S 子应用获取全局数据 -->
      <div class="demo_to_item">
        <el-button @click="getGlobalData" type="primary"
          >子应用获取全局数据</el-button
        >
      </div>
      <!-- E 子应用获取全局数据 -->
      <!-- S 自定义通讯对象发送数据 -->
      <div class="demo_to_item">
        <el-button @click="dispatchCustom" type="primary"
          >自定义通讯对象发送数据</el-button
        >
      </div>
      <!-- E 自定义通讯对象发送数据 -->
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const toTest1 = () => {
  router.push({
    path: "/app-vue3/test1",
    query: {
      ...route.query,
    },
  });
};
const toTest2 = () => {
  router.push({
    path: "/app-vue3/test2",
    query: {
      ...route.query,
    },
  });
};

// > 获取真实的window
const getRealWindow = () => {
  console.log('(0, eval)("window")', (0, eval)("window"));

  console.log("=================================");
  console.log(
    'new Function("return window")()',
    new Function("return window")()
  );
  console.log("=================================");

  console.log('Function("return window")()', Function("return window")());
  console.log("==================================");
  console.log("window.rawWindow", window.rawWindow);
};
// < 获取真实的window

// > 获取来自基座应用的数据

/**
 * 直接获取数据
 */
const getBaseData = () => {
  const data = window.microApp.getData(); // 返回基座下发的data数据
  console.log(" getData 来自基座的数据", data);
};

/**
 * 绑定监听函数
 * !!!重要说明: 因为子应用是异步渲染的，而基座发送数据是同步的，
 * 如果在子应用渲染结束前基座应用发送数据，则在绑定监听函数前数据已经发送，在初始化后不会触发绑定函数，
 * 但这个数据会放入缓存中，此时可以设置autoTrigger为true主动触发一次监听函数来获取数据。
 * window.microApp.addDataListener(dataListener: Function, autoTrigger?: boolean)
 *
 * // 解绑监听函数
 * window.microApp.removeDataListener(dataListener: Function)
 *
 * // 清空当前子应用的所有绑定函数(全局数据函数除外)
 *  window.microApp.clearDataListener()
 */

const dataListener = (data) => {
  console.log("dataListener 来自基座应用的数据", data);
};

window.microApp.addDataListener(dataListener, true);

// < 获取来自基座应用的数据

// > 子应用向基座应用发送数据
const fetchBaseData = () => {
  // dispatch只接受对象作为参数
  window.microApp.dispatch({ type: "子应用发送的数据" });
};
// < 子应用向基座应用发送数据

/**
 * @Author: canlong.shen
 * @description: 发送全局数据
 * @default:
 * @return {*}
 */
const setGlobalData = () => {
  window.microApp.setGlobalData({ type: "子应用发送的全局数据" });
};

/**
 * @Author: canlong.shen
 * @description:  获取全局数据
 * @default:
 * @return {*}
 */

const getGlobalData = () => {
  const getGlobalData = window.microApp.getGlobalData(); // 返回全局数据

  console.log("子应用获取全局数据", getGlobalData);
};

/**
 * @Author: canlong.shen
 * @description:
 * @default:
 * @return {*}
 */
const dispatchCustom = () => {
  console.log("点击了");
  window.eventCenterForAppVue3.dispatch({
    type: "子应用 自定义通讯发送的数据",
  });
};
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */
.demo_to_item {
  margin: 16px 0;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>


