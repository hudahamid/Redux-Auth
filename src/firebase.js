
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/compat/app';
import 'firebase/auth'
import { getAuth, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKy0rvhLWMWcn35iXCPxFFZPEAP3xQy9s",
  authDomain: "online-project-2-fe518.firebaseapp.com",
  projectId: "online-project-2-fe518",
  storageBucket: "online-project-2-fe518.appspot.com",
  messagingSenderId: "837949620562",
  appId: "1:837949620562:web:872e5e4317201389957a8b"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);

const auth= getAuth(app);
const googleAuthProvider =new GoogleAuthProvider();
const facebookAuthProvider=new FacebookAuthProvider();
export {auth,googleAuthProvider,facebookAuthProvider}