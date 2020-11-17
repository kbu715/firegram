import firebase from "firebase/app";
import "firebase/firestore"; //firebase 데이터 베이스 사용 준비
import "firebase/storage";

 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectStorage = firebase.storage();
  export const projectFirestore = firebase.firestore();
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  // export { projectStorage, projectFirestore };