<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 10:27:54
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 14:40:26
 * @FilePath: \vue3\src\components\demo\lg-demo-to.vue
 * @Description: 测试路由跳转
-->

<template>
  <div class="lg-demo-to">
    <div class="demo_to">
      <!-- S 跳转到页面 -->
      <div>
        <el-button @click="toTest1" type="primary">跳转到 test1 页面</el-button>
        <el-button @click="toTest2" type="primary">跳转到 test2 页面</el-button>
      </div>
      <!-- E 跳转到页面 -->

      <!-- S 演示操作 -->

      <!-- <div class="layout_container_opreation">
        <router-link to="/app-vue3/test1">test1</router-link>

        <router-link to="/app-vue3/test2">test2</router-link>
      </div> -->

      <!-- E 演示操作 -->
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
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>


