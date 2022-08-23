<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 09:10:34
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 11:38:22
 * @FilePath: \vue3\src\components\layout\lg-layout.vue
 * @Description: 布局 基础布局组件
-->
<template>
  <div class="lg-layout">
    <div class="layout">
      <!-- S 头部 -->
      <LgLayoutHeader />
      <!-- E 头部 -->
      <div class="layout_sidebr_container">
        <!-- S 侧边栏 -->
        <LgLayoutSidebar :local-data="curLocalData">
          <template #to>
            <LgDemoTo />
          </template>
        </LgLayoutSidebar>
        <!-- E 侧边栏 -->

        <!-- S 内容 -->
        <LgLayoutContainer>
          <slot></slot>
        </LgLayoutContainer>
        <!-- E 内容 -->
      </div>
    </div>
  </div>
</template>
<script setup>
import LgLayoutHeader from "./lg-layout-header";
import LgLayoutSidebar from "./lg-layout-sidebar";
import LgLayoutContainer from "./lg-layout-container";

// 测试用例

import LgDemoTo from "../demo/lg-demo-to";
const curLocalData = [
  {
    text: "路由跳转",
    slot: "to",
  },
];
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.layout_sidebr_container {
  height: 100%;
  display: flex;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>