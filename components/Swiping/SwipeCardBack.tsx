import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalRule from "../General/HorizontalRule";
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
        },
        styles.cardShadow,
      ]}
    >
      <Text style={styles.titles}>My Milestones</Text>
      <HorizontalRule width="90%" height={3} position="center" marginTop={40} />
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
