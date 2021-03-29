import firebase from "firebase/app";
import "firebase/firestore";
// firebase.initializeApp();
firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyA4n0Dc4hmKhQnb-PDrIM7wjnhKh6wcAP4",
  authDomain: "gitfacts-df4cc.firebaseapp.com",
  projectId: "gitfacts-df4cc",
  storageBucket: "gitfacts-df4cc.appspot.com",
  messagingSenderId: "878972322259",
  appId: "1:878972322259:web:0c0a4dff58910b6b65ef26"
  ,
  measurementId: "G-W7E3T6RKBN",
};

export const firestore = firebase.firestore();
firebase.analytics();
isWindows.firebase=firebase;
export default firebaseConfig