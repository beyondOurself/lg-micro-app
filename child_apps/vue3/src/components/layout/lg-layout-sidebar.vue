<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 09:26:35
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 14:34:08
 * @FilePath: \vue3\src\components\layout\lg-layout-sidebar.vue
 * @Description: 布局 侧边栏
-->
<template>
  <div class="lg-layout-sidebar">
    <div class="layout_sidebar">
      <template v-for="({ text, slot }, index) in localData" :key="index">
        <div class="layout_sidebar_item">
          <div class="sidebar_item_txt">
            {{ text }}
          </div>
          <div class="sidebar_item_content">
            <slot :name="slot"></slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "LgLayoutSidebar",
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
.lg-layout-sidebar {
  background-color: lightpink;
  padding: 12px;
}
.layout_sidebar {
  min-width: 300px;
}
.layout_sidebar_item {
  min-height: 100px;

  margin-bottom: 16px;

  background-color: chocolate;
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