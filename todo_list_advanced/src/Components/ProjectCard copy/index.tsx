import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Project from '../../Types/Project';
import {AddButton} from '../../UI/Buttons'
interface Props  {
    key:number,
    project:Project
    
}
const handleAddClick =()=>{
    //openModal()
}
const ProjectCard:React.FC<Props> = (props:Props)=>{
    return (
        <Paper>
            <Typography> {props.project.name}</Typography>
            <AddButton onPress={handleAddClick}></AddButton>

        </Paper>

    )
}

export default ProjectCard
