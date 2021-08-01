<template>
  <div id="app1">
    <ZuJian></ZuJian>
  </div>
</template>

<script>
import ZuJian from "@/views/ZuJian";

export default {
  name: "App1.vue",
  components: {
    ZuJian
  }
}
</script>

<style scoped>
#app1 {
  width: 100vw;
  height: 100vh;
  background: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>