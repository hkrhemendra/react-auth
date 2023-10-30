import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp646R4CcKKF2OKiPb3SbVPp7g-BRzBSY",
  authDomain: "bizwyauth.firebaseapp.com",
  projectId: "bizwyauth",
  storageBucket: "bizwyauth.appspot.com",
  messagingSenderId: "743652376588",
  appId: "1:743652376588:web:46782c77b0e9c92ae56e29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);