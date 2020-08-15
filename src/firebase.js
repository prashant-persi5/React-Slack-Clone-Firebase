import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCta67a6D4zWWsBWga-IryUwXkUGYMVKrs",
  authDomain: "slack-clone-4680e.firebaseapp.com",
  databaseURL: "https://slack-clone-4680e.firebaseio.com",
  projectId: "slack-clone-4680e",
  storageBucket: "slack-clone-4680e.appspot.com",
  messagingSenderId: "264800923345",
  appId: "1:264800923345:web:0d7af97039352c52e45ff0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
