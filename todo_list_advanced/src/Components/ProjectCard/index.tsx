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

interface Props {
    key: number,
    project: Project
}

const handleEditClick = () => {
    // openModal()
}
const ProjectCard: React.FC<Props> = (props: Props) => {
    const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const labelId = `checkbox-list-label-${props.key}`;
    return (
        <ListItem
            key={props.key}
            secondaryAction={<RemoveButton onPress={() => { deleteDocument(props.project.id, 'projects') }} />}
            disablePadding
        >
                        <ListItemButton role={undefined} onClick={handleToggle(props.key)} dense>

            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(props.key) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText> {props.project.name}</ListItemText>
            <EditProjectButton onPress={handleEditClick}></EditProjectButton>
            </ListItemButton>

        </ListItem>

    )
}

export default ProjectCard
