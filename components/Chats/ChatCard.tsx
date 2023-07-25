import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FONT, images, COLORS } from "../../constants";
import HorizontalRule from "../General/HorizontalRule";
import icons from "../../constants/icons";
import GrayDot from "../General/GrayDot";

interface ChatCardProps {
  profilePhoto: string;
  name: string;
  chatStatus: string;
  lastSeen: string;
  streaks?: number;
}

const ChatCard = ({
  profilePhoto,
  name,
  chatStatus,
  lastSeen,
  streaks,
}: ChatCardProps) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Image
            source={{
              uri: profilePhoto,
            }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 1000,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: FONT.bold,
                fontSize: 20,
                marginBottom: 8,
                marginTop: 5,
              }}
            >
              {name}
            </Text>
            <View
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
            >
              <Image source={icons.chatStatusIcon} style={styles.iconStyle} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: COLORS.tertiary,
                }}
              >
                {chatStatus}
              </Text>
              <GrayDot />
              <Text style={{ fontSize: 10, color: COLORS.gray }}>
                {lastSeen}
              </Text>
              <GrayDot />

              {streaks && (
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  {streaks}🔥
                </Text>
              )}
            </View>
          </View>
        </View>
        <Image source={icons.cameraIcon} style={{ width: 30, height: 30 }} />
      </View>
      <HorizontalRule
        width="100%"
        height={1}
        position="center"
        marginTop={0}
        backgroundColor="#DDDDDD"
      />
    </>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginVertical: 5,
    height: 80,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: { height: 11, width: 10 },
});
