// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxqeDj77pCiQazMavU97lxmI5kYt6DSgk",
  authDomain: "tach-2df8b.firebaseapp.com",
  projectId: "tach-2df8b",
  storageBucket: "tach-2df8b.appspot.com",
  messagingSenderId: "212312655514",
  appId: "1:212312655514:web:9b28e807d2549f36f08123",
  measurementId: "G-ZNJLP3S0ND"
};

const app = initializeApp(firebaseConfig);
export {
  app,
  firebaseConfig
}