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
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const colRef = collection(database, "users", auth.currentUser.uid, "goals");
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      setGoals(newData);
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   // const colRef = collection(database, "userdetails");
  //   const colRef = collection(database, "users");
  //   const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => doc.data());
  //     setData(newData);
  //   });

  //   // The returned function will be called when the component unmounts
  //   return () => unsubscribe();
  // }, []); 

  // const [matches, setMatches] = useState([]);

  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(
  //         collection(database, "matches"),
  //         where("usersMatched", "array-contains", auth.currentUser.uid)
  //       ),
  //       (snapshot) => {
  //         setMatches(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             ...doc.data(),
  //           }))
  //         );
  //       }
  //     ),
  //   []
  // );

  // console.log(matches);

  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ gap: 20 }}
    >
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Track your Goals
      </Text>
      {goals.map((item, index) => {
        const conversationId = item.id;
        return (
          <TrackerCard
            id={conversationId}
            key={index}
            profilePhoto={item.pactAvatar}
            pactName={item.pactName}
            milestoneCount={item.milestoneCount} // Will need more time to figure out how to get this
            category={item.category}
            subcategory={item.subcategory}
            evaluationRequired={true}
          />
        );
      })}
      <TouchableOpacity
        onPress={() => router.push("/tracker/CreateGoal")}
        style={styles.add}
      >
        <Text style={{ fontFamily: FONT.bold, fontWeight: "bold" }}>
          Add Goal
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  add: {
    width: "100%",
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 10,
    padding: 10,
  },
});

export default TrackerPage;
