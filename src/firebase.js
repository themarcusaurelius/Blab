import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbAyV5md_Nzav1UvwJvK504XxrCbHh4sE",
    authDomain: "chatapp-4f6e4.firebaseapp.com",
    databaseURL: "https://chatapp-4f6e4.firebaseio.com",
    projectId: "chatapp-4f6e4",
    storageBucket: "chatapp-4f6e4.appspot.com",
    messagingSenderId: "413477276689",
    appId: "1:413477276689:web:a0a5480fb6e969e1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;