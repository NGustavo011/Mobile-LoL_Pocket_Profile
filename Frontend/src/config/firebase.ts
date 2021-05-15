import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
 
 var firebaseConfig = {
    apiKey: "AIzaSyCFk-hbRhPUUK8CPV1diKQALoCiR4JCsyc",
    authDomain: "mobile-lol-pocket-profile.firebaseapp.com",
    projectId: "mobile-lol-pocket-profile",
    storageBucket: "mobile-lol-pocket-profile.appspot.com",
    messagingSenderId: "688815491005",
    appId: "1:688815491005:web:79d7d05b323ffbd42134d4",
    measurementId: "G-NLRLJ6VDZM"
  };
  firebase.initializeApp(firebaseConfig);
 
  export const firebaseAuth = firebase.auth();
  export const firebaseFireStore = firebase.firestore();
