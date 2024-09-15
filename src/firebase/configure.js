import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuzhBd3HXg2XuwsVmcXZkmHKlHbRVd61M",
  authDomain: "user-auth-13e34.firebaseapp.com",
  projectId: "user-auth-13e34",
  storageBucket: "user-auth-13e34.appspot.com",
  messagingSenderId: "950957060876",
  appId: "1:950957060876:web:d8c3ef555fd179359c8f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
