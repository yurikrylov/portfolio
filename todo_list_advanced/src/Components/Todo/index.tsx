import { FaRegTrashAlt } from 'react-icons/fa';
import Todo from '../../Types/Todo';
import deleteTodo from '../../features/deleteDoc';
import toggleComplete from '../../features/updateDoc';
import styles from './Todo.module.css';

type Props = {
  todo:Todo
}

const TodoElement = ( {todo}:Props ) => {
  console.log(todo);
  return (
    <li className={todo.completed ? 'li' : 'liComplited'}>
      <div className='row'>
        <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed} />
        <p onClick={() => toggleComplete(todo)} className='text'>{todo.text}</p>
      </div>
      <button onClick={() => { deleteTodo(todo.id) }} >{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default TodoElement