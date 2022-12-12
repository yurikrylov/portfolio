import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase.ts';
import createToDo from './firebase/createElement';
import { query, collection, onSnapshot } from 'firebase/firestore';

import Task from './Components/TaskCard';

import './App.css';
import { Typography, TextField, Paper , List} from '@mui/material'
import { AddButton } from './UI/Buttons'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    console.log(1)
    createToDo(e, input, 'todos');
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
    <Paper>
      <Typography variant='h2' gutterBottom>Todo App</Typography>
      <Typography variant ="h5" >{`you have ${todos.length} todo`} </Typography>
      <div className ="projects">
        <TextField
          value={input}
          size="small"
          onChange={(e) => setInput(e.target.value)} />
        <AddButton onPress={handleSubmit} />
      <List>
        {todos.map((todo, index) => (
          <Task
            key={index}
            todo={todo}
          />))}
      </List>
      </div>
    </Paper>
  );
}

export default App;
