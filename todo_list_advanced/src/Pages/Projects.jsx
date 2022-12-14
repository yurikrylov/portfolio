import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import createDocument from '../firebaseQueries/createDoc';
import ProjectCard from '../components/ProjectCard';
import Layout from './Layout';
import Typography from   '@mui/material/Typography';
import TextField from   '@mui/material/TextField';
import List from   '@mui/material/List';
import Card from   '@mui/material/Card';

import { AddButton } from '../UI/Buttons';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    createDocument(e, input, 'projects');
    setInput('');
  }
  useEffect(() => {
    const q = query(collection(db, 'projects'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projectsArr = [];
      querySnapshot.forEach((doc) => {
        projectsArr.push({ ...doc.data(), id: doc.id })
      })
      setProjects(() => [...projectsArr])
    })
    return () => unsubscribe()
  }, [])

  return (
    <Layout page = 'projects'>
      <Card>
        <Typography display="inline" variant="h5" >{`you have ${projects.length} projects`} </Typography>
          <TextField
            value={input}
            size="small"
            onChange={(e) => setInput(e.target.value)} />
          <AddButton onPress={handleSubmit} />
      </Card>
      <List>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />))}
      </List>

    </Layout >
  );
}

export default Projects;
