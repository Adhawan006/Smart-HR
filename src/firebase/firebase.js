import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD92gv9BrhdBSwkU-Kw1hOvTCCU4VuJEoM",
  authDomain: "smart-hr-f5091.firebaseapp.com",
  projectId: "smart-hr-f5091",
  storageBucket: "smart-hr-f5091.firebasestorage.app",
  messagingSenderId: "197885040151",
  appId: "1:197885040151:web:920b870b6382ff693cae52"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);