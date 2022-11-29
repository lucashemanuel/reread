import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  addDoc,
  query,
  orderBy,
  limit,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYVwv-a4zswyPTH82WPkkWfko3chdVI9Q",
  authDomain: "reread-app-5c8e0.firebaseapp.com",
  projectId: "reread-app-5c8e0",
  storageBucket: "reread-app-5c8e0.appspot.com",
  messagingSenderId: "964294410968",
  appId: "1:964294410968:web:633cab085a30a3ff9d8dad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export {
  getDoc,
  query,
  orderBy,
  limit,
  app,
  auth,
  database,
  doc,
  collection,
  addDoc,
  setDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getFirestore,
  getAuth,
};
