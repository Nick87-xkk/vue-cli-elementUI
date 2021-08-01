<template>
  <div>
    <ul v-for="item in testList" v-bind:key="item.id">
      <li style="list-style: none">{{ item.id }} {{ item.text }}</li>

    </ul>
    <div>{{ Things }}</div>
    <input v-model="input" placeholder="侦听测试，输入将被反转" type="text">
    <div v-bind:style="textStyle">{{ output }}</div>
    <!--    自定义组件-->
    <todoList test_List="向todo-list 中 props 接收到的数据">这里将被渲染成slot标签元素</todoList>
  </div>
</template>

<script>
import todoList from '@/components/todo-list'

export default {
  name: 'ZuJian',//组件名称
  data() {//data封装成函数避免数据污染
    return {
      testList: [
        {id: 1, text: '刷牙'},
        {id: 2, text: '吃早餐'},
        {id: 3, text: '学习'}
      ],
      User: {
        firstname: 'nick',
        lastname: 'wilde'
      }
      ,
      input: '',
      output: '',
      textStyle: { //v-bind:style 设置内联样式
        color: 'red',
        fontSize: '30px',
        textAlign: 'center',
        transform: 'none'
      }
    }
  },
  computed: {//计算属性
    Things: function () {
      let things = '';
      for (let i of this.testList) {
        things += i.text + ' ';
      }
      return things.slice(0, -1);
    }
  },
  methods: {//事件

  },
  watch: {//侦听
    input: function () {
      this.output = this.input.split('').reverse().join('');
    }
  },
  template: {//模板

  },
  components: {
    todoList
  }
}
</script>

<style scoped>

</style>