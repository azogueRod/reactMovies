// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Azc1BxzH5cZ0DFZsHMY3p9TG9hpmIr8",
  authDomain: "demomoviesproyecto.firebaseapp.com",
  projectId: "demomoviesproyecto",
  storageBucket: "demomoviesproyecto.firebasestorage.app",
  messagingSenderId: "594755384267",
  appId: "1:594755384267:web:67e682376fa01735947c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth, provider, signInWithPopup, db}