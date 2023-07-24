import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

const ProfileCard = () => {
  return (
    <LinearGradient
      colors={["#FDC89B", "#FF8D79"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.cardContainer}
    >
      <Text>ProfileCard</Text>
    </LinearGradient>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 240,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS.gray2,
  },
  iconStyle: { height: 11, width: 10 },
});
