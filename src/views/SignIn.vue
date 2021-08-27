<template>
  <div id="sign-in">

    <el-result icon="warning" subTitle="您的权限不足，请联系管理员操作！" title="警告提示">
      <template slot="extra">
        <el-button size="medium" type="primary" @click="back">返回</el-button>
      </template>
    </el-result>

  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SignIn",
  methods: {
    back: () => router.push('/')
  }
}
</script>

<style scoped>
#sign-in {

}
</style>