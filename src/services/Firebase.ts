import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBDHsd8UOADf9lxxEHuB3n7JI8qhA8SZyw',
  authDomain: 'planner-a204c.firebaseapp.com',
  projectId: 'planner-a204c',
  storageBucket: 'planner-a204c.appspot.com',
  messagingSenderId: '143537088450',
  appId: '1:143537088450:web:bf908d28567408442d185b',
  measurementId: 'G-ZHX5QY0S5W',
};

const app = firebase.initializeApp(firebaseConfig);

// const login = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithRedirect(provider);
// };

// const logout = async () => {
//   await firebase.auth().signOut();
// };

// const onAuthStateChanged = (
//   cb: firebase.Observer<any, Error> | ((a: firebase.User | null) => any)
// ) => {
//   firebase.auth().onAuthStateChanged(cb);
// };

export { app, firebase };
