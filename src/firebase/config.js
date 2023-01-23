import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDnl8FOTTpH-WRAYnQnTU8ACnUni71lUKg",
    authDomain: "dojo-site-b276b.firebaseapp.com",
    projectId: "dojo-site-b276b",
    storageBucket: "dojo-site-b276b.appspot.com",
    messagingSenderId: "622143143053",
    appId: "1:622143143053:web:dbf1f619bc7de76e53f6c4"
};

//init firebase

firebase.initializeApp(firebaseConfig)


// init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp 
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp, projectStorage }
