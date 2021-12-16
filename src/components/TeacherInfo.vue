<template>
  <div class="teacher">
    <el-table
        :data="teacherInfo"
        style="width: 100%">
      <el-table-column
          label="教师号"
          prop="tid"
          width="180">
      </el-table-column>
      <el-table-column
          label="教师名"
          prop="tname">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as $http from "@/api";

export default {
  name: "TeacherInfo",
  data() {
    return {
      teacherInfo: []
    }
  },
  mounted() {
    $http.getTeacherInfo().then(res => {
      this.teacherInfo = res.data.records
    })
  }
}
</script>

<style scoped>

</style>