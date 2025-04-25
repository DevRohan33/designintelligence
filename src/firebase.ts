import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBDFdepHb2jCNNzgkFcdb6ia_P7v_cfK38",
    authDomain: "di-website-4b775.firebaseapp.com",
    projectId: "di-website-4b775",
    storageBucket: "di-website-4b775.firebasestorage.app",
    messagingSenderId: "185398952049",
    appId: "1:185398952049:web:3beda75f8fc0d4bbc79bd0",
    measurementId: "G-HR1J2PPLHK"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db , storage ,auth  };