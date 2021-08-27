<template>
  <div>
    <el-table
        :data="tableData"
        size="mini"
        style="width: 100%"
        @cell-mouse-enter="handleCellEnter"
        @cell-mouse-leave="handleCellLeave"
    >
      <el-table-column
          label="日期"
          prop="date"
          width="180">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.date" class="item" placeholder="请输入内容"></el-input>
          <div v-else class="txt">{{ scope.row.date }}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="姓名"
          prop="name"
          width="180">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.name" class="item" placeholder="请输入内容"></el-input>
          <div v-else class="txt">{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="地址"
          prop="address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Batch',
  data() {
    return {
      // 表格数据
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        isEdit: false
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        isEdit: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        isEdit: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isEdit: false
      }]
    }
  },
  methods: {
    /** 鼠标移入cell */
    handleCellEnter(row, column, cell, event) {
      row.isEdit = true
    },
    /** 鼠标移出cell */
    handleCellLeave(row, column, cell, event) {
      row.isEdit = false
    }
  }
}
</script>

<!--<style lang='scss'>-->
<!--.item{-->
<!--  width: 100px;-->
<!--  /* 调整elementUI中样式 如果不需要调整请忽略 */-->
<!--  .el-input__inner{-->
<!--    height: 24px!important;-->
<!--  }-->
<!--}-->
<!--.txt{-->
<!--  line-height: 24px;-->
<!--  padding: 0 9px;-->
<!--  box-sizing: border-box;-->
<!--}-->
<!--</style>-->

