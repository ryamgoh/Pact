import { COLORS, FONT, SIZES } from "../../../constants";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, database } from "../../../FirebaseConfig";
import { collection, onSnapshot, or, query, where } from "firebase/firestore";

import ChatCard from "../../../components/Chats/ChatCard";
import ChatsSearchBar from "../../../components/Chats/ChatsSearchBar";
import HorizontalRule from "../../../components/General/HorizontalRule";
import Styled from "../../../styles/container";
import { SwipeListView } from "react-native-swipe-list-view";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getMatchedInfo } from "../../../store";
import getMatchedUserInfo from "../../../lib/getMatchedUserInfo";

const ChatsPage = () => {
  const [matches, setMatches] = useState([]);
  const [filterText, setFilterText] = useState("");

  const getMatches = async () => {
    onSnapshot(
      query(
        collection(database, "matches"),
        or(
          where("pact1", "==", auth.currentUser.uid), 
          where("pact2", "==", auth.currentUser.uid)
          )
      ),
      (snapshot) => {
        setMatches(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }

  const mapMatches = async () => {
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const otherUser = await getMatchedInfo(match.pact1, match.pact2);
      matches[i] = {matchID: match.id, otherUser: otherUser}
      console.log(match);
      console.log(otherUser);
    };
  }

  useEffect(
    () => {
      getMatches();
      mapMatches();
    }, []);

  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "center", gap: 20, flex: 1 }}
    >
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: SIZES.xLarge,
          fontWeight: "bold",
        }}
      >
        Chat
      </Text>
      <ChatsSearchBar filterText={filterText} setFilterText={setFilterText} />
      {matches ? (
        <SwipeListView
          style={{ width: "100%" }}
          data={matches}
          renderItem={(chat, index) => {
            console.log(chat);
            // const conversationId = chat.item.id;
            return (
              <ChatCard
                id={chat.item.matchID}
                profilePhoto={""}
                name={"Hello"}
                chatStatus={"New chat"}
                lastSeen={"Just now"}
                streaks={20}
              />
            );
          }}
          renderHiddenItem={(data, rowMap) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[
                  styles.rightAction,
                  { backgroundColor: "red", alignItems: "flex-end" },
                ]}
                onPress={() => {
                  alert("Delete?");
                }}
              >
                <Text style={{ marginRight: 25, color: "white" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          disableRightSwipe={true}
          rightOpenValue={-100}
        />
      ) : (
        <View>
          <Text>No matches at the moment</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ChatsPage;

const styles = StyleSheet.create({
  // container: {
  //   height: 60,
  //   marginVertical: 10,
  //   backgroundColor: "#ffffff",
  //   justifyContent: "center",
  //   paddingLeft: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },

  rightAction: {
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    height: 60,
    backgroundColor: "#ffffff",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
});
