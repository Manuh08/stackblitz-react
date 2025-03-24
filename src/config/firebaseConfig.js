
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvEci-BZU_GMjfP_RoIzmD-mT34qAlRTA",
  authDomain: "react-login-a98a9.firebaseapp.com",
  projectId: "react-login-a98a9",
  storageBucket: "react-login-a98a9.firebasestorage.app",
  messagingSenderId: "711597548156",
  appId: "1:711597548156:web:6a5856fe0bc5fc9c761ff9",
  measurementId: "G-RQNZB97KTX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };