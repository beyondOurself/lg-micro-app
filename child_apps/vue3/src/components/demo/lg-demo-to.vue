<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 10:27:54
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 11:03:31
 * @FilePath: \vue3\src\components\demo\lg-demo-to.vue
 * @Description: 测试路由跳转
-->

<template>
  <div class="lg-demo-to">
    <div class="demo_to">
      <button @click="toTest1">跳转到test1</button>

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
  console.log("点击了");

  router.push({
    path: "/app-vue3/test1",
    query: {
      ...route.query,
    },
  });
};

// export default {
//   name: "LgDemoTo",
//   props: {},
//   components: {},
//   data() {
//     return {};
//   },
//   methods: {
//     /**
//      * @Author: canlong.shen
//      * @description: 跳转到 test1
//      * @default:
//      * @return {*}
//      */
//     toTest1() {
//       console.log("点击了~");
//       this.$router.push({
//         path: "/app-vue3/test1",
//       });
//     },
//   },
//   mounted() {},
// };
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>


