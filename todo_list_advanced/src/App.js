
import './App.css';
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Components/Todo';
import { db } from './firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'


function App() {
  // create todo
  const createToDo = async (e) => {
    e.preventDefault(e)
    if (input === '') {
      alert('input some input')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    })
    setInput('');
  }
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
    return () => unsubscribe()
  }, [])

  // update todo 
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // delete todo
  const deleteTodo = async (id)=>{
await deleteDoc(doc(db, 'todos',id))
  }

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  return (
    <div className='bg'>
      <div className='container'>
        <h3 className='heading'>Todo App</h3>
        <form onSubmit={createToDo} action="" className='form'>
          <input value={input} onChange={(e) => setInput(e.target.value)} className='inputtype="text' placeholder='Add todo' />
          <button className='button'><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo ={deleteTodo}
            />))}
        </ul>
        <p className='count'>{`you have ${todos.length} todo`} </p>
      </div>
    </div>
  );
}

export default App;
