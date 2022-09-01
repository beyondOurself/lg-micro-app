<!--
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-09-01 13:43:07
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-09-01 15:53:56
 * @FilePath: \micro-app-demo-own\src\utils\bridge-init.vue
 * @Description: 通讯初始化
-->

<template>
  <div></div>
</template>
<script>
export default {
  name: "BridgeInit",
  data() {
    return {};
  },
  methods: {
    /**
     * @Author: canlong.shen
     * @description: 初始化微服务通讯
     * @default:
     * @return {*}
     */
    initBridge() {
      // 子应用 传递数据给 基座
      this.$bridge.subscribe("/base/all/data", (payload = {}) => {
        console.log("订阅了子应用传输回来的数据", payload);
      });
      // 子应用 传递路由给基座
      this.$bridge.subscribe("/base/router/action", (payload = {}) => {
        const { route = {}, action = "" } = payload;

        // 根据不同的动作,触发路由跳转
        switch (action) {
          case "push":
            this.$router.push(route);
            break;

          default:
            break;
        }
      });
    },
  },

  created() {
    this.initBridge();
  },
};
</script>