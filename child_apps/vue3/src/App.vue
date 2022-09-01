<template>
  <LgLayout>
    <div>
      <router-view></router-view>
      <BridgeInit />
    </div>
  </LgLayout>
</template>

<script>
import LgLayout from "@/components/layout/lg-layout.vue";
import BridgeInit from "@/utils/bridge-app/bridge-init.vue";
export default {
  name: "App",
  components: { LgLayout, BridgeInit },
};
</script>

<style>
</style>
