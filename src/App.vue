<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
import "./assets/styles/global.styl";
import MainHeader from './components/MainHeader.vue';
import MainTodo from './components/mainTodo/MainTodo.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: "App",
  // data() {
  //   return {
  //     todoData: ["todo1", "todo2", "todo3"],
  //     content: ""
  //   };
  // },
  // methods: {
  //   addTodo() {
  //     if (this.content.trim() === "") return (this.content = "");
  //     this.todoData.push(this.content);
  //     this.content = "";
  //   }
  // },
  components: {
    // 组件名： 组件对象
    MainHeader: MainHeader,
    MainTodo,
    MainFooter
  }
};
</script>

<style scoped>
</style>
