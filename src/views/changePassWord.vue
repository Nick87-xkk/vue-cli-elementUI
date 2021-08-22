<template>
  <div class="changePW">
    <el-steps :active="active" :space="200" class="header" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-input v-if="active === 0" v-model="oldPW" class="input" placeholder="请输入旧密码"></el-input>
    <el-input v-if="active === 1" v-model="newPW1" class="input" placeholder="请输入新密码"></el-input>
    <el-input v-if="active ===2" v-model="newPW2" class="input" placeholder="请再次输入新密码"></el-input>

    <el-button v-if="active !== 3" style="margin: 12px 0 0 5px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      oldPW: '',
      newPW1: '',
      newPW2: ''
    };
  },

  methods: {
    next() {
      if (this.active === 0) {

      } else if (this.active === 1) {

      } else if (this.active === 2) {

      } else if (this.active++ > 2) this.active = 0;
    }
  }
}
</script>

<style scoped>
.changePW {
  width: 100vw;
  height: 100vh;
  padding: 0;
}

.header {
  width: auto;
  margin: 3em 0 0 8em;
  text-align: left;
}

.input {
  max-width: 20em;
}
</style>