import React from 'react';

import Todo from '../../Types/Todo';
import deleteTodo from '../../features/deleteDoc';
import toggleComplete from '../../features/updateDoc';
import { RemoveButton } from '../../UI/Buttons';

import styles from './Todo.module.css';

type Props = {
  todo: Todo
}

const TodoElement = ({ todo }: Props) => {
  return (
    <li className={todo.completed ? styles.liComplited : styles.li}>
      <div className='row'>
        <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed} />
        <p onClick={() => toggleComplete(todo)} className='text'>{todo.description}</p>
        <RemoveButton onPress={() => { deleteTodo(todo.id) }} />
      </div>
      
    </li>
  )
}

export default TodoElement