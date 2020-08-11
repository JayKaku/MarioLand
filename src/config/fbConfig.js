import firebase from "firebase/app"; //just basic features
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCy-ZfaJSs75WlltEdh0p5SzqISOsiCy5s",
  authDomain: "jay-marioland.firebaseapp.com",
  databaseURL: "https://jay-marioland.firebaseio.com",
  projectId: "jay-marioland",
  storageBucket: "jay-marioland.appspot.com",
  messagingSenderId: "952010987144",
  appId: "1:952010987144:web:b301c65dc3f969e0eeb13d",
  measurementId: "G-KNJN0EDM3J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
