// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c8062.firebaseapp.com",
  projectId: "mern-auth-c8062",
  storageBucket: "mern-auth-c8062.appspot.com",
  messagingSenderId: "88948804807",
  appId: "1:88948804807:web:ffeaf95ad1a7015f8f82e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);