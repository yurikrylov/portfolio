// import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbOjYQ117N-iQhKHSB2JOEYmlHZlnloS0",
  authDomain: "todo-list-with-files.firebaseapp.com",
  projectId: "todo-list-with-files",
  storageBucket: "todo-list-with-files.appspot.com",
  messagingSenderId: "602740564581",
  appId: "1:602740564581:web:190c8ba1dde1b36813dc8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);