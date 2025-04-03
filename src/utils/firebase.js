// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR5DbCNXSnrl-02FVbHwxMVwXmhnzJuUE",
  authDomain: "netflixgpt-c4fa9.firebaseapp.com",
  projectId: "netflixgpt-c4fa9",
  storageBucket: "netflixgpt-c4fa9.firebasestorage.app",
  messagingSenderId: "560569001975",
  appId: "1:560569001975:web:48076a339d6babc1e9b0f2",
  measurementId: "G-RWW76V5Y3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()