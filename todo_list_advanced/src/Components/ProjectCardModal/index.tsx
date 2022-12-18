import React , {useState}from 'react';

import Project from '../../Types/Project';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import updateDocument from '../../firebaseQueries/updateDoc'

interface Props {
  project: Project,
  handleEditClick:()=>void
}
function ProjectCardModal(props: Props) {
  const project = props.project;
  const [open, setOpen] = useState(true);
  const [nameInput, setNameInput] = useState(project.name)
  const [numberInput, setNumberInput] = useState(project.number)
  const handleClose = () => {
    updateDocument(project.id,'projects',{
      name:nameInput,
      number:numberInput
    })
    setOpen(false); 
    props.handleEditClick()};
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Project</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label="Name"
              defaultValue={project.name}
              id="project-name"
              required
              variant="standard"
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>
          <TextField
            label="Number"
            defaultValue={project.number}
            id="project-number"
            required
            variant="standard"
            onChange={(e) => setNumberInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>

    </Box >)
}

export default ProjectCardModal