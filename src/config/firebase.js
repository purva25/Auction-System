import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyD3fGhXPFfmDRxAQdrttUrcUol-FRYS8M8",
  authDomain: "seproject-999c3.firebaseapp.com",
  projectId: "seproject-999c3",
  storageBucket: "seproject-999c3.appspot.com",
  messagingSenderId: "790701528058",
  appId: "1:790701528058:web:02b748f55bc5be15d2ca43"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
