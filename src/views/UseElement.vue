<template>
  <div class="about">
    <!--       之后修改为v-if渲染组件，点击触发显示或从dom树中移出&ndash;&gt;-->
    <!--        <ElementLoad v-on:refer="$router.push('/useelement/查询页')"-->
    <!--                     v-on:add="$router.push('增加页')"-->
    <!--                     v-on:update="$router.push('修改页')"-->
    <!--                     v-on:authority-management="$router.push('管理页')"-->
    <!--        ></ElementLoad>-->
    <el-container style="height:100vh; width: 100vw; border: 1px solid #aca4a4">
      <el-aside class="my-height" style="background-color: rgb(238, 241, 246)" width="200px">
        <el-menu default-active="1">
          <el-menu-item index="1" @click="displayPage = 'table'">
            <template slot="title"><i class="el-icon-user"></i>学生信息</template>
          </el-menu-item>
          <el-menu-item index="2" @click="displayPage = 'add'">
            <template slot="title"><i class="el-icon-document-add"></i>增加记录</template>
          </el-menu-item>
          <el-menu-item index="3" @click="displayPage = 'set'">
            <template slot="title"><i class="el-icon-setting"></i>权限管理</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="el-header" style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ $route.query.username }}</span>
        </el-header>
        <transition mode="out-in" name="fade">
          <el-main v-if="displayPage === 'table'" class="el-main">
            <!--数据表格-->
            <el-table
                :data="tempArray"
                class=" el-main-table"
                style="width: 100%">
              <el-table-column
                  label="ID"
                  prop="sid">
              </el-table-column>
              <el-table-column
                  label="Name"
                  prop="sname">
              </el-table-column>
              <el-table-column
                  label="Sex"
                  prop="ssex">
              </el-table-column>
              <el-table-column
                  label="Age"
                  prop="sage">
              </el-table-column>
              <el-table-column
                  label="Class"
                  prop="sclass">
              </el-table-column>
              <el-table-column
                  label="Nation"
                  prop="snative">
              </el-table-column>
              <el-table-column
                  label="Major"
                  prop="smajor">
              </el-table-column>
              <!--            编辑，删除列-->
              <el-table-column
                  align="right">
                <template slot-scope="scope">
                  <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">Delete
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination
                :page-size="query.pageSize"
                :total="tableData.length"
                background
                layout="prev, pager, next"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
          </el-main>
        </transition>
        <transition name="fade">
          <el-main v-if="displayPage === 'add'" class="el-main">
            <student-add class="el-main-add"></student-add>
          </el-main>
        </transition>
        <transition name="fade">
          <el-main v-if="displayPage === 'set'" class="el-main "></el-main>
        </transition>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import studentAdd from '@/components/student-add'
import Axios from "axios";

export default {
  components: {
    studentAdd
  },
  data() {
    return {
      //原始数据
      tableData: [
        /* {
           id: 1,
           date: '2016-05-02',
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           id: 2,
           date: '2016-05-02',
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 3,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 4,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 5,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 6,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 7,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 8,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 9,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },
         {
           date: '2016-05-02',
           id: 10,
           name: '王小虎',
           sex: '男',
           age: 21,
           class: "18级四班",
           nation: '汉',
           address: '上海市普陀区金沙江路 1518 弄'
         },*/
      ],
      //切换功能页面
      displayPage: 'table',
      //每页数据
      tempArray: [],
      //分页相关
      query: {
        //起始页
        currentPage: 1,
        //每页显示条数
        pageSize: 8,
        //分页标记
        start: 0,
        end: 0,
      },
    }
  },
  methods: {
    //从服务器端获取数据
    getData: function () {
      let that = this;
      Axios.get('http://127.0.0.1:8888/student/test').then(function (data) {
        that.tableData = data.data.records;
        that.getPageData();

      }).catch(function (error) {
        return error;
      })
    },
    //将原始数据分页
    getPageData() {
      let start = (this.query.currentPage - 1) * this.query.pageSize;
      let end = start + this.query.pageSize;
      this.tempArray = this.tableData.slice(start, end);
    },
    //页面切换函数
    handleCurrentChange(val) {
      this.query.currentPage = val;
      this.getPageData();
    },
    handleSizeChange(val) {
      this.query.pagesize = val;
      this.getPageData();
    },
    //删除操作
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  //渲染完成后立即执行的函数
  mounted: function () {
    this.getData()
  }
};
</script>

<style scoped>

.about {
  width: 100vw;
  height: 100vh;
  background: rgb(238, 241, 246);
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-main {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.el-main-add {
  padding: 0;
  align-self: start;
  min-width: 40em;
}

.el-main-table {
  overflow-y: scroll;
}

.el-pagination {
  display: flex;
  justify-content: center;
}

span {
  text-align: center;
  font-size: 1rem;
}

/*滚动条*/
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #f6f6f6;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #747474;
}

::-webkit-scrollbar-corner {
  background: #f6f6f6;
}


/*移入移出动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>