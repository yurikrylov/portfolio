import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const createDocument = async (input: string, type: string) => {
  if (!input) {
    alert('input some input')
    return
  }
  let docFields = {}
  switch (type) {
    case 'projects':
      docFields = {
        name: input
      }
      break
    case 'tasks':
      docFields = {
        description: input,
        completed: false
      }
      break
    default:
      alert ('sorry, wrong number!')
      return
  }
  await addDoc(collection(db, type), docFields)
}
export default createDocument