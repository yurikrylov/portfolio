import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import createDocument from '../firebaseQueries/createDoc';
import ProjectCard from '../components/ProjectCard';
import Layout from './Layout';
import { Typography, TextField, List } from '@mui/material';
import { AddButton } from '../UI/Buttons';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    createDocument(e, input, 'projects');
    setInput('');
  }
    let i = 1;
  useEffect(() => {
    console.log('changed'+i);
    i++;
    const q = query(collection(db, 'projects'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projectsArr = [];
      querySnapshot.forEach((doc) => {
        projectsArr.push({ ...doc.data(), id: doc.id })
      })
      setProjects(()=>[...projectsArr])
    })
    return () => unsubscribe()
  }, [])

  return (
    <Layout>
        <Typography variant='h2' gutterBottom>Todo App Projects </Typography>
        <Typography variant="h5" >{`you have ${projects.length} projects`} </Typography>
        <div className="projects">
          <TextField
            value={input}
            size="small"
            onChange={(e) => setInput(e.target.value)} />
          <AddButton onPress={handleSubmit} />
          <List>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
              />))}
          </List>
        </div>
    </Layout>
  );
}

export default Projects;
