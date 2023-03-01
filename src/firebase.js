
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/compat/app';
import 'firebase/auth'
import { getAuth, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf_x8DlNKU-OhBeQw9rw24TF-A5H5gJzg",
  authDomain: "reduxauth-19f3d.firebaseapp.com",
  projectId: "reduxauth-19f3d",
  storageBucket: "reduxauth-19f3d.appspot.com",
  messagingSenderId: "495439937302",
  appId: "1:495439937302:web:e119f17414be2f9d071a37"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);

const auth= getAuth(app);
const googleAuthProvider =new GoogleAuthProvider();
const facebookAuthProvider=new FacebookAuthProvider();
export {auth,googleAuthProvider,facebookAuthProvider}