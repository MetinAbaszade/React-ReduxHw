import store from "./stores";
import { addTodo, deleteTodo, editTodo } from "./stores/todo";

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo));
};

export const deleteTodoHandle = (title) => {
  store.dispatch(deleteTodo(title));
};

export const editTodoHandle = (todo) => {
  store.dispatch(editTodo(todo));
};