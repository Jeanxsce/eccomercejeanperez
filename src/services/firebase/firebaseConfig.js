
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSulRlOHQtsdJExviWOXyU0cceHl961VM",
    authDomain: "eccomercejeanperez.firebaseapp.com",
    projectId: "eccomercejeanperez",
    storageBucket: "eccomercejeanperez.appspot.com",
    messagingSenderId: "115856492375",
    appId: "1:115856492375:web:af14a737f6d8f9ca3d2012"
};


const app = initializeApp(firebaseConfig);
export const db = getFiresotre(app)