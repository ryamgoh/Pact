import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FONT, images } from "../../constants";

const ChatCard = () => {
  return (
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
          source={images.logoHeader}
          style={{
            resizeMode: "contain",
            height: 60,
            width: 60,
            borderRadius: 1000,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: FONT.bold, fontSize: 20 }}>Name</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 10 }}>New Chat</Text>
            <Text style={{ fontSize: 10 }}>🍩</Text>
            <Text style={{ fontSize: 10 }}>Just Now</Text>
            <Text style={{ fontSize: 10 }}>🍩</Text>
            <Text style={{ fontSize: 10 }}>Streak🔥</Text>
          </View>
        </View>
      </View>
      <Text style={{}}>📷</Text>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "beige",
    borderRadius: 20,
    width: "100%",
    marginVertical: 5,
    height: 80,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
