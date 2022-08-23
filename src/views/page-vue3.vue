<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-19 14:27:16
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-08-23 18:55:27
 * @FilePath: \micro-app-demo-own\src\views\page-vue3.vue
 * @Description:  vue3 页面
-->


<template>
  <micro-app
    keep-alive
    name="appname-vue3"
    url="http://localhost:8082/"
    baseroute="/app-vue3"
    :disableScopecss="disableScopecssGet"
    :destroy="destroyGet"
    :data="microAppData"
    :inline="inlineGet"
    @created="handleCreate"
    @beforemount="handleBeforeMount"
    @mounted="handleMount"
    @unmount="handleUnmount"
    @error="handleError"
    @datachange="handleDataChange"
  ></micro-app>
</template>

<script>
// import config from '../config'

export default {
  name: "PageVue3",
  data() {
    return {
      microAppData: { msg: "来自基座的数据" }, //  data只接受对象类型，数据变化时会重新发送
    };
  },
  computed: {
    inlineGet() {
      //默认开启 inline 用于测试
      /**
       * 默认情况下，子应用的js会被提取并在后台运行。
       * 开启inline后，被提取的js会作为script标签插入应用中运行，在开发环境中更方便调试
       * 开启inline后会稍微损耗性能，一般在开发环境中使用。
       */
      return process.env.NODE_ENV === "development";
    },

    destroyGet() {
      /**
       * 默认情况下，子应用被卸载后会缓存静态资源，以便在重新渲染时获得更好的性能。
       * 开启destroy，子应用在卸载后会清空缓存资源，再次渲染时重新请求数据。
       *
       */

      return false;
    },
    disableScopecssGet() {
      /**
       *禁用样式隔离可以提升页面渲染速度，在此之前，请确保各应用之间样式不会相互污染。
       *
       */

      return true;
    },
  },

  methods: {
    handleCreate() {
      console.log("子应用 创建了");
    },

    handleBeforeMount() {
      console.log("子应用 即将被渲染");
    },

    handleMount() {
      console.log("子应用 已经渲染完成");

      setTimeout(() => {
        this.microAppData = { msg: "来自基座的新数据" };
      }, 2000);
    },

    handleUnmount() {
      console.log("子应用 卸载了");
    },

    handleError() {
      console.log("子应用 加载出错了");
    },

    handleDataChange(e) {
      console.log("来自子应用 的数据:", e.detail.data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
