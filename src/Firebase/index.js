import firebase from 'firebase'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAYEbF5BBH5Y8_WaMp4OBKdkJhzlT8Fuq4",
    authDomain: "cys-ecomerce.firebaseapp.com",
    projectId: "cys-ecomerce",
    storageBucket: "cys-ecomerce.appspot.com",
    messagingSenderId: "772475790728",
    appId: "1:772475790728:web:dfa40a0251e99eaaea063d"
})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)