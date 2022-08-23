<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 09:13:10
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 11:23:21
 * @FilePath: \vue3\src\components\layout\lg-layout-container.vue
 * @Description: 布局 子应用内容
-->

<template>
  <div class="lg-layout-container">
    <div class="layout_container">
      <!-- S 子应用内容 -->
      <div class="layout_container_main">
        <slot></slot>
      </div>
      <!-- E 子应用内容 -->
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */
.lg-layout-container {
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>