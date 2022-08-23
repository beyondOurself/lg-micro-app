<template>
  <LgLayout>
    <router-view></router-view>
  </LgLayout>
</template>

<script>
import LgLayout from "@/components/layout/lg-layout.vue";
export default {
  name: "App",
  components: { LgLayout },
};
</script>

<style>
</style>
