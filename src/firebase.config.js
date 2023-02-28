import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1dV2ye0yl8iMog2SoUyBTvo7IxjF0PO4",
  authDomain: "food-app-14b52.firebaseapp.com",
  databaseURL: "https://food-app-14b52-default-rtdb.firebaseio.com",
  projectId: "food-app-14b52",
  storageBucket: "food-app-14b52.appspot.com",
  messagingSenderId: "992881043887",
  appId: "1:992881043887:web:4a70b20bdbfba0c729a75a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firebaseConfig, firestore, storage, app };
