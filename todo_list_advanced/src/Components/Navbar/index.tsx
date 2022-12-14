import React from 'react';
import styles from './Navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

 const Navbar = ()=>{
 return (
   <AppBar position="static">
   <Toolbar variant="dense">
     <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
       <MenuIcon />
     </IconButton>
     <Typography variant="h6" color="inherit" component="div">
     Todo App Projects
     </Typography>
   </Toolbar>
 </AppBar>
 )
}
export default Navbar;