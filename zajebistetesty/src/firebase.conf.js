// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCHauLrMQL4paG5YA5AG_BnpMT1QE4Jkk",
  authDomain: "evaluetta.firebaseapp.com",
  projectId: "evaluetta",
  storageBucket: "evaluetta.appspot.com",
  messagingSenderId: "832572075349",
  appId: "1:832572075349:web:698d5ccb38250dffa713dc",
  measurementId: "G-TJY17GNET3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);