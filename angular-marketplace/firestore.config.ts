// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBu9eFBfrhi4NkQyRC2yKICK-brw6Gg9f4",
  authDomain: "codeconnect-deb4c.firebaseapp.com",
  projectId: "codeconnect-deb4c",
  storageBucket: "codeconnect-deb4c.appspot.com",
  messagingSenderId: "24331364078",
  appId: "1:24331364078:web:6584256341699f2fa5b5ff",
  measurementId: "G-1LEJMCTCDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);