import React from 'react'
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
type Props = {
  page: string
}

function Header(props: Props) {
  return (
    <Paper >
      <Typography variant='h5' align='center' gutterBottom>{props.page == 'projects' ? 'Проекты' : 'Задачи'}</Typography>
    </Paper>
  )
}

export default Header