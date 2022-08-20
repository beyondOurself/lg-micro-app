<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-20 16:03:15
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-20 20:10:05
 * @FilePath: \micro-app-demo-own\src\components\layout\bsg-layout.vue
 * @Description: 布局
-->



<template>
  <div class="bsg-layout">
    <div class="layout">
      <!-- S 头部 -->
      <BsgLayoutHeader class="layout_header" />

      <!-- E 头部 -->
      <div class="layout_main">
        <!-- S 侧边栏 -->
        <BsgLayoutSidebar class="layout_sidebar" />
        <!-- E 侧边栏 -->

        <!-- S 内容 -->
        <BsgLayoutContainer class="layout_container">
          <slot></slot>
        </BsgLayoutContainer>
        <!-- E 内容 -->
      </div>
    </div>
  </div>
</template>
<script>
import BsgLayoutHeader from "./bsg-layout-header.vue";
import BsgLayoutSidebar from "./bsg-layout-sidebar.vue";
import BsgLayoutContainer from "./bsg-layout-container.vue";

export default {
  name: "BsgLayout",
  props: {},
  components: {
    BsgLayoutHeader,
    BsgLayoutSidebar,
    BsgLayoutContainer,
  },
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

.layout {
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
}

.layout_main {
  display: flex;
  flex: 1;
}

.layout_header {
  flex-basis: 65px;
}

.layout_sidebar {
  min-width: 200px;
}

.layout_container {
  flex: 1;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>