import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
import {  getAuth,  createUserWithEmailAndPassword,  onAuthStateChanged,  signOut,  signInWithEmailAndPassword,} from "firebase/auth";
import { useState, useEffect } from "react";

  const firebaseConfig = {
    apiKey: "AIzaSyCDh5AGIh3AVzE-75_2sBEeTXJ-0AfQOkY",
    authDomain: "test-buddy-16d4c.firebaseapp.com",
    projectId: "test-buddy-16d4c",
    storageBucket: "test-buddy-16d4c.appspot.com",
    messagingSenderId: "2268894663",
    appId: "1:2268894663:web:74f9f671d48992033ff5e2"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

export function signup(Email, Password) {
  if (createUserWithEmailAndPassword(auth, Email, Password)) {
    return "created";
  } else {
    return "not created";
  }
}

export function login(Email, Password) {
  if (signInWithEmailAndPassword(auth, Email, Password)) {
    return "created";
  } else {
    return "not created";
  }
}

export function logOut() {
  return signOut(auth);
}
//custom hook
export function useAuth() {
  const [currentUser, setcurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setcurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
