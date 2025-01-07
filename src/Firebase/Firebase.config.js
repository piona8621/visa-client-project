// Firebase.config.js




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC__cUm39hiAsb3xf_YlrakkzW1C7RGNLo",
  authDomain: "client-visa-project.firebaseapp.com",
  projectId: "client-visa-project",
  storageBucket: "client-visa-project.firebasestorage.app",
  messagingSenderId: "794265831062",
  appId: "1:794265831062:web:19b70d7dd5a6f066c624b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export {auth};


















// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

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
// const auth = getAuth(app);

// export { auth };



