<template>
<div id="app">
  <todo-add v-bind:mm="mm"></todo-add>
  <todo-list v-bind:mm="mm"></todo-list>
  <todo-footer v-bind:mm="mm"></todo-footer>
</div>
</template>

<script>
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import MainModel from './MainModel.js';

export default {
  name: 'app',
  data() {
    return {
      mm: MainModel,
      todos: MainModel.todos
    }
  },
  watch: {
    todos() {
      this.mm.focus();
    },
  },
  components: {
    'todo-add': TodoAdd,
    'todo-list': TodoList,
    'todo-footer': TodoFooter
  }
}
</script>

<style>
</style>
