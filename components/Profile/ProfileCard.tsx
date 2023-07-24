import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "../../constants";

const ProfileCard = ({ profilePhoto }) => {
  return (
    <LinearGradient
      colors={["#FDC89B", "#FF8D79"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.cardContainer}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: 120,
        }}
      >
        <Image
          source={{
            uri: profilePhoto,
          }}
          style={{
            height: 120,
            width: 120,
            borderRadius: 1000,
          }}
        />
        <ScrollView>
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: 20,
            }}
          >
            @usersdsdsddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <ScrollView style={{}}>
          <Text>ProfileCarddddd</Text>
          <Text>
            ProfileCardddddProfileCardddddProfileCardddddProfileCarddddd
          </Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
          <Text>ProfileCarddddd</Text>
        </ScrollView>
        <Image
          source={icons.editButton}
          style={{ width: 35, height: 35, alignSelf: "flex-end" }}
        />
      </View>
    </LinearGradient>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 240,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: COLORS.gray2,
  },
});
