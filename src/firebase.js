import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHqFnJcVBsRO1e3sg4HHbwuDI1ZvKMfUs",
  authDomain: "hulu-clone-52f06.firebaseapp.com",
  databaseURL: "https://hulu-clone-52f06.firebaseio.com",
  projectId: "hulu-clone-52f06",
  storageBucket: "hulu-clone-52f06.appspot.com",
  messagingSenderId: "1044593392255",
  appId: "1:1044593392255:web:76a35287a61ab37fa05d4a",
  measurementId: "G-J0MRB6TTYG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
