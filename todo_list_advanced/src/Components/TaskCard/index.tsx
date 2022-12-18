import React, { useState } from 'react';

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
  const [checked, setChecked] = useState(todo.completed)
  const handleCheckBoxClick = () => {
    updateDocument(todo.id, 'tasks', { checked: !todo.completed, ...todo })
    setChecked(!checked)
  }
  const handleRemoveButtonOnPress = () => {
    deleteDocument(todo.id, 'tasks')
  }
  return (
    <ListItem className={todo.completed ? styles.liComplited : styles.li}>
      <Checkbox onChange={handleCheckBoxClick} checked={checked} />
      <Typography
        variant="body1"
        gutterBottom
        align="left"
        width="30%"
        onClick={handleCheckBoxClick}>{todo.description}</Typography>
      <RemoveButton onPress={handleRemoveButtonOnPress} />
    </ListItem>
  )
}

export default Task
