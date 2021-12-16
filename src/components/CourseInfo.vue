<template>
  <div>
    <el-table
        :data="courseInfo"
        style="width: 100%">
      <el-table-column
          label="教师号"
          prop="tid"
          width="180">
      </el-table-column>
      <el-table-column
          label="课程号"
          prop="cid"
          width="180">
      </el-table-column>
      <el-table-column
          label="课程名"
          prop="cname">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as $http from "@/api";

export default {
  name: "CourseInfo",
  data() {
    return {
      teacherInfo: [],
      courseInfo: [],
      courseData: []
    }
  },
  mounted() {
    $http.getTeacherInfo().then(res => {
      this.teacherInfo = res.data.records
    });
    $http.getCourseInfo({pageNo: 1, pageSize: 20}).then(resp => {
      this.courseInfo = resp.data.records;
    })

  }
}
</script>

<style scoped>

</style>