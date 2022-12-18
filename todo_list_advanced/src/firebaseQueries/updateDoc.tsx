import {  updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


const updateDocument = async (id:string, type:string, params:object) => {
    await updateDoc(doc(db, type, id), params)
  }
  export default updateDocument