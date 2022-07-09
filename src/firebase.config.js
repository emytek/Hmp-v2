// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPyS0xRDXPjgN-LtE30dxmJCaYQn8Klbs",
  authDomain: "house-market-place-31173.firebaseapp.com",
  projectId: "house-market-place-31173",
  storageBucket: "house-market-place-31173.appspot.com",
  messagingSenderId: "890752022489",
  appId: "1:890752022489:web:ce11cb52e9bfd8eb6acbc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()