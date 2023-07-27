import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { isWhiteSpaceLike } from "typescript";
const Match = () => {
  const { params } = useLocalSearchParams();
  const { loggedInProfile, userSwiped } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "red",
        paddingTop: 20,
        opacity: 0.89,
      }}
    >
      <Stack.Screen options={{ headerShown: true, headerTitle: `Matched` }} />
      <View
        style={{
          justifyContent: "center",
          paddingHorizontal: 10,
          paddingTop: 20,
        }}
      >
        <Image source={{ uri: "https://links.papareact.com/mg9" }} />
      </View>

      <Text
        style={{ color: isWhiteSpaceLike, textAlign: "center", marginTop: 10 }}
      >
        You and have liked each other.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        {/* <Image
          style={{ height: 20, width: 20, borderRadius: 20 }}
          source={{ uri: loggedInProfile.photoUrl }}
        />
        <Image
          style={{ height: 20, width: 20, borderRadius: 20 }}
          source={{ uri: userSwiped.photoUrl }}
        /> */}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          margin: 5,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          marginTop: 20,
        }}
        onPress={() => router.replace("/home")}
      >
        <Text>Send a message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Match;
