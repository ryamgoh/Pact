import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const ProfileStoryCard = ({ storySource, storyName }) => {
  return (
    <View style={styles.storyCard}>
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 1000,
          borderWidth: 3,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "purple",
        }}
      >
        <Image
          source={{ uri: storySource }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 1000,
          }}
        />
      </View>
      <Text numberOfLines={1} style={{ fontSize: 10 }}>
        {storyName}
      </Text>
    </View>
  );
};

export default ProfileStoryCard;

const styles = StyleSheet.create({
  storyCard: {
    flexDirection: "column",
    alignItems: "center",
    width: 80,
    gap: 5,
  },
});
