<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 09:11:58
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 10:22:09
 * @FilePath: \vue3\src\components\layout\lg-layout-header.vue
 * @Description: 布局 导航栏
-->

<template>
  <div class="lg-layout-header">
    <div class="layout_header">vue3 子应用 导航栏</div>
  </div>
</template>
<script>
export default {
  name: "LgLayoutHeader",
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
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: cornflowerblue;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>
