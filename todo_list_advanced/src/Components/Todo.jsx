import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa';

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? 'li': 'liComplited'}>
    <div className='row'>
        <input onChange = {()=>toggleComplete(todo)} type="checkbox" checked = {todo.completed ?'checked':''}/>
        <p onClick={()=>toggleComplete(todo)} className='text'>{todo.text}</p>
    </div>
    <button onClick={()=>{deleteTodo(todo.id)}} >{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Todo