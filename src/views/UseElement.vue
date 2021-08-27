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
          <el-menu-item index="1" @click="displayPage = 'table';getData">
            <template slot="title"><i class="el-icon-user"></i>学生信息</template>
          </el-menu-item>
          <el-menu-item index="2" @click="displayPage = 'add'">
            <template slot="title"><i class="el-icon-document-add"></i>增加记录</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="el-header" style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logout">注销</el-dropdown-item>
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
                <el-input v-show="false" slot-scope="scope" v-model="scope.row.date"></el-input>
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
                      @click="handleEdit(scope.row, scope.column, scope.cell,scope.event)">修改
                  </el-button>
                  <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除
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
import qs from "qs"
import Axios from "axios";

export default {
  name: "useElement",
  components: {
    studentAdd
  },
  data() {
    return {
      //原始数据
      tableData: [],
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
        end: 0
      },
      //修改的数据
      editProp: []
    }
  },
  methods: {
    //从服务器端获取数据
    getData() {
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
    //编辑修改
    handleEdit(row, column, cell, event) {

      const property = column.property
      if (this.editProp.includes(property)) {
        cell.querySelector('.item__input').style.display = 'block'
        cell.querySelector('.item__txt').style.display = 'none'
      }
      /*let stuInFor;
      axios.post("http://127.0.0.1:8888/student/update",stuInFor).then(function () {

        alert("更新成功！");
        this.getData();
      }).catch(function (err) {

      })*/
    },
    //删除操作
    handleDelete(index, row) {
      // console.log(typeof row.sid);
      // console.log(this.tempArray[index].sid)
      let stuID = qs.stringify({
        "sid": row.sid
      });
      // console.log(stuID);
      if (confirm("确定删除" + row.sname)) {
        Axios.post("http://127.0.0.1:8888/student/delete", stuID).then(
            () => {
              alert("成功删除" + row.sname),
                  this.tempArray.splice(index, 1)
            }
        ).catch((error) => alert("删除失败"));
      }
    },
    //  注销
    logout() {
      this.tableData = [];
      this.$router.push({path: "/", replace: true})
    }


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

.item {
  .item__input {
    display: none;
    width: 100px;
    /* 调整elementUI中样式 如果不需要调整请忽略 */

    .el-input__inner {
      height: 24px !important;
    }

    /* 调整elementUI中样式 如果不需要调整请忽略 */

    .el-input__suffix {
      i {
        font-size: 12px !important;
        line-height: 26px !important;
      }
    }
  }

  .item__txt {
    box-sizing: border-box;
    line-height: 24px;
    padding: 0 9px;
  }
}
</style>