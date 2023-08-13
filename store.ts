import { DocumentSnapshot, collection, doc, getDoc, getDocs, or, query, setDoc, updateDoc, where } from "firebase/firestore";
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

export const setupGIF = async (url) => {
  try {
    await updateDoc(doc(database, "users", auth.currentUser.uid), {
      gif: url,
    });
    return true;
  } catch (e) {
    return false;
  }
}

export const generateID = async () => {
  return (Date.now().toString(36) + Math.random().toString(36).slice(2, 5)).toUpperCase();
}

export const setupGoals = async (data) => {
  try {
    await setDoc(doc(database, `users/${auth.currentUser.uid}/goals/${await generateID()}`), {
      ...data,
      pactName: "",
      pactAvatar: "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png",
      milestoneCount: 0,
    });
    return true;
  } catch (e) {
    return false;
  }
}

export const checkGoals = async (id) => {
  try {
    const goalsQuerySnapshot = await getDocs(collection(database, "users", id, "goals"));
    return goalsQuerySnapshot.docs.length !== 0;
  } catch (err) {
    return false;
  }
}

export const getRecentGoal = async (id) => {
  try {
    const goalsQuerySnapshot = await getDocs(collection(database, "users", id, "goals"));
    const goals = goalsQuerySnapshot.docs.map((doc) => doc.data());
    return goals[goals.length - 1];
  } catch (err) {
    return {
      category: "",
      date1: "",
      date2: "",
      date3: "",
      goal1: "",
      goal2: "",
      goal3: "",
      milestoneCount: 0,
      motivations: "No Motivations Set",
      subcategory: "",
      timeframe: "",
    }
  }
}

export const getChat = async () => {
  const queryRef = query(
    collection(database, "matches"),
    or(
      where("pact1", "==", auth.currentUser.uid), 
      where("pact2", "==", auth.currentUser.uid)
      )
  );
  return await getDocs(queryRef).then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()));
}

export const getMatchedInfo = async (id1, id2) => {
  try {
    let other = "";
    if (id1 === auth.currentUser.uid) {
      other = id2;
    } else {
      other = id1;
    }
    const snapshot = await getDoc(doc(database, "users", other));
    return snapshot.data();
  } catch (err) {
    return {
      age: "",
      name: "",
      profilePic: "",
      bio: "",
      username: "",
      id: "",
      gif: "",
    }
  }
};

registerInDevtools({ AuthStore });
