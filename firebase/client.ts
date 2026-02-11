import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgRInqbTFfa65qpVSWbSP1Kojeo05hFJk",
    authDomain: "ai-mock-interview-7855e.firebaseapp.com",
    projectId: "ai-mock-interview-7855e",
    storageBucket: "ai-mock-interview-7855e.firebasestorage.app",
    messagingSenderId: "412992352418",
    appId: "1:412992352418:web:27f7dfafc971d234ab27fb",
    measurementId: "G-LQMSCMZM4K"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);