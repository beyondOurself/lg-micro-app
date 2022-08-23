<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 11:54:14
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 14:26:44
 * @FilePath: \micro-app-demo-own\src\components\demo\bsg-demo-v2.vue
 * @Description:  vue3 + webpack
-->

<template>
  <div class="bsg-demo-v2">
    <a-button @click="toVu2" type="primary">跳转到 vue2 页面</a-button>
  </div>
</template>
<script>
export default {
  name: "BsgDemoV2",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    /**
     * @Author: canlong.shen
     * @description: 跳转到vue2 页面
     * @default:
     * @return {*}
     */
    toVu2() {
      this.$router.push({
        path: "/app-vue2",
      });
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
