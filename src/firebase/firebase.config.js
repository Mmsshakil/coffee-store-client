// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV2xdGoFgKxmulCdrOCdXOdPTeUn8y7Jc",
  authDomain: "coffee-store-f042f.firebaseapp.com",
  projectId: "coffee-store-f042f",
  storageBucket: "coffee-store-f042f.appspot.com",
  messagingSenderId: "253577666182",
  appId: "1:253577666182:web:beccef6c71a63cd2affb07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;