import { Image, StyleSheet, Text, View } from "react-native";
import { auth, database } from "../../FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

import { FONT } from "../../constants";
import HorizontalRule from "../General/HorizontalRule";
import { LinearGradient } from "expo-linear-gradient";
import MilestoneTab from "./MilestoneTab";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { getRecentGoal } from "../../store";

const SwipeCardBack = ({ data }: any) => {

  const [milestoneData, setMilestoneData] = React.useState(undefined);

  React.useEffect(() => {
    // const colRef = collection(database, "users", data.id, "goals");
    // const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
    //   const newData = querySnapshot.docs.map((doc) => doc.data());
    //   setMilestoneData(newData);
    // });
    getMilestones();

    // return () => unsubscribe();
  }, []); 

  const getMilestones = async () => {
    setMilestoneData(await getRecentGoal(data.id));
  }

  // let startDate = "10 Jul 23"; // Date of Pact Creation

  let motivations = data.bio ? data.bio : "No bio available";
  // `Long time Lakers fan here trying to level up my shoot   ing skills. Currently very inconsistent with my shots. If you feel the same way, lets practice together!`;

  // let milestoneData = [
  //   {
  //     milestoneNumber: 1,
  //     description: "Learn how to layup",
  //     detailedDescription:
  //       "Perform 10 consecutive layups flawlessly for 5 sessions ",
  //     date: "10 Aug 23",
  //     completed: true,
  //   },
  //   {
  //     milestoneNumber: 2,
  //     description: "Learn how to 2-point shot",
  //     detailedDescription:
  //       "Perform 10 consecutive 2-pointers flawlessly for 5 sessions ",
  //     date: "10 Dec 23",
  //     completed: false,
  //   },
  //   {
  //     milestoneNumber: 3,
  //     description: "Learn how to throw a ball like Steph Curry",
  //     detailedDescription: "Become basketball god and win the NBA championship",
  //     date: "10 Jan 24",
  //     completed: false,
  //   },
  // ];

  return (
    <LinearGradient
      colors={["#FCA2A2", "#FBCDA6"]}
      style={[
        {
          height: 600,
          borderRadius: 20,
          position: "relative",
          flexDirection: "column",
          padding: 20,
          justifyContent: "space-between",
        },
        styles.cardShadow,
      ]}
    >
      <View style={styles.cardSection}>
        {/* This is the top card */}
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: FONT.bold,
            fontSize: 10,
            position: "absolute",
            left: 0,
            borderWidth: 2,
            padding: 5,
            borderColor: "white",
            borderRadius: 20,
          }}
        >
          {milestoneData?.category}
        </Text>
        <Image
          source={{ uri: data.profilePic }}
          style={{ height: 80, width: 80, borderRadius: 1000 }}
        />
        <Text style={styles.titles}>
          {data ? data.name.split(" ")[0] : "Placeholder"}'s Milestones
        </Text>
        <HorizontalRule
          width="100%"
          height={1}
          position="center"
          backgroundColor="white"
        />
        <ScrollView style={{ width: "100%", height: 300 }}>
          <View style={{ width: 70, alignItems: "center" }}>
            <Text style={{ fontWeight: "700", color: "white", fontSize: 12 }}>
              Start
            </Text>
            <Text style={{ color: "white", fontSize: 8 }}>{milestoneData?.date1}</Text>
          </View>
          <MilestoneTab
            milestoneNumber={1}
            description={milestoneData?.goal1}
            detailedDescription={milestoneData?.goal1}
            date={milestoneData?.date1}
            completed={milestoneData?.milestoneCount > 0}
          />
          <MilestoneTab
            milestoneNumber={2}
            description={milestoneData?.goal2}
            detailedDescription={milestoneData?.goal2}
            date={milestoneData?.date2}
            completed={milestoneData?.milestoneCount > 1}
          />
          <MilestoneTab
            milestoneNumber={3}
            description={milestoneData?.goal3}
            detailedDescription={milestoneData?.goal3}
            date={milestoneData?.date3}
            completed={milestoneData?.milestoneCount > 2}
          />
          {/* {milestoneData.map((milestone, index) => (
            <MilestoneTab
              key={index}
              milestoneNumber={milestone.milestoneNumber}
              description={milestone.description}
              detailedDescription={milestone.detailedDescription}
              date={milestone.date}
              completed={milestone.completed}
            />
          ))} */}
        </ScrollView>
      </View>
      <View style={styles.cardSection}>
        {/* This is the bottom card */}
        <Text style={styles.titles}>
          {data ? data.name.split(" ")[0] : "Placeholder"}'s Motivations
        </Text>
        <HorizontalRule
          width="100%"
          height={1}
          position="center"
          backgroundColor="white"
        />
        <Text
          style={{
            width: "100%",
            alignSelf: "center",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {milestoneData?.motivations}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SwipeCardBack;

const styles = StyleSheet.create({
  cardSection: {
    position: "relative",
    alignItems: "center",
    gap: 5,
    overflow: "hidden",
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    textAlign: "center",
    // marginTop: 30,
  },
});
