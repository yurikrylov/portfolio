import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase.ts';
import { query, collection, onSnapshot } from 'firebase/firestore';
import TodoElement from './Components/Todo';
import createToDo from './features/createDoc';
import {Typography, Stack, TextField} from '@mui/material'
import {AddButton} from'./UI/Buttons'


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    console.log(1)
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
        <Typography variant='h2' gutterBottom>Todo App</Typography>
          <Stack spacing = {2} direction={'row'}>
          <TextField 
          value={input} 
          onChange={(e) => setInput(e.target.value)} />
          <AddButton onPress={handleSubmit}/>
          </Stack>
        <ul>
          {todos.map((todo, index) => (
            <TodoElement
              key={index}
              todo={todo}
            />))}
        </ul>
        <p className='count'>{`you have ${todos.length} todo`} </p>
      </div>
    </div>
  );
}

export default App;
