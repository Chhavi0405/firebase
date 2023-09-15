// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2aawL9tvDFU2Nu-LZdvZZ6mcMeu4NmvI",
  authDomain: "chatapp-8c6b4.firebaseapp.com",
  projectId: "chatapp-8c6b4",
  storageBucket: "chatapp-8c6b4.appspot.com",
  messagingSenderId: "393687160646",
  appId: "1:393687160646:web:4e5e5fac052febeafa3747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)