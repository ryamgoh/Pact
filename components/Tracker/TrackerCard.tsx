import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FONT, COLORS, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

interface TrackerCardProps {
  profilePhoto: string;
  pactName: string;
  milestoneCount: number;
  category: string;
  subcategory: string;
  id: string;
}

const TrackerCard = ({
  profilePhoto,
  pactName,
  milestoneCount,
  category,
  subcategory,
  id,
}: TrackerCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{ width: "100%" }}
      onPress={() =>
        router.push({ pathname: `/tracker/${id}`, params: { pactName } })
      }
    >
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={
          milestoneCount === 1
            ? ["#EFBB35", "#4AAE9B"]
            : milestoneCount === 2
            ? ["#ff1e00", "#517313"]
            : milestoneCount === 3
            ? ["#000000", "#3319c8"]
            : ["#ffffff", "#ffffff"]
        }
        style={{ borderRadius: 12, width: "100%", height: 120 }}
      >
        <View style={styles.targetCard}>
          <View style={styles.targetCardLeft}>
            <Text
              style={{
                fontFamily: FONT.bold,
                fontSize: SIZES.medium,
              }}
            >
              {category} | {subcategory}
            </Text>
            <Text style={{ fontFamily: FONT.regular, fontSize: SIZES.medium }}>
              Milestone {milestoneCount}/3
            </Text>
          </View>
          <View style={styles.targetCardRight}>
            <Image
              source={{ uri: profilePhoto }}
              style={{ height: 70, width: 70, borderRadius: 1000 }}
            />
            <Text style={{ fontFamily: FONT.bold }} numberOfLines={1}>
              {pactName}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TrackerCard;

const styles = StyleSheet.create({
  targetCard: {
    margin: 2,
    flex: 1,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  targetCardLeft: {},
  targetCardRight: {
    height: "100%",
    width: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
