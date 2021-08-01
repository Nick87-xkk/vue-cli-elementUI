<template>
  <div>
    <p :style="{fontSize:postFontSize + 'em'}">{{ test_List }}</p>
    <button :click="enlargeFontSize">点击增加字号</button>
    <slot>父组件没有提供插槽内容时显示</slot>
  </div>
</template>
<script>

export default {
  name: "todo-list",
  data: function () {
    return {
      postFontSize: 1
    }
  },
  methods: {
    enlargeFontSize: function () {
      return this.postFontSize += 1;
    }
  },
  props: {
    test_List: String
  }
}
</script>

<style scoped>

</style>