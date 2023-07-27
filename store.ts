import {
  DocumentSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
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

export const appSignIn = async (email, password) => {
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

export const appSignUp = async (email, password, displayName) => {
  try {
    // this will trigger onAuthStateChange to update the store..
    const resp = await createUserWithEmailAndPassword(auth, email, password);

    // add the displayName
    await updateProfile(resp.user, { displayName });

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
    const resp = await getDoc(doc(database, "users", auth.currentUser.uid));
    if (resp.exists()) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    return false;
  }
}

registerInDevtools({ AuthStore });
