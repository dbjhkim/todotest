export default  {
  todos: [],
  inp: null,
  focus() {
    this.inp && this.inp.focus();
  },
  addTodo(newTodo) {
    newTodo && this.todos.push(newTodo);
    this.focus();
  },
  rmTodo(index) {
    this.todos.splice(index, 1);
    this.focus();
  },
  clrTodos() {
    this.todos.splice(0, this.todos.length);
    this.focus();
  },
  isEmpty() {
    return !this.todos.length;
  }
};
