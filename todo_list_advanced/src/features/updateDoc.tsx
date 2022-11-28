import {  updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

import Todo from '../Types/Todo'
const toggleComplete = async (todo:Todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  export default toggleComplete