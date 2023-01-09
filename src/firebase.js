import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfIo6kk7UsKxcbqc4qeyQlYS4T3AflmLc",
  authDomain: "chat-app-b6b4e.firebaseapp.com",
  projectId: "chat-app-b6b4e",
  storageBucket: "chat-app-b6b4e.appspot.com",
  messagingSenderId: "687235756199",
  appId: "1:687235756199:web:b0ae3bb56eb5b3201b2b82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
