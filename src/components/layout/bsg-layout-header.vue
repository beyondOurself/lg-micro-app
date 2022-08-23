<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-20 15:25:32
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-22 16:49:39
 * @FilePath: \micro-app-demo-own\src\components\layout\bsg-layout-header.vue
 * @Description: 布局 头部
-->



<template>
  <div class="bsg-layout-header">
    <div class="layout_header">
      <span>micro-app 演示</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "BsgLayoutHeader",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */

.layout_header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>