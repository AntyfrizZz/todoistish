import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAGMqztcNZbSIjlS8r4uFE3P4Xh_9OBWrQ",
  authDomain: "todoistish.firebaseapp.com",
  databaseURL: "https://todoistish.firebaseio.com",
  projectId: "todoistish",
  storageBucket: "todoistish.appspot.com",
  messagingSenderId: "628166764239",
  appId: "1:628166764239:web:057ff4beeb047b2f"
});

export { firebaseConfig as firebase };
