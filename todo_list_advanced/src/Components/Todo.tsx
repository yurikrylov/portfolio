import { FaRegTrashAlt } from 'react-icons/fa';
import Todo from '../Types/Todo';

type Props = {
  todo: Todo,
  toggleComplete: Function,
  deleteTodo: Function
}
const TodoElement = ({ todo, toggleComplete, deleteTodo }: Props) => {
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