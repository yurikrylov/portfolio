
import './App.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { db } from './firebase.ts';
import { query, collection, onSnapshot } from 'firebase/firestore';
import Todo from './Components/Todo';
import deleteTodo from './features/deleteDoc.tsx';
import createToDo from './features/createDoc';
import toggleComplete from './features/updateDoc';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    createToDo(e, input);
    setInput('');
  }

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className='bg'>
      <div className='container'>
        <h3 className='heading'>Todo App</h3>
        <form onSubmit={handleSubmit} action="" className='form'>
          <input value={input} onChange={(e) => setInput(e.target.value)} className='inputtype="text' placeholder='Add todo' />
          <button className='button'><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />))}
        </ul>
        <p className='count'>{`you have ${todos.length} todo`} </p>
      </div>
    </div>
  );
}

export default App;
