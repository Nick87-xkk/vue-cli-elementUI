<template>
  <div>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px" status-icon>
      <el-form-item label="ID" prop="id">
        <el-input v-model.number="ruleForm.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="ruleForm.sex"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="class">
        <el-input v-model="ruleForm.class"></el-input>
      </el-form-item>
      <el-form-item label="民族" prop="nation">
        <el-input v-model="ruleForm.nation"></el-input>
      </el-form-item>
      <el-form-item label="职业" prop="address">
        <el-input v-model.number="ruleForm.major"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {isString} from "element-ui/src/utils/types";
import qs from "qs"
import Axios from "axios";

export default {
  name: "student-add",
  data() {
    const checkID = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('ID不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          callback();
        }
      }, 1000);
    };
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名字不能为空'));
      }
      setTimeout(() => {
        if (!isString(value)) {
          callback(new Error('请输入值'));
        } else {
          callback();
        }
      }, 1000);
    };
    const checkSex = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('性别不能为空'));
      }
      setTimeout(() => {
        if (!isString(value)) {
          callback(new Error('请输入值'));
        } else {
          callback();
        }
      }, 1000);
    };
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      ruleForm: {
        id: '',
        name: '',
        sex: '',
        age: '',
        class: '',
        nation: '',
        major: ''
      },
      rules: {
        id: [
          {validator: checkID, trigger: 'blur'}
        ],
        name: [
          {validator: checkName, trigger: 'blur'}
        ],
        sex: [
          {validator: checkSex, trigger: 'blur'}
        ],
        age: [
          {validator: checkAge, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let setInFor = qs.stringify({
        'id': this.ruleForm.id,
        'name': this.ruleForm.name,
        'age': this.ruleForm.age,
        'sex': this.ruleForm.sex,
        'snativeplace': this.ruleForm.nation,
        'smajor': this.ruleForm.major,
        'sclass': this.ruleForm.class,
        'snative': "汉族"
      });
      console.log(setInFor);
      Axios.post("http://127.0.0.1:8888/student/addStudent?", setInFor).then(
          () => alert("添加成功")
      ).catch((error) => alert("添加失败"));
    }
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
}
</script>

<style scoped>
</style>