
import { initializeApp } from "firebase/app";

import 'firebase/auth'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKy0rvhLWMWcn35iXCPxFFZPEAP3xQy9s",
  authDomain: "online-project-2-fe518.firebaseapp.com",
  projectId: "online-project-2-fe518",
  storageBucket: "online-project-2-fe518.appspot.com",
  messagingSenderId: "837949620562",
  appId: "1:837949620562:web:872e5e4317201389957a8b"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const auth=firebase.auth();
const googleAuthProvider =firebase.googleAuthProvider();
const facebookAuthProvider=firebase.facebookAuthProvider();
export {auth,googleAuthProvider,facebookAuthProvider}