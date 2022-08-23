<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-20 15:30:26
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-22 18:01:02
 * @FilePath: \micro-app-demo-own\src\components\layout\bsg-layout-sidebar.vue
 * @Description: 布局 侧边栏
-->

<template>
  <div class="bsg-layout-sidebar">
    <div class="layout_sidebar">
      <div class="layout_sidebar_items">
        <div class="layout_sidebar_item">
          <router-link to="/app-vue2">vue2 子应用</router-link>
        </div>
        <div class="layout_sidebar_item">
          <router-link to="/app-vue3">vue3 + webpack 子应用</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BsgLayoutSidebar",
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
.layout_sidebar {
  background-color: cadetblue;
}

.layout_sidebar_items {
  padding: 12px;
}
.layout_sidebar_item {
  height: 45px;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: aqua;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>