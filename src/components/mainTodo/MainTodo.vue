<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="What to do?"
      autofocus
      @keyup.enter="addTodo"
      v-model="content"
    />
    <todo-item v-for="(item, index) in filterData" :key="index" :todo="item" @del="handleDeleteItem"></todo-item>
    <todo-info :total="total" @toggleState="handleToggleState" @clearCompleted="handleClear"></todo-info>
  </div>
</template>

<script>
import TodoItem from "./coms/TodoItem.vue";
import TodoInfo from "./coms/TodoInfo.vue";

let count = 0;
export default {
  name: "MainTodo",
  components: {
    TodoItem,
    TodoInfo
  },
  data() {
    return {
      todoData: JSON.parse(localStorage.getItem('data')) || [],
      content: "",
      total: 0,
      filter: 'all',
      // localData: []
    };
  },
  watch: {
    todoData:{
      deep: true,
      // todoData一旦发生变化就会执行该函数
      handler() {
        // 更新剩余代办项
        this.total = this.todoData.filter(item => item.completed == false).length
        // 更新本地数据
        localStorage.setItem('data', JSON.stringify(this.todoData)) // 存储到本地
      }
    }
  },
  methods: {
    addTodo() {
      if (this.content.trim() === "") return (this.content = "");
      this.todoData.unshift({
        id: count++,
        content: this.content,
        completed: false
      });
      this.content = ""
      // 更新本地存储数据
      this.updateData()
    },
    handleDeleteItem(id) {
      // 根据子组件传递过来的要删除项的id来删除数组元素
      this.todoData.splice(
        this.todoData.findIndex(item => item.id === id),
        1
      );
      this.updateData()
    },
    handleToggleState(state) {
      this.filter = state
    },
    handleClear() {
      this.todoData = this.todoData.filter(item => item.completed == false)
      this.updateData()
    },
    updateData() {
      // 1. 本地存储里面只能存储字符串的数据格式 把我们的数组对象转换为字符串格式 JSON.stringify()
      localStorage.setItem('data', JSON.stringify(this.todoData)) // 存储到本地
      console.log(localStorage.getItem('data'));
      // 2. 获取本地存储的数据 我们需要把里面的字符串数据转换为 对象格式 JSON.parse()
      this.todoData = JSON.parse(localStorage.getItem('data'))
      console.log(this.todoData);
    }
  },
  computed: {
    filterData() {
      switch (this.filter) {
        case 'all':
          return this.todoData
          break
        case 'active':
          // filter 返回一个新数组
          return this.todoData.filter(item => item.completed == false)
          break
        case 'completed':
          return this.todoData.filter(item => item.completed == true)
          break
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
.main-todo {
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 5px #666;

  .add-todo {
    width: 100%;
    padding: 16px 16px 16px 36px;
    font-size: 24px;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
}
</style>