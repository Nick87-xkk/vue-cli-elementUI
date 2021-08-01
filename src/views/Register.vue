<template>
  <div class="home">
    <login v-on:login="loginTest,username = $event" v-on:signin="signinTest"></login>
  </div>
</template>

<script>
// @ is an alias to /src

import login from '@/components/login'
import router from "@/router";

export default {
  name: 'Home',
  data() {
    return {
      test3: 0,
      test4: 1,
      username: ''
    }
  },
  components: {
    login
  },
  methods: {
    loginTest: function () {
      //登录成功跳转页面跳转
      router.push('/useelement?' + "username={this.username}");
    },
    signinTest: function () {
      //注册跳转页面
      router.push('/');
    }
  }
}
</script>

<style scoped>

</style>