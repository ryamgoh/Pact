import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONT } from "../../../constants";
import ChatCard from "../../../components/Chats/ChatCard";
import Styled from "../../../styles/container";
import chatsJson from "./chats.json";

// import { ScrollView } from "react-native";

const ChatsPage = () => {
  const allChats = chatsJson;

  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 24,
          fontWeight: "bold",
          // textDecorationLine: "underline",
        }}
      >
        Chat
      </Text>
      {allChats.map((chat) => (
        <ChatCard
          profilePhoto={chat.profilePhoto}
          name={chat.name}
          chatStatus={chat.chatStatus}
          lastSeen={chat.lastSeen}
          streaks={chat.streaks}
        />
      ))}
    </ScrollView>
  );
};

export default ChatsPage;

const styles = StyleSheet.create({});
