import { ScrollView, View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FONT } from "../../../constants";
import ChatCard from "../../../components/Chats/ChatCard";
import ChatsSearchBar from "../../../components/Chats/ChatsSearchBar";
import Styled from "../../../styles/container";
import chatsJson from "./chats.json";
import HorizontalRule from "../../../components/General/HorizontalRule";
import { Link } from "expo-router";

const ChatsPage = () => {
  const allChats = chatsJson;
  const [filterText, setFilterText] = useState("");

  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "center", gap: 20 }}
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
      <ChatsSearchBar filterText={filterText} setFilterText={setFilterText} />

      {filterText === ""
        ? allChats.map((chat) => (
            <>
              <ChatCard
                key={chat.id}
                id={chat.id}
                profilePhoto={chat.profilePhoto}
                name={chat.name}
                chatStatus={chat.chatStatus}
                lastSeen={chat.lastSeen}
                streaks={chat.streaks}
              />
              <HorizontalRule
                width="100%"
                height={1}
                position={"auto"}
                marginTop={0}
              />
            </>
          ))
        : allChats
            .filter((chat) => chat.name.includes(filterText))
            .map((chat) => (
              <>
                <ChatCard
                  key={chat.id}
                  id={chat.id}
                  profilePhoto={chat.profilePhoto}
                  name={chat.name}
                  chatStatus={chat.chatStatus}
                  lastSeen={chat.lastSeen}
                  streaks={chat.streaks}
                />
                <HorizontalRule
                  width="100%"
                  height={1}
                  position={"auto"}
                  marginTop={0}
                />
              </>
            ))}
    </ScrollView>
  );
};

export default ChatsPage;

const styles = StyleSheet.create({});
