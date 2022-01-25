import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCKhzSuS6phCnS_4K9qdlQOS4zL6SQf1og",
    authDomain: "test-buddy-af762.firebaseapp.com",
    projectId: "test-buddy-af762",
    storageBucket: "test-buddy-af762.appspot.com",
    messagingSenderId: "168466573022",
    appId: "1:168466573022:web:e43c625bb2c24ad78f844f"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);