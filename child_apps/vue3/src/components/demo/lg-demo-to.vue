<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 10:27:54
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 16:03:59
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

      <!-- S 演示操作 -->

      <div class="demo_to_item">
        <el-button @click="getRealWindow" type="primary"
          >获取到真实window</el-button
        >
      </div>
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


