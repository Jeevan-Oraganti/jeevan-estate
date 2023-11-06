// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-50287.firebaseapp.com",
  projectId: "mern-estate-50287",
  storageBucket: "mern-estate-50287.appspot.com",
  messagingSenderId: "687259886921",
  appId: "1:687259886921:web:770910a7488c41b8fe6698",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
