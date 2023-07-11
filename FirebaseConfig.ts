import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABDvrle4q9vxLbPF4-Kniv6GLcCYTS5lo",
  authDomain: "reactnativeapp-5cca1.firebaseapp.com",
  projectId: "reactnativeapp-5cca1",
  storageBucket: "reactnativeapp-5cca1.appspot.com",
  messagingSenderId: "722455787184",
  appId: "1:722455787184:web:9d8e7d048b7b0c7944ad75",
  measurementId: "G-P5Y5F1EFJ4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
