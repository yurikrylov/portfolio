import ListItem from "@mui/material/ListItem";
import React from "react";
import Project from '../../Types/Project';
import { EditProjectButton } from '../../UI/Buttons';
import { RemoveButton } from '../../UI/Buttons';
import deleteDocument from '../../firebaseQueries/deleteDoc';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProjectCardModal from '../ProjectCardModal';

interface Props {
  project: Project
}


const ProjectCard: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = React.useState([0]);
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);
  
  const handleEditClick = () => {
    setShow(!show);
  }

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked)
  };
  
  return (
    <ListItem
      secondaryAction={<RemoveButton onPress={() => { deleteDocument(props.project.id, 'projects') }} />}
      disablePadding
    >
      <ListItemButton >

        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={true}
            tabIndex={-1}
            disableRipple
            
          />
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
