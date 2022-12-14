import { Paper, Typography } from "@mui/material";
import React from "react";
import Project from '../../Types/Project';
import {EditProjectButton} from '../../UI/Buttons';
import { RemoveButton } from '../../UI/Buttons';
import deleteDocument from '../../firebaseQueries/deleteDoc';

interface Props  {
    key:number,
    project:Project
}

const handleEditClick =()=>{
   // openModal()
}
const ProjectCard:React.FC<Props> = (props:Props)=>{
    return (
        <Paper>
            <Typography> {props.project.name}</Typography>
            <EditProjectButton onPress={handleEditClick}></EditProjectButton>
            <RemoveButton onPress={() => { deleteDocument(props.project.id, 'projects') }} />
        </Paper>

    )
}

export default ProjectCard
