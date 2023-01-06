import { firebase, initializeApp, getApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";


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
/*const firebaseConfig = {
  apiKey: "AIzaSyBfH5h9WtnYaiO8pdh-xid4HmaNGro34dQ",
  authDomain: "dondeesta-cde0e.firebaseapp.com",
  databaseURL: "https://dondeesta-cde0e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dondeesta-cde0e",
  storageBucket: "dondeesta-cde0e.appspot.com",
  messagingSenderId: "521717502848",
  appId: "1:521717502848:web:7036f33d20eb30ded7a765"
};
*/

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
//const storagedb = getStorage(app);


export  { db  };
