import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEjW2qTqCgNwANcMGsAK53tmUuQCFJAoY",
    authDomain: "todo-app-6f798.firebaseapp.com",
    projectId: "todo-app-6f798",
    storageBucket: "todo-app-6f798.appspot.com",
    messagingSenderId: "91605535698",
    appId: "1:91605535698:web:2082a95ac32b2df56f160b"
  };

const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};
export {db};