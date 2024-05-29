// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJfdN-rFMi2sPfiXg6v4v_727x7Tp7VEw",
  authDomain: "filmninja-49d20.firebaseapp.com",
  projectId: "filmninja-49d20",
  storageBucket: "filmninja-49d20.appspot.com",
  messagingSenderId: "887591126244",
  appId: "1:887591126244:web:5b34b4e6277a41f577d8f1",
  measurementId: "G-TM10H3CS5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);