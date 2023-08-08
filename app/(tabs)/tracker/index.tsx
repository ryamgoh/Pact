import { COLORS, FONT, SIZES } from "../../../constants";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { auth, database } from "../../../FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import Styled from "../../../styles/container";
import { TouchableOpacity } from "react-native-gesture-handler";
import TrackerCard from "../../../components/Tracker/TrackerCard";
import getMatchedUserInfo from "../../../lib/getMatchedUserInfo";
import { useRouter } from "expo-router";

const TrackerPage = () => {
  const router = useRouter();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // const colRef = collection(database, "userdetails");
  //   const colRef = collection(database, "users");
  //   const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => doc.data());
  //     setData(newData);
  //   });

  //   // The returned function will be called when the component unmounts
  //   return () => unsubscribe();
  // }, []); // Empty dependency array ensures the effect runs only once

  const [matches, setMatches] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(database, "matches"),
          where("usersMatched", "array-contains", auth.currentUser.uid)
        ),
        (snapshot) => {
          setMatches(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      ),
    []
  );

  console.log(matches);

  return (
    <ScrollView
      contentContainerStyle={[Styled.MainScrollableCanvas, { gap: 20 }]}
    >
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Track your Goals
      </Text>
      {matches.map((item, index) => {
        const conversationId = item.id;

        const chatInfo = getMatchedUserInfo(item.users, auth.currentUser.uid);

        return (
          <>
            <TrackerCard
            id={conversationId}
            key={index}
            profilePhoto={chatInfo.gif}
            pactName={chatInfo.name} // Just get the data from matches collection
            milestoneCount={2} // Will need more time to figure out how to get this
            category={chatInfo.category}
            subcategory={chatInfo.interest}
            evaluationRequired={true}
          />
            />
            <TouchableOpacity onPress={() => router.replace("/tracker/CreateGoal")} style={styles.add}>
              <Text style={{ fontFamily: FONT.bold, fontWeight: "bold" }}>Add Goal</Text>
            </TouchableOpacity>
          </>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  add: {
    width: 370,
    textAlign: "center",
    border: "0.5px solid black",
    borderRadius: 10,
    padding: 10,
  }
});

export default TrackerPage;
