import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONT, SIZES } from "../../../constants";
import ChatCard from "../../../components/Chats/ChatCard";
import ChatsSearchBar from "../../../components/Chats/ChatsSearchBar";
import Styled from "../../../styles/container";
import HorizontalRule from "../../../components/General/HorizontalRule";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database, auth } from "../../../FirebaseConfig";
import getMatchedUserInfo from "../../../lib/getMatchedUserInfo";
import { SwipeListView } from "react-native-swipe-list-view";

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
            const conversationId = chat.item.id;

            const chatInfo = getMatchedUserInfo(
              chat.item.users,
              auth.currentUser.uid
            );
            return (
              <ChatCard
                id={conversationId}
                profilePhoto={chatInfo.gif}
                name={chatInfo.name}
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
