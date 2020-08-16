
import * as firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAVojwmfD8jcEIRchgNlG78kPJF3xxnBeQ",
    authDomain: "konnect-982d6.firebaseapp.com",
    databaseURL: "https://konnect-982d6.firebaseio.com",
    projectId: "konnect-982d6",
    storageBucket: "konnect-982d6.appspot.com",
    messagingSenderId: "1040220980342",
    appId: "1:1040220980342:web:78cf168a4b9b61e5824b57",
    measurementId: "G-N81VN9GQBS"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;