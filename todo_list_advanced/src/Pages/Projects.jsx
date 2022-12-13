import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, collection , onSnapshot } from 'firebase/firestore';
import createElement from '../firebaseQueries/createElement';
import ProjectCard from '../components/ProjectCard';
import Layout from './Layout';
import { Typography, TextField, Paper , List} from '@mui/material';
import { AddButton } from '../UI/Buttons';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    createElement(e, input, 'projects');
    setInput('');
  }

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setProjects(todosArr)
    })
    return () => unsubscribe()
  }, [])

  return (
    <Layout>
    <Paper>
      <Typography variant='h2' gutterBottom>Todo App Projects </Typography>
      <Typography variant ="h5" >{`you have ${projects.length} projects`} </Typography>
      <div className ="projects">
        <TextField
          value={input}
          size="small"
          onChange={(e) => setInput(e.target.value)} />
        <AddButton onPress={handleSubmit} />
      <List>
        {projects.map((todo, index) => (
          <ProjectCard
            key={index}
            todo={todo}
          />))}
      </List>
      </div>
    </Paper>
    </Layout>
  );
}

export default Projects;

