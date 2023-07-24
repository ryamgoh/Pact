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
          fontSize: 24,
          fontWeight: "bold",
          // textDecorationLine: "underline",
        }}
      >
        Chat
      </Text>
      <ChatCard
        profilePhoto={
          "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        }
        name={"Cleon"}
        chatStatus={"New chat"}
        lastSeen={"Just now"}
        streaks={100}
      />
      <ChatCard
        profilePhoto={
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
        name={"Ryann"}
        chatStatus={"New chat"}
        lastSeen={"Just now"}
        streaks={100}
      />
      <ChatCard
        profilePhoto={
          "https://images.unsplash.com/photo-1608389769338-3d5ceb3c1bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
        name={"Shishir"}
        chatStatus={"New chat"}
        lastSeen={"Just now"}
        streaks={100}
      />
      <ChatCard
        profilePhoto={
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        name={"Kate"}
        chatStatus={"New chat"}
        lastSeen={"Just now"}
        streaks={100}
      />
      <ChatCard
        profilePhoto={
          "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91bmclMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        name={"Celeste"}
        chatStatus={"New chat"}
        lastSeen={"Just now"}
        streaks={100}
      />
      <ChatCard
        profilePhoto={
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91bmclMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        name={"Christy"}
        chatStatus={"New chat"}
        lastSeen={"Just now"}
        streaks={100}
      />
    </ScrollView>
  );
};

export default ChatsPage;

const styles = StyleSheet.create({});
