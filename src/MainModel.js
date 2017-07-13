export default  {
  todos: [],
  inp: null,
  focus() {
    this.inp && this.inp.focus();
  },
  addTodo(newTodo) {
    newTodo && this.todos.push(newTodo);
  },
  rmTodo(index) {
    this.todos.splice(index, 1);
  },
  clrTodos() {
    this.todos.splice(0, this.todos.length);
  },
  isEmpty() {
    return !this.todos.length;
  }
};
