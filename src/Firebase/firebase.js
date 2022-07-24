import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAJvmIkaVeY360eSg782xmXpbCWWZNRHY",
  authDomain: "therogersak3.firebaseapp.com",
  projectId: "therogersak3",
  storageBucket: "therogersak3.appspot.com",
  messagingSenderId: "255846726717",
  appId: "1:255846726717:web:bc141ebbe188342bfe7e54",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };

export default db;
