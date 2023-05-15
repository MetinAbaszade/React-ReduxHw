import React, { useState } from 'react'
import { editTodoHandle } from '../utilities';

export default function EditTodo({todo, closeModal}) {
    const [newTodoTitle, setNewTodoTitle] = useState(todo.title);
    
    const submitHandle = e => {
        e.preventDefault();
        editTodoHandle({
            updatedTitle: todo.title,
            newTodoTitle
        })
        setNewTodoTitle('')
        closeModal()
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
            <h2>Edit Todo</h2>
              <input type="text" value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} required/>
            <button type='submit' disabled={!todo}>Edit</button>
        </form>
    </div>
  )
}






