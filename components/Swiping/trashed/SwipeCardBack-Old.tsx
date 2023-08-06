import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalRule from "../General/HorizontalRule";
import MilestoneTab from "./MilestoneTab";
import { icons } from "../../constants";
import TimelinePins from "./TimelinePins";
const SwipeCardBack = () => {
  return (
    <LinearGradient
      colors={["#FCA2A2", "#FBCDA6"]}
      style={[
        {
          height: 600,
          borderRadius: 20,
          position: "relative",
          flexDirection: "column",
          paddingHorizontal: 10,
        },
        styles.cardShadow,
      ]}
    >
      <Text style={styles.titles}>My Milestones</Text>
      <View style={{ position: "relative" }}>
        <HorizontalRule
          width="90%"
          height={3}
          position="center"
          marginTop={35}
          backgroundColor="#DDDDDD"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: -32,
            width: "80%",
            alignSelf: "center",
            gap: 24,
          }}
        >
          <MilestoneTab
            milestoneNumber={1}
            description="Learn how to layup"
            detailedDescription="Perform 10 consecutive layups flawlessly for 5 sessions "
          />
          <MilestoneTab
            milestoneNumber={2}
            description="Learn how to shoot 2 pointers"
            detailedDescription="Shoot 20 consecutive 2 pointers flawlessly for 10 sessions "
          />
          <MilestoneTab
            milestoneNumber={3}
            description="Learn how to shoot 3 pointers"
            detailedDescription="Shoot 10 consecutive 3 pointers flawlessly for 10 sessions "
          />
        </View>
      </View>
      <>
        <Text style={styles.titles}>My Motivations</Text>
        <HorizontalRule
          width="90%"
          height={2}
          position="center"
          marginTop={0}
          backgroundColor="white"
        />
        <Text
          style={{
            width: "85%",
            alignSelf: "center",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Long time Lakers fan here trying to level up my shooting skills.
          Currently very inconsistent with my shots. If you feel the same way,
          let’s practice together!
        </Text>
      </>

      <>
        <Text style={styles.titles}>Timeline</Text>
        <HorizontalRule
          width="90%"
          height={2}
          position="center"
          marginTop={0}
          backgroundColor="white"
        />
        <View style={{ position: "relative" }}>
          <HorizontalRule
            width="90%"
            height={2}
            position="center"
            marginTop={35}
            backgroundColor="#DDDDDD"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: -38,
              width: "80%",
              alignSelf: "center",
              gap: 24,
            }}
          >
            <TimelinePins number={1} date="10th Jan 23" />
            <TimelinePins number={2} date="10th Apr 23" />
            <TimelinePins number={3} date="10th June 23" />
          </View>
        </View>
      </>
    </LinearGradient>
  );
};

export default SwipeCardBack;

const styles = StyleSheet.create({
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
    marginTop: 30,
  },
});
