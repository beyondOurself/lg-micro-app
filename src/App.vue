<template>
  <div id="app">
    <!-- <h1>Hello App!</h1> -->
    <!-- <p> -->
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <!-- <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/app-vue2">vue2</router-link>
      <router-link to="/app-vue3">vue3</router-link>
    </p> -->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->

    <Layout>
      <template #base>
        <div>愚蠢的地球人</div>
      </template>
      <router-view></router-view>
    </Layout>
    <BridgeInit />
  </div>
</template>



<script>
import Layout from "@/components/layout/bsg-layout.vue";
import BridgeInit from "@/utils/bridge-init.vue";
export default {
  name: "App",
  components: {
    Layout,
    BridgeInit,
  },
};
</script>

<style>
</style>
