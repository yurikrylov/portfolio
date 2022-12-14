import React from 'react';

import Todo from '../../Types/Task';
import deleteDocument from '../../firebaseQueries/deleteDoc';
import updateDocument from '../../firebaseQueries/updateDoc';
import { RemoveButton } from '../../UI/Buttons';


import { ListItem, Checkbox, Typography } from '@mui/material';
import styles from './TaskCard.module.css';

type Props = {
  todo: Todo, type: string
}

const Task = ({ todo }: Props) => {
  return (
    <ListItem className={todo.completed ? styles.liComplited : styles.li}>
      <Checkbox onChange={() => updateDocument(todo, 'tasks')} checked={todo.completed} />
      <Typography
        variant="body1"
        gutterBottom
        align="left"
        width="30%"
        onClick={() => updateDocument(todo, 'tasks')}>{todo.description}</Typography>


      <RemoveButton onPress={() => { deleteDocument(todo.id, 'tasks') }} />
    </ListItem>
  )
}

export default Task
