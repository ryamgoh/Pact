import { ScrollView, View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { FONT } from "../../../constants";
import ChatCard from "../../../components/Chats/ChatCard";
import ChatsSearchBar from "../../../components/Chats/ChatsSearchBar";
import Styled from "../../../styles/container";
import HorizontalRule from "../../../components/General/HorizontalRule";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database, auth } from "../../../FirebaseConfig";
import getMatchedUserInfo from "../../../lib/getMatchedUserInfo";

const ChatsPage = () => {
  const [matches, setMatches] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(database, "matches"),
          where("usersMatched", "array-contains", auth.currentUser.uid)
        ),
        (snapshot) => {
          setMatches(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      ),
    []
  );

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
        }}
      >
        Chat
      </Text>
      <ChatsSearchBar filterText={filterText} setFilterText={setFilterText} />

      {filterText === "" ? (
        matches ? (
          matches.map((chat, index) => {
            const chatInfo = getMatchedUserInfo(
              chat.users,
              auth.currentUser.uid
            );

            console.log("testing" + JSON.stringify(chatInfo));
            return (
              <>
                <ChatCard
                  key={index}
                  id={index}
                  profilePhoto={chatInfo.photoUrl}
                  name={chatInfo.firstName}
                  chatStatus={"New chat"}
                  lastSeen={"Just now"}
                  streaks={200}
                />
                <HorizontalRule width="100%" height={1} position={"auto"} />
              </>
            );
          })
        ) : (
          <View>
            <Text>No matches at the moment</Text>
          </View>
        )
      ) : (
        matches
          .filter((chat) => {
            const chatInfo = getMatchedUserInfo(
              chat.users,
              auth.currentUser.uid
            );
            return chatInfo.firstName.includes(filterText);
          })
          .map((chat, index) => {
            return (
              <>
                <ChatCard
                  key={index}
                  id={index}
                  profilePhoto={chat.photoUrl}
                  name={chat.firstName}
                  chatStatus={"New chat"}
                  lastSeen={"Just now"}
                  streaks={200}
                />
                <HorizontalRule
                  width="100%"
                  height={1}
                  position={"auto"}
                  marginTop={0}
                />
              </>
            );
          })
      )}
    </ScrollView>
  );
};

export default ChatsPage;

const styles = StyleSheet.create({});
