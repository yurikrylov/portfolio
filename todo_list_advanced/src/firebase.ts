import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBbOjYQ117N-iQhKHSB2JOEYmlHZlnloS0",
  authDomain: "todo-list-with-files.firebaseapp.com",
  projectId: "todo-list-with-files",
  storageBucket: "todo-list-with-files.appspot.com",
  messagingSenderId: "602740564581",
  appId: "1:602740564581:web:190c8ba1dde1b36813dc8c"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);