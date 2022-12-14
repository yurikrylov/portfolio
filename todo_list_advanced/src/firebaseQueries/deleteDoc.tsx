import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const deleteDocument = async (id: string, type: string) => {
    await deleteDoc(doc(db, type, id))
}
export default deleteDocument