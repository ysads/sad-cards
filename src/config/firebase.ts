import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CardDoc } from "../types";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
};

initializeApp(firebaseConfig);

/**
 * Authentication
 */
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

/**
 * Database
 */
const db = getFirestore();
const CARDS_COLL = "cards";

export const addCard = async (card: CardDoc) => {
  try {
    const docRef = await addDoc(collection(db, CARDS_COLL), card);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
