import React, {useState} from 'react';

import Todo from '../../Types/Task';
import deleteTodo from '../../firebase/deleteDoc';
import toggleComplete from '../../firebase/updateDoc';
import { RemoveButton } from '../../UI/Buttons';
import {ListItem, Checkbox, Typography} from '@mui/material';
import styles from './Todo.module.css';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../firebase';
import { updateDoc, doc} from 'firebase/firestore';
type Props = {
  todo: Todo, type:string
}

const Task = ({ todo }: Props) => {
  const handleUpload = (e) => {
  e.preventDefault();
  const file = e.target[0].files[0];
  const arr = [].slice.call(e.target.parentElement.children);
  console.log(arr);
  uploadFiles(file);
  
}

  const [progress, setProgress] = useState(0);
  const recordUrl = async (url:string, fileName:string) => {
    await updateDoc(doc(db, 'tasks', todo.id), {
      fileUrl: url,
      fileName: fileName,
    });
    window.location.reload();
  }
  const uploadFiles = async (file:File) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    const fileName = file.name;

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log("Error", error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          recordUrl(downloadURL, fileName);
        });
      }
    );
  };
  return (
    <ListItem className={todo.completed ? styles.liComplited : styles.li}>
        <Checkbox onChange={() => toggleComplete(todo)}  checked={todo.completed} />
        <Typography 
        variant="body1"
        gutterBottom
        align ="left" 
        width ="30%"
        onClick={() => toggleComplete(todo)}>{todo.description}</Typography>
              
              
              <form onSubmit={handleUpload} className='uploadUrl' >
          <MyInput type="file" className='uploadFile' style={{width: 500, marginBottom: 10}}/>
          <MyButton type='submit' style={{width: 120}}>Upload</MyButton>
        </form>
        <RemoveButton onPress={() => { deleteTodo(todo.id) }} />
    </ListItem>
  )
}

export default Task