// Firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmOOVxlD6EQXssaCbj28ssfe3l8rPZSLo",
  authDomain: "visa-client-project.firebaseapp.com",
  projectId: "visa-client-project",
  storageBucket: "visa-client-project.firebasestorage.app",
  messagingSenderId: "414441380820",
  appId: "1:414441380820:web:9927c96bf99cb588061441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAmOOVxlD6EQXssaCbj28ssfe3l8rPZSLo",
//   authDomain: "visa-client-project.firebaseapp.com",
//   projectId: "visa-client-project",
//   storageBucket: "visa-client-project.firebasestorage.app",
//   messagingSenderId: "414441380820",
//   appId: "1:414441380820:web:9927c96bf99cb588061441"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);