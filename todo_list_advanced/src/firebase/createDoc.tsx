import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const createToDo = async (e:Event|undefined, input:string) => {
   if (e===undefined){return}
   e.preventDefault()
    if (input === '') {
      alert('input some input')
      return
    }
    await addDoc(collection(db, 'todos'), {
      description: input,
      completed: false
    })
  }
  export default createToDo