// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDn9tgAof47f6bIvz63ZhPmwRN-ux3Y-xQ",
    authDomain: "whatsapp-clone-1f368.firebaseapp.com",
    projectId: "whatsapp-clone-1f368",
    storageBucket: "whatsapp-clone-1f368.appspot.com",
    messagingSenderId: "545370247189",
    appId: "1:545370247189:web:e0e00f0f46ff4aaddf3e1c",
    measurementId: "G-DJ6N0TBK8B"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;