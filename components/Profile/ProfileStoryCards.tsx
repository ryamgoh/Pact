import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import ProfileStoryCard from "./ProfileStoryCard";

const ProfileStoryCards = () => {
  return (
    <ScrollView
      style={styles.cardContainer}
      contentContainerStyle={{
        alignItems: "center",
        gap: 10,
      }}
      horizontal
    >
      <ProfileStoryCard
        storySource={"https://picsum.photos/200/291"}
        storyName={"Basketball"}
      />
      <ProfileStoryCard
        storySource={"https://picsum.photos/200/292"}
        storyName={"Football"}
      />
      <ProfileStoryCard
        storySource={"https://picsum.photos/200/293"}
        storyName={"Cricket"}
      />
      <ProfileStoryCard
        storySource={"https://picsum.photos/200/294"}
        storyName={"Softball"}
      />
      <ProfileStoryCard
        storySource={"https://picsum.photos/200/295"}
        storyName={"Bowling"}
      />
    </ScrollView>
  );
};

export default ProfileStoryCards;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 140,
    padding: 15,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: COLORS.bgColor2,
  },
});
