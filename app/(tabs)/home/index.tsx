import { auth, database } from "../../../FirebaseConfig";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { SafeAreaView } from "react-native";
import SwipingScreen from "../../../components/Swiping/SwipingScreen";
import { checkGoals } from "../../../store";
import { set } from "react-native-reanimated";

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
        async (snapshot) => {
          const result =
            snapshot.docs
              .filter((doc) => doc.id !== auth?.currentUser?.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
          const filtered = [];
          for (let i = 0; i < result.length; i++) {
            const user = result[i];
            const goals = await checkGoals(user.id);
            if (goals) {
              filtered.push(user);
            }
          }
          setProfiles(filtered);
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
