<template>
<section>
  <input v-model="newTodo" ref="newTodo" v-on:keyup.enter="addTodo" placeholder="여기에 문자열 입력">
  <button v-on:click="addTodo">+</button>
</section>
</template>

<script>
export default {
  props: ['mm'],
  data() {
    return {
      newTodo: ''
    }
  },
  mounted() {
    console.log('todo-add mounted');
    this.mm.inp = this.$refs.newTodo;
    this.mm.focus();
  },
  methods: {
    addTodo() {
      var value = this.newTodo && this.newTodo.trim();
      this.newTodo = '';
      this.mm.addTodo(value);
    }
  }
}
</script>

<style>
</style>
