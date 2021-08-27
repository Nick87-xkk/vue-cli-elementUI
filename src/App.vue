<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Register from '@/views/Register';

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("./assets/1628093087274.jpg");
  background-size: cover;
}

</style>
