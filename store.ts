import { DocumentSnapshot, doc, getDoc, setDoc } from "firebase/firestore";
import { Store, registerInDevtools } from "pullstate";
import { app, auth, database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth/";

export const AuthStore = new Store({
  isLoggedIn: false,
  initialized: false,
  user: null,
});

const unsub = onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChange", user);
  AuthStore.update((store) => {
    store.user = user;
    store.isLoggedIn = user ? true : false;
    store.initialized = true;
  });
});

export const appSignIn = async (email: string, password: string) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    AuthStore.update((store) => {
      store.user = resp.user;
      store.isLoggedIn = resp.user ? true : false;
    });
    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

export const appSignOut = async () => {
  try {
    await signOut(auth);
    AuthStore.update((store) => {
      store.user = null;
      store.isLoggedIn = false;
    });
    return { user: null };
  } catch (e) {
    return { error: e };
  }
};

export const appSignUp = async (
  email: string,
  password: string,
  displayName: string,
  profilePicture: string
) => {
  try {
    // this will trigger onAuthStateChange to update the store..
    const resp = await createUserWithEmailAndPassword(auth, email, password);

    // add the displayName
    await updateProfile(resp.user, { displayName, photoURL: profilePicture });

    AuthStore.update((store) => {
      store.user = auth.currentUser;
      store.isLoggedIn = true;
    });

    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

export const passwordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (e) {
    return false;
  }
};

export const isNewUser = async () => {
  try {
    // const resp = await getDoc(
    //   doc(database, "userdetails", auth.currentUser.uid)
    // );
    const resp = await getDoc(doc(database, "users", auth.currentUser.uid));
    if (resp.exists()) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    return false;
  }
};

export const setupDetails = async (data) => {
  try {
    // await setDoc(doc(database, "userdetails", auth.currentUser.uid), {
    await setDoc(doc(database, "users", auth.currentUser.uid), {
      ...data,
      name: auth.currentUser.displayName,
      profilePic: auth.currentUser.photoURL,
      id: auth.currentUser.uid,
    });
    return true;
  } catch (e) {
    return false;
  }
};

registerInDevtools({ AuthStore });
