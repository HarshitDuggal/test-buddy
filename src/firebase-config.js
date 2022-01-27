import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
import {  getAuth,  createUserWithEmailAndPassword,  onAuthStateChanged,  signOut,  signInWithEmailAndPassword,} from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCKhzSuS6phCnS_4K9qdlQOS4zL6SQf1og",
  authDomain: "test-buddy-af762.firebaseapp.com",
  projectId: "test-buddy-af762",
  storageBucket: "test-buddy-af762.appspot.com",
  messagingSenderId: "168466573022",
  appId: "1:168466573022:web:e43c625bb2c24ad78f844f",
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
