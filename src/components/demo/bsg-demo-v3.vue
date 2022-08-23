<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 11:54:14
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 14:59:38
 * @FilePath: \micro-app-demo-own\src\components\demo\bsg-demo-v3.vue
 * @Description:  vue3 + webpack
-->

<template>
  <div class="bsg-demo-v3">
    <a-button type="primary" @click="toVue3"> 跳转到 vue3 页面 </a-button>
    <a-button type="primary" @click="showEnv"> 项目环境 </a-button>
  </div>
</template>
<script>
export default {
  name: "BsgDemoV3",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    toVue3() {
      this.$router.push({
        path: "/app-vue3",
      });
    },
    showEnv() {
      console.log(process.env.NODE_ENV);
    },
  },
  mounted() {},
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
