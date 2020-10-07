import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAo6OJbUwditBLyPzky1qEucuuJTW2uGIQ",
  authDomain: "rajwal-stores.firebaseapp.com",
  databaseURL: "https://rajwal-stores.firebaseio.com",
  projectId: "rajwal-stores",
  storageBucket: "rajwal-stores.appspot.com",
  messagingSenderId: "31505826816",
  appId: "1:31505826816:web:b097c4a8778809632004e5",
  measurementId: "G-8Z5LDCFYTN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const storageRef = storage.ref();

export const db = firebase.firestore();
export const shoesCollection = db.collection('shoes');


export default firebase;
