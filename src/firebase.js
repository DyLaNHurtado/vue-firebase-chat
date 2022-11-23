// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBPgYE5iZ4-Yzl1t9yUh1trxUCA2Khbl0Y",

  authDomain: "vue-firebase-chat-18ae8.firebaseapp.com",

  projectId: "vue-firebase-chat-18ae8",

  storageBucket: "vue-firebase-chat-18ae8.appspot.com",

  messagingSenderId: "245933028391",

  appId: "1:245933028391:web:3106c968e560d586724a02"

};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const fb = firebase;

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
