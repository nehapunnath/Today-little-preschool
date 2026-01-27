// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq4XjEtdkoQI-DutYNjHVM6MBuzD1IPmQ",
  authDomain: "little-ville-preschool.firebaseapp.com",
  projectId: "little-ville-preschool",
  storageBucket: "little-ville-preschool.firebasestorage.app",
  messagingSenderId: "378737390554",
  appId: "1:378737390554:web:6e651759d8274a5d4346e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
