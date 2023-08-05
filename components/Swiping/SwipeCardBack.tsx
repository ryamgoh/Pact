import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalRule from "../General/HorizontalRule";
import MilestoneTab from "./MilestoneTab";
import { FONT, icons } from "../../constants";
import TimelinePins from "./TimelinePins";
import { ScrollView } from "react-native-gesture-handler";
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
          Catergory
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1590405861813-02de6a8a6246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          }}
          style={{ height: 80, width: 80, borderRadius: 1000 }}
        />
        <Text style={styles.titles}>My Milestones</Text>
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
            <Text style={{ color: "white", fontSize: 8 }}>10 Jul 23</Text>
          </View>
          <MilestoneTab
            milestoneNumber={1}
            description="Learn how to layup"
            detailedDescription="Perform 10 consecutive layups flawlessly for 5 sessions "
            date="10 Aug 23"
            completed={true}
          />
          <MilestoneTab
            milestoneNumber={2}
            description="Learn how to layup"
            detailedDescription="Perform 10 consecutive layups flawlessly for 5 sessions "
            date="10 Aug 23"
            completed={true}
          />
          <MilestoneTab
            milestoneNumber={3}
            description="Learn how to layup"
            detailedDescription="Perform 10 consecutive layups flawlessly for 5 sessions "
            date="10 Aug 23"
            completed={false}
          />
          <MilestoneTab
            milestoneNumber={4}
            description="Learn how to layup"
            detailedDescription="Perform 10 consecutive layups flawlessly for 5 sessions "
            date="10 Aug 23"
            completed={false}
          />
        </ScrollView>
      </View>
      <View style={styles.cardSection}>
        {/* This is the bottom card */}
        <Text style={styles.titles}>My Motivations</Text>
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
          Long time Lakers fan here trying to level up my shooting skills.
          Currently very inconsistent with my shots. If you feel the same way,
          let’s practice together!
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
