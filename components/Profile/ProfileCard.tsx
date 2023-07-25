import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";
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
          justifyContent: "center",
          gap: SIZES.xSmall,
          height: "100%",
          width: 160,
        }}
      >
        <Image
          source={{
            uri: profilePhoto,
          }}
          style={{
            height: 160,
            width: 160,
            borderRadius: 1000,
          }}
        />
        <View>
          <ScrollView horizontal>
            <Text
              style={{
                fontFamily: FONT.bold,
                fontSize: SIZES.medium,
              }}
            >
              @RyannGoh
            </Text>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <ScrollView>
          <Text>Ryann Goh</Text>
          <Text>22 y/o</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            repellat quaerat similique obcaecati deleniti odio eos ad veniam
            unde consectetur.
          </Text>
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
    height: 300,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    gap: 10,
  },
});
