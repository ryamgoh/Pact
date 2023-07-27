import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { FONT, images, COLORS } from "../../constants";
import icons from "../../constants/icons";
import GrayDot from "../General/GrayDot";
import { useRouter } from "expo-router";
import HorizontalRule from "../General/HorizontalRule";

interface ChatCardProps {
  profilePhoto: string;
  name: string;
  chatStatus: string;
  lastSeen: string;
  streaks?: number;
  id: number;
}
const ChatCard = ({
  profilePhoto = "https://i.imgur.com/1O1moj9.png",
  name = "Name",
  chatStatus,
  lastSeen,
  streaks = 0,
  id,
}: ChatCardProps) => {
  const router = useRouter();

  console.log("chatcarddddd" + chatStatus);

  return (
    <>
      <Pressable
        style={styles.cardContainer}
        onPress={() =>
          router.push({ pathname: `/chats/${id}`, params: { name } })
        }
      >
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
              justifyContent: "space-evenly",
            }}
          >
            <Text
              style={{
                fontFamily: FONT.bold,
                fontSize: 20,
              }}
            >
              {name}
            </Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
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
      </Pressable>
    </>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 80,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: { height: 11, width: 10 },
});
