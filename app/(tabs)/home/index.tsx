import { SafeAreaView } from "react-native";
import SwipingScreen from "../../../components/Swiping/SwipingScreen";
import { useState, useEffect } from "react";
import { auth, database } from "../../../FirebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const collectionRef = collection(database, "users");

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let unsub;
    const fetchCards = async () => {
      const passes = await getDocs(
        collection(database, "users", auth.currentUser.uid, "passes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      const swipes = await getDocs(
        collection(database, "users", auth.currentUser.uid, "swipes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));
      const passedUserIds = passes.length > 0 ? passes : ["test"];
      const swipedUserIds = swipes.length > 0 ? swipes : ["test"];
      unsub = onSnapshot(
        query(
          collectionRef,
          where("id", "not-in", [...passedUserIds, ...swipedUserIds])
        ),
        (snapshot) => {
          setProfiles(
            snapshot.docs
              .filter((doc) => doc.id !== auth?.currentUser?.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          );
        }
      );
    };
    fetchCards();
    return () => {
      // Clean up the snapshot listener when the component unmounts
      unsub();
    };
  }, [database]);

  console.log(profiles);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SwipingScreen candidateData={profiles} />
    </SafeAreaView>
  );
};
export default HomePage;
