<template>
<div id="app">
  <input v-model="newTodo" v-on:keyup.enter="addTodo">
  <button v-on:click="addTodo">+</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      newTodo: 'Initial Todo Message'
    }
  },
  methods: {
    addTodo: function() {
      var value = this.newTodo && this.newTodo.trim()
      if (value) {
        console.log('new todo: ' + value)
      } else {
        console.log('no new todo')
      }
    }
  }
}
</script>

<style>
</style>
