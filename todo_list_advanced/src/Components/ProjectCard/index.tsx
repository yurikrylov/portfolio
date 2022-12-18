import ListItem from "@mui/material/ListItem";
import React from "react";
import Project from '../../Types/Project';
import { EditProjectButton } from '../../UI/Buttons';
import { RemoveButton } from '../../UI/Buttons';
import deleteDocument from '../../firebaseQueries/deleteDoc';
import updateDocument from '../../firebaseQueries/updateDoc';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProjectCardModal from '../ProjectCardModal';

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = React.useState(props.project.completed || false);
  const [show, setShow] = React.useState(false);

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
          <Checkbox checked={checked} onChange={handleToggle}/>
        </ListItemIcon>
        <ListItemText> {props.project.name}</ListItemText>
        <EditProjectButton onPress={handleEditClick}></EditProjectButton>
      </ListItemButton>
      {show ? (
        <ProjectCardModal />
      ) : null}
    </ListItem>

  )
}

export default ProjectCard
