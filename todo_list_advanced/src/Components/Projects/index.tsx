import React, { useState , useEffect} from 'react';
import { Paper, List } from '@mui/material';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import ProjectCard from '../ProjectCard';
import Project from '../../Types/Project';


const Projects:React.FC = () => {
    const [projects, SetProjects] = useState<Project[]>([]);
    useEffect(() => {
        const q = query(collection(db, 'projects'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const projectsArr: Project[]=[] ;
            querySnapshot.forEach((doc) => {
                projectsArr.push({ ...doc.data(), id: doc.id })
            })
            SetProjects(projectsArr)
        })
        return () => unsubscribe()
    }, [])
    return (
        <Paper>
            <div className='addProject'>
            {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />))}
            </div>
            <List>

            </List>

        </Paper>

    )
}

export default Projects