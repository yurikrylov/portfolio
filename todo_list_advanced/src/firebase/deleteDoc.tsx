import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, 'todos', id))
}
export default deleteTodo