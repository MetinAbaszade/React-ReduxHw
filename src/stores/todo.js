import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  todos: [
    { Id: uuidv4(), title: "Todo 1", done: false },
    { Id: uuidv4(), title: "Todo 2", done: false },
    { Id: uuidv4(), title: "Todo 3", done: false },
  ]
};

const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.title !== action.payload);
    },
    editTodo: (state, action) => {
      const { updatedTitle, newTodoTitle } = action.payload;

      const todoToEdit = state.todos.find(
        (todo) => todo.title === updatedTitle
      );

      if (todoToEdit) {
        todoToEdit.title = newTodoTitle;
      }
    },
    changeTodoDone: (state, action) => {
      const Id = action.payload;
      const todoToMarkAsDone = state.todos.find(
        (todo) => todo.Id === Id
      );
      if (todoToMarkAsDone) {
        todoToMarkAsDone.done = !todoToMarkAsDone.done;
      }
    }
  },
});

export const { addTodo, deleteTodo, editTodo, changeTodoDone } = todos.actions;
export default todos.reducer;
