import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const SwipeCardBack = () => {
  return (
    <LinearGradient
      colors={["#FF8D79", "#FDC89B"]}
      style={[
        {
          height: 600,
          borderRadius: 20,
          position: "relative",
        },
        styles.cardShadow,
      ]}
    >
      <Text>SwipeCardBack</Text>
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
});
