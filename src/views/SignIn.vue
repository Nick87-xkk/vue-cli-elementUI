<template>
  <div id="sign-in">

    <el-form ref="dynamicValidateForm" :model="dynamicValidateForm" class="demo-dynamic" label-width="100px">
      <el-form-item
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
          label="邮箱"
          prop="email"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          :label="'密码'"
          :prop="'domains.' + index + '.value'"
          :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
      >
        <el-input v-model="domain.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>

        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SignIn",
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    },
    back: () => router.push('/')
  }
}
</script>

<style scoped>
#sign-in {

}
</style>