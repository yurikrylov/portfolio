import {  updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

interface updatedData {
  [key: string]: string|number|boolean|Date|undefined;
}
const updateDocument = async (id:string, type:string, params:updatedData) => {
  Object.keys(params).forEach((k) => params[k] == (null||undefined) && delete params[k]);
    await updateDoc(doc(db, type, id), params)
  }
  export default updateDocument