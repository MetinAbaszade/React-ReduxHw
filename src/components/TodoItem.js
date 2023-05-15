import React from "react";
import { deleteTodoHandle } from "../utilities";
import { useDispatch } from "react-redux";
import { showEditTodoModal } from '../stores/modal'
import { changeTodoDone } from '../stores/todo'

export default function TodoItem({ todo }) {

  const dispatch = useDispatch();

  const showEditTodoModalHandle = () => {
    dispatch(showEditTodoModal(todo.Id));
  }

  const deleteHandle = () => {
    deleteTodoHandle(todo.title);
  };

  return (
    <ul>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title}
      </span>
      <button onClick={deleteHandle} className="mx-2">Delete</button>
      <button onClick={showEditTodoModalHandle} className="mx-2">Edit</button>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch(changeTodoDone(todo.Id))}
      />
    </ul>
  );
}
