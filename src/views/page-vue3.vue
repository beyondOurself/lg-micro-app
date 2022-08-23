<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-19 14:27:16
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 11:16:12
 * @FilePath: \micro-app-demo-own\src\views\page-vue3.vue
 * @Description:  vue3 页面
-->


<template>
  <div class="page-vue3">
    <micro-app
      name="appname-vue3"
      url="http://localhost:8082/"
      baseroute="/app-vue3"
      destroy
      :data="microAppData"
      @created="handleCreate"
      @beforemount="handleBeforeMount"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
      @datachange="handleDataChange"
    ></micro-app>
  </div>
</template>

<script>
// import config from '../config'

export default {
  name: "PageVue3",
  data() {
    return {
      // url: `${config.vue3}/child/vue3/`,
      microAppData: { msg: "来自基座的数据" },
    };
  },
  methods: {
    handleCreate() {
      console.log("child-vue3 创建了");
    },

    handleBeforeMount() {
      console.log("child-vue3 即将被渲染");
    },

    handleMount() {
      console.log("child-vue3 已经渲染完成");

      setTimeout(() => {
        this.microAppData = { msg: "来自基座的新数据" };
      }, 2000);
    },

    handleUnmount() {
      console.log("child-vue3 卸载了");
    },

    handleError() {
      console.log("child-vue3 加载出错了");
    },

    handleDataChange(e) {
      console.log("来自子应用 child-vue3 的数据:", e.detail.data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
