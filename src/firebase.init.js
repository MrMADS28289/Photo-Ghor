import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtOBq5j5PGNz0Q1U8OxELFVKqGHPx76w0",
    authDomain: "photoghor-17c33.firebaseapp.com",
    projectId: "photoghor-17c33",
    storageBucket: "photoghor-17c33.appspot.com",
    messagingSenderId: "348514040683",
    appId: "1:348514040683:web:970e889b1b0ecefe5a6a2e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;