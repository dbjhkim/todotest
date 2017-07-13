<template>
<section>
  <p v-if="mm.isEmpty()">
    Nothing to do
  </p>
  <button v-else @click="mm.clrTodos()">
    clear {{ mm.todos.length }} todo-item{{ mm.todos.length > 1 ? 's' : '' }}
  </button>
</section>
</template>

<script>
export default {
  props: ['mm']
}
</script>

<style>
</style>
