<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-20 16:00:47
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 11:04:24
 * @FilePath: \micro-app-demo-own\src\components\layout\bsg-layout-container.vue
 * @Description: 布局 内容主体
-->


<template>
  <div class="bsg-layout-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BsgLayoutContainer",
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
.layout_container {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>