import firebase from 'firebase/app';
import   'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDT10y8GKr9gRP_DqgOdnm44-uGgv_UZXg",
    authDomain: "chatup-e14c3.firebaseapp.com",
    projectId: "chatup-e14c3",
    storageBucket: "chatup-e14c3.appspot.com",
    messagingSenderId: "665885835909",
    appId: "1:665885835909:web:48a5ed6bab6ea4df12dfec"
  }).auth();