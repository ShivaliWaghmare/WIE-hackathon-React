
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNrjg2PK1BlFilAZUIGL7C-ZTg7lCluD8",
  authDomain: "wieh-d3924.firebaseapp.com",
  projectId: "wieh-d3924",
  storageBucket: "wieh-d3924.appspot.com",
  messagingSenderId: "1042723350866",
  appId: "1:1042723350866:web:47de695503856c9fbeb28b",
  measurementId: "G-9PLM1S1SGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,app}