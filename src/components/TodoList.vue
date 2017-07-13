<template>
<section>
  <ul>
    <li v-for="(item, index) in mm.todos">
      <button @click="mm.rmTodo(index)">remove this todo-item</button>
      {{ item }}
    </li>
  </ul>
</section>
</template>

<script>
export default {
  props: ['mm']
}
</script>

<style>
</style>
