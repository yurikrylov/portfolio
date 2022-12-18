import React , {useState} from "react";

import deleteDocument from '../../firebaseQueries/deleteDoc';
import updateDocument from '../../firebaseQueries/updateDoc';

import Project from '../../Types/Project';
import ProjectCardModal from '../ProjectCardModal';
import { EditProjectButton } from '../../UI/Buttons';
import { RemoveButton } from '../../UI/Buttons';

import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from "@mui/material/ListItem";


interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = useState(props.project.completed || false);
  const [show, setShow] = useState(false);

  const handleEditClick = () => {
    setShow(!show);
  }

  const handleToggle = () => {
    updateDocument(props.project.id, 'projects', { ...props.project, completed: !checked })
    setChecked(!checked)
  };

  const handleRemoveButtonOnPress = () => {
    deleteDocument(props.project.id, 'projects')
  }

  return (
    <ListItem
      secondaryAction={<RemoveButton onPress={handleRemoveButtonOnPress} />}
      disablePadding
    >
      <ListItemButton >
        <ListItemIcon>
          <Checkbox checked={checked} onChange={handleToggle} />
        </ListItemIcon>
        <ListItemText> {props.project.name}</ListItemText>
        <EditProjectButton onPress={handleEditClick} />
      </ListItemButton>
      {show ? (
        <ProjectCardModal project={props.project} handleEditClick={handleEditClick}/>
      ) : null}
    </ListItem>
  )
}

export default ProjectCard
