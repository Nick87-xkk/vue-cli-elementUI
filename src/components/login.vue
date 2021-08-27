<!--登录页面组件-->
<template>
  <div class="login-model">
    <div>
      <p>LOGIN IN</p>
    </div>

    <input id="account" v-model="userAccount" class="input" placeholder="input your account" type="email">
    <input id="password" v-model="password" class="input" placeholder="input your password" type="password">

    <div>
      <input id="login" class="btn" type="button" value="log in" @click="getId" v-on:click="$emit('login',userName)">
      <input id="signin" class="btn" type="button" value="sign in" v-on:click="signIn">
    </div>

    <div>
      <a :click="forget" href="http://localhost:8020/#/changePW">forget the password</a>
    </div>
  </div>
</template>

<script>

import Axios from "axios";
import router from "@/router";

export default {
  name: "login",
  data() {
    return {
      userAccount: '',
      password: '',
      userName: ''
    }
  },
  methods: {
    getId: function () {
      let that = this;
      Axios.get("http://127.0.0.1:8888/usr/usrfindbyid?usrid=1801").then(
          function (getData) {
            if (that.userAccount === null || that.password == null) {
              alert('error');
            } else if (that.userAccount == getData.data.userid && that.password == getData.data.passwd) {
              that.userName = getData.data.username;
              //向useelement页面传递用户名
              that.$router.push({
                name: 'UseElement',
                query: {
                  username: that.userName,
                }
              })
            }

            console.log(getData.data);
          }
      ).catch(function (error) {
        return error;
      });
    },
    forget: function () {
      window.alert("i'm sorry to hear that!")
    },
    signIn() {
      router.push('/signin');
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

input {
  outline: none;
}

a {
  text-decoration: none;
  color: skyblue;
}

.login-model {
  background: rgba(180, 177, 177, 0.5);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20em;
  height: 15em;
  border-radius: 10px;
}

.input {
  width: 250px;
  height: 40px;
  padding-left: 5px;
  border: solid 1px pink;
  border-radius: 5px;
}

.btn {
  width: 100px;
  height: 40px;
  margin: 0 23px 0 23px;
  border: solid 1px pink;
  border-radius: 999em;
  background-color: skyblue;
}

.btn:hover {
  animation-name: changeColor;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  transition: cubic-bezier(0.46, 0.03, 0.52, 0.96);
}

@keyframes changeColor {
  100% {
    background-color: rgb(35, 188, 248);
  }
}
</style>