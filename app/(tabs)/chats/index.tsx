import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONT } from "../../../constants";
import ChatCard from "../../../components/Chats/ChatCard";
import Styled from "../../../styles/container";
// import { ScrollView } from "react-native";

const ChatsPage = () => {
  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 20,
          fontWeight: "bold",
          // textDecorationLine: "underline",
        }}
      >
        ChatsPage
      </Text>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </ScrollView>
  );
};

export default ChatsPage;

const styles = StyleSheet.create({});
