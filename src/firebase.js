// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC4NvfXNR0hXTM-MVIZc47D1epO23-8cD8",
    authDomain: "clone-58177.firebaseapp.com",
    projectId: "clone-58177",
    storageBucket: "clone-58177.appspot.com",
    messagingSenderId: "168929514239",
    appId: "1:168929514239:web:0b86643803dee5fcfaf2ca",
    measurementId: "G-8DQBV33VJM"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};