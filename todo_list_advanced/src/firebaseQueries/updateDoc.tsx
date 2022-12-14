import {  updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

import Todo from '../Types/Task'
const updateDocument = async (todo:Todo, type:string) => {
    await updateDoc(doc(db, type, todo.id), {
      completed: !todo.completed
    })
  }
  export default updateDocument