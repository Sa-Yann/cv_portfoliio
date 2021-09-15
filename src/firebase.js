import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDqUgBPQW_kF5sy3OQRT1ysgYLy0nBBz-U",
    authDomain: "linkedinclone062k21.firebaseapp.com",
    projectId: "linkedinclone062k21",
    storageBucket: "linkedinclone062k21.appspot.com",
    messagingSenderId: "323573813460",
    appId: "1:323573813460:web:96e8abded78d17175ceb41"
  };

// The commande down here copnnect our project/App to firebase tools and services
const firebaseApp = firebase.initializeApp(firebaseConfig);
// We want to have acces to our database
const db = firebaseApp.firestore();
// we want login support from firebase
const auth = firebase.auth();

// we need to be able to use db and auth in any file from our project so we export thenm
export { db , auth}; // NB: {} NEEDED