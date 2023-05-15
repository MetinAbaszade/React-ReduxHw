import React, { useState } from 'react'
import { addTodoHandle } from '../utilities';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({closeModal}) {
    const [todo, setTodo] = useState('');

    // const dispatch = useDispatch();

    const submitHandle = e => {
        e.preventDefault();
        addTodoHandle({
            Id: uuidv4(),
            title: todo,
            done: false
        })
        setTodo('')
        closeModal()
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
            <h2>Add Todo</h2>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit' disabled={!todo}>Add</button>
        </form>
    </div>
  )
}
