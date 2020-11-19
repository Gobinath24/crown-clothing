import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6_540hmuHlOrPmPnD117xF6ouLM1kvgE",
  authDomain: "crown-db-a1b8d.firebaseapp.com",
  databaseURL: "https://crown-db-a1b8d.firebaseio.com",
  projectId: "crown-db-a1b8d",
  storageBucket: "crown-db-a1b8d.appspot.com",
  messagingSenderId: "342796880545",
  appId: "1:342796880545:web:6ca2be5973924cffe93ee0",
  measurementId: "G-L2L2JTPBK0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
