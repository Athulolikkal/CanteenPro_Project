import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseapi = import.meta.env.VITE_FIREBASE_OTP_API;
const projectId = import.meta.env.VITE_FIREBASE_OTP_PROJECT_ID;
const domain = import.meta.env.VITE_FIREBASE_AUTHDOMAIN;
const storagebucket = import.meta.env.VITE_FIREBASE_STORAGEBUCKET;
const senderid = import.meta.env.VITE_FIREBASE_SENDERID;
const appid = import.meta.env.VITE_FIREBASE_APPID;
const measurementid = import.meta.env.VITE_FIREBASE_MEASUREMENTID;

const firebaseConfig = {
 
  apiKey: firebaseapi,
  authDomain: domain,
  projectId: projectId,
  storageBucket: storagebucket,
  messagingSenderId: senderid,
  appId: appid,
  measurementId: measurementid,
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
