// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzfKRHwJ_0b7ZqQaJ4Ud95xIdtKsmvC8",
  authDomain: "doctor-portal-38aee.firebaseapp.com",
  projectId: "doctor-portal-38aee",
  storageBucket: "doctor-portal-38aee.appspot.com",
  messagingSenderId: "1064137622023",
  appId: "1:1064137622023:web:4e5a6ebf730a812030a0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;