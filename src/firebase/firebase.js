import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBP6zvxM2NMO-HstQA5gCKS0L2SBm95hOA",
  authDomain: "chat-auth-6769b.firebaseapp.com",
  projectId: "chat-auth-6769b",
  storageBucket: "chat-auth-6769b.appspot.com",
  messagingSenderId: "105687746023",
  appId: "1:105687746023:web:5ed2ac60e92771277aa942"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
