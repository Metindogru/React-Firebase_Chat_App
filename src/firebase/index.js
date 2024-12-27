import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FB_API_KEY,
  authDomain: import.meta.env.VITE_APP_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FB_APP_ID,
};

//* Initialize Firebase
const app = initializeApp(firebaseConfig);

//*! Authentication referansını alma /Kurulum
export const auth = getAuth(app);

//*! Google saglayıcı kurulumu
export const provider = new GoogleAuthProvider();

//*! Veri tabanı kurulumu / Referans
export const db = getFirestore(app);
