// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC28txpyIuNA2tp5tiPiVKZ6p2Q7-uH7B0",
  authDomain: "doctors-portal-de064.firebaseapp.com " ,
  projectId: "doctors-portal-de064",
  storageBucket: "doctors-portal-de064.appspot.com",
  messagingSenderId:"947258000854" ,
  appId: "1:947258000854:web:1e306f5f85a3ef6d389077",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;