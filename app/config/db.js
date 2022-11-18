import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import geofire from 'geofire';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfVEdiVw6E537Z4TF--f4YWLI-HtxXCMw",
  authDomain: "ereselmejor-9b205.firebaseapp.com",
  projectId: "ereselmejor-9b205",
  storageBucket: "ereselmejor-9b205.appspot.com",
  messagingSenderId: "932970278776",
  appId: "1:932970278776:web:4b351427bbc3168a01228d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;