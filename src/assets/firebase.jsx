import { getFirestore } from "firebase/firestore/lite"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdGDG4hibOtDb7v1BASdo_XrGPtCLuzQ",
  authDomain: "restaurante-1c9d4.firebaseapp.com",
  projectId: "restaurante-1c9d4",
  storageBucket: "restaurante-1c9d4.appspot.com",
  messagingSenderId: "829647371015",
  appId: "1:829647371015:web:6ca12d1cb8b5771dc123a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)