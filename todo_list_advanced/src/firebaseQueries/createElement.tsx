import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const createElement = async (e: Event | undefined, input: string, type: string) => {
  if (e === undefined) { return }
  e.preventDefault()
  if (input === '') {
    alert('input some input')
    return
  }
  if (type == 'projects') {
    await addDoc(collection(db, type), {
      name: input
    })
  }
  if (type == 'tasks') {
    await addDoc(collection(db, type), {
      description: input,
      completed: false
    })
  }
}
export default createElement