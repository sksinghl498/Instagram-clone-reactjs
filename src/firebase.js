// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4oeSfsu2ALf1QWNPAFCGbDcvdFnrMWco",
  authDomain: "instagram-clone-react-d48ca.firebaseapp.com",
  projectId: "instagram-clone-react-d48ca",
  storageBucket: "instagram-clone-react-d48ca.appspot.com",
  messagingSenderId: "665791545536",
  appId: "1:665791545536:web:485974807326e3bfa0ed25",
  measurementId: "G-87XVG0H8H0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
