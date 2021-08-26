<template>
  <div class="code">
    <div>
      <el-steps :active="active" :space="200" finish-status="success" style="text-align: left">
        <el-step title="填写账户"></el-step>
        <el-step title="验证身份"></el-step>
        <el-step title="修改密码"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
    <!--填写账户-->
    <div v-if="active===0" class="flex-column">
      <el-input v-model="account" class="el-input" placeholder="请输入账号"></el-input>
      <el-input v-model="verification" class="el-input" placeholder="请输入验证码"></el-input>
      <div>
        <p></p>
        <s-identify :identifyCode="identifyCode"></s-identify>
        <p style="user-select: none " @click="refreshCode">看不清？点我刷新</p>
      </div>
    </div>
    <!--验证身份-->
    <div v-if="active===1" class="flex-column">
      <el-input v-model="email" placeholder="请输入完整的邮箱账号"></el-input>
    </div>
    <!--修改密码-->
    <div v-if="active===2" class="flex-column">
      <el-input v-model="newPassWD1" placeholder="请输入新密码"></el-input>
      <el-input v-model="newPassWD2" placeholder="请再次输入新密码"></el-input>
    </div>
    <!--完成-->
    <div v-if="active===3" class="flex-column">
      <el-col :lg="6" :sm="12">
        <el-result icon="success" subTitle="请根据提示进行操作" title="成功提示">
          <template slot="extra">
            <el-button size="medium" @click="IfFinish">返回</el-button>
          </template>
        </el-result>
      </el-col>
    </div>


    <el-button v-if="active<3" plain style="margin-top: 12px;" @click="next">下一步</el-button>


  </div>
</template>

<script>
import SIdentify from '@/components/SIdentify'
import router from "@/router";

export default {
  components: {
    's-identify': SIdentify
  },
  props: {
    disabled: {
      default: false
    }
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      active: 0,
      account: '',
      email: '',
      newPassWD1: '',
      newPassWD2: '',
      verification: '',
      Disable: true
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    //验证码相关
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
      }
      console.log(this.identifyCode);
    },
    //下一步
    next() {
      if (this.active++ > 3) this.active = 0;
    },
    //  检查验证码
    IfVerification() {
      if (this.account != null && this.verification === this.identifyCode) {
        this.Disabled = false;
      } else {
        this.Disabled = true;
      }
      console.log(this.Disabled)
    },
    //  检查邮箱号
    IfEmail() {
      console.log('');
    },
    //  判断新旧密码
    OldAndNewPassWord() {
      console.log('');
    },
    //  完成后执行
    IfFinish() {
      router.push('/');
    }
  }
};
</script>

<style>
.code {
  min-width: 70vw;
  min-height: 40vh;
  padding: 2em;
  margin: 10em auto;
  border-radius: 5px;
  background: rgba(255, 255, 255, .3);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
  overflow: hidden;
}

.code::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(20px);
  z-index: -1;
  margin: -30px;
}

.el-input {
  width: 20em;
  margin: 10px 0 0 0;
}

.flex-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

