
import './App.css';
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Components/Todo';
import { db } from './firebase';
import { query, collection, onSnapshot } from 'firebase/firestore'


function App() {
  // create todo
  // read todo from firebase 
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return ()=>unsubscribe()
  }, [])

  // update todo 
  // delete todo

  const [todos, setTodos] = useState([]);
  return (
    <div className='bg'>
      <div className='container'>
        <h3 className='heading'>Todo App</h3>
        <form action="">
          <input className='inputtype="text' placeholder='Add todo' />
          <button className='button'><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
            />))}
        </ul>
      </div>
    </div>
  );
}

export default App;
