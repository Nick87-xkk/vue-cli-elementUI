<template>
  <div>


    <!--      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
    <!--        <el-menu-item index="1" v-on:click="$emit('refer')">查询</el-menu-item>-->
    <!--        <el-menu-item index="2" v-on:click="$emit('add')">增加</el-menu-item>-->
    <!--        <el-menu-item index="3" v-on:click="$emit('update')">修改</el-menu-item>-->
    <!--        <el-menu-item index="4" v-on:click="$emit('authority-management')">权限管理</el-menu-item>-->
    <!--      </el-menu>-->
    <!--      <div class="line"></div>-->
    <el-col :span="12">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff">
        <el-menu-item index="1" v-on:click="$emit('refer')">
          <i class="el-icon-menu"></i>
          <span slot="title">查询</span>
        </el-menu-item>
        <el-menu-item index="2" v-on:click="$emit('add')">
          <i class="el-icon-menu"></i>
          <span slot="title">增加</span>
        </el-menu-item>
        <el-menu-item index="3" v-on:click="$emit('update')">
          <i class="el-icon-menu"></i>
          <span slot="title">修改</span>
        </el-menu-item>
        <el-menu-item index="4" v-on:click="$emit('authority-management')">
          <i class="el-icon-menu"></i>
          <span slot="title">管理权限</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "element-load",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>