import React from 'react';

import Todo from '../../Types/Todo';
import deleteTodo from '../../features/deleteDoc';
import toggleComplete from '../../features/updateDoc';
import { RemoveButton } from '../../UI/Buttons';
import {ListItem, Checkbox, Typography} from '@mui/material';
import styles from './Todo.module.css';

type Props = {
  todo: Todo
}

const Task = ({ todo }: Props) => {
  return (
    <ListItem className={todo.completed ? styles.liComplited : styles.li}>
        <Checkbox onChange={() => toggleComplete(todo)}  checked={todo.completed} />
        <Typography 
        variant="body1"
        gutterBottom
        align ="left" 
        width ="30%"
        onClick={() => toggleComplete(todo)}>{todo.description}</Typography>
        <RemoveButton onPress={() => { deleteTodo(todo.id) }} />
    </ListItem>
  )
}

export default Task