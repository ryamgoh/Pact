import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FONT, COLORS, SIZES } from "../../../constants";
import Styled from "../../../styles/container";
import TrackerCard from "../../../components/Tracker/TrackerCard";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { auth, database } from "../../../FirebaseConfig";
import getMatchedUserInfo from "../../../lib/getMatchedUserInfo";

const TrackerPage = () => {
  const [data, setData] = useState([]);

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

  // console.log(data);

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
        );
      })}
    </ScrollView>
  );
};

export default TrackerPage;
