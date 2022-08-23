<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-23 11:54:14
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 16:44:01
 * @FilePath: \micro-app-demo-own\src\components\demo\bsg-demo-v3.vue
 * @Description:  vue3 + webpack
-->

<template>
  <div class="bsg-demo-v3">
    <div class="demo_v3_item">
      <a-button type="primary" @click="toVue3"> 跳转到 vue3 页面 </a-button>
    </div>
    <div class="demo_v3_item">
      <a-button type="primary" @click="showEnv"> 项目环境 </a-button>
    </div>
    <!-- S 主动向子应用发送数据 -->
    <div class="demo_v3_item">
      <a-button type="primary" @click="setDataToSubApply"
        >主动向子应用发送数据
      </a-button>
    </div>
    <!-- E 主动向子应用发送数据 -->

    <!-- S 获取全局数据 -->
    <div class="demo_v3_item">
      <a-button type="primary" @click="getGlobalData">获取全局数据 </a-button>
    </div>
    <!-- E 获取全局数据 -->
    <!-- S 发送全局数据 -->
    <div class="demo_v3_item">
      <a-button type="primary" @click="setGlobalData">发送全局数据 </a-button>
    </div>
    <!-- E 发送全局数据 -->
  </div>
</template>
<script>
export default {
  name: "BsgDemoV3",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    /**
     * @Author: canlong.shen
     * @description:  跳转到 vue3 子应用
     * @default:
     * @return {*}
     */
    toVue3() {
      this.$router.push({
        path: "/app-vue3",
      });
    },
    showEnv() {
      console.log(process.env.NODE_ENV);
    },
    /**
     * @Author: canlong.shen
     * @description: 主动向 子应用发送数据
     * @default:
     * @return {*}
     */
    setDataToSubApply() {
      this.$microApp.setData("appname-vue3", { type: "新的数据" });
    },
    /**
     * @Author: canlong.shen
     * @description:  获取全局数据
     * @default:
     * @return {*}
     */
    getGlobalData() {
      const globalData = this.$microApp.getGlobalData(); // 返回全局数据
      console.log("globalData", globalData);
    },
    /**
     * @Author: canlong.shen
     * @description: 发送全局数据
     * @default:
     * @return {*}
     */
    setGlobalData() {
      this.$microApp.setGlobalData({ type: "基座发送的全局数据" });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
/* 自定义样式
---------------------------------------------------------------- */
.demo_v3_item {
  margin-bottom: 16px;
}
</style>
<style lang="scss">
/* 覆盖样式
---------------------------------------------------------------- */
</style>
