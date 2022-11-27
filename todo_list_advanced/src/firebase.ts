import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "todo-list-with-files.firebaseapp.com",
  projectId: "todo-list-with-files",
  storageBucket: "todo-list-with-files.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);