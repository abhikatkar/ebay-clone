// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvB1-zcb6ufvVWqTt-brhDqOLS-Kxs2sk",
  authDomain: "ebay-clone-70070.firebaseapp.com",
  projectId: "ebay-clone-70070",
  storageBucket: "ebay-clone-70070.appspot.com",
  messagingSenderId: "595004701551",
  appId: "1:595004701551:web:0e1c227bb09563c77c069a",
  measurementId: "G-XQCKEG6CZR"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);