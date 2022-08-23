<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-20 15:30:26
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 14:30:30
 * @FilePath: \micro-app-demo-own\src\components\layout\bsg-layout-sidebar.vue
 * @Description: 布局 侧边栏
-->

<template>
  <div class="bsg-layout-sidebar">
    <div class="layout_sidebar">
      <div class="layout_sidebar_items">
        <template v-for="({ text, slot }, index) in localData">
          <div class="layout_sidebar_item" :key="index">
            <div class="sidebar_item_txt">{{ text }}</div>
            <div class="sidebar_item_content">
              <slot :name="slot"></slot>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BsgLayoutSidebar",
  props: {
    localData: {
      type: Array,
      default: () => [],
    },
  },
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
  min-height: 100px;
  margin-bottom: 16px;

  border-radius: 10px;

  background-color: aqua;
}
.sidebar_item_txt {
  padding: 6px;

  font-weight: bold;
  text-align: center;
  background-color: chartreuse;
}
.sidebar_item_content {
  margin-top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>