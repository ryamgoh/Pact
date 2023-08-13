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
import { getChat, getMatchedInfo } from "../../../store";

import ChatCard from "../../../components/Chats/ChatCard";
import ChatsSearchBar from "../../../components/Chats/ChatsSearchBar";
import HorizontalRule from "../../../components/General/HorizontalRule";
import Styled from "../../../styles/container";
import { SwipeListView } from "react-native-swipe-list-view";
import generateId from "../../../lib/generateId";
import getMatchedUserInfo from "../../../lib/getMatchedUserInfo";

const ChatsPage = () => {
  const [matches, setMatches] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [again, setAgain] = useState(0);
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    setMatches(await getChat());
    if (again != 1) {
      setAgain(1);
    }
  }

  const checkChat = (id1, id2, chats) => {
    const id = generateId(id1, id2);
    for (let i = 0; i < chats.length; i++) {
      if (chats[i].matchID === id) {
        return true;
      }
    }
    return false;
  };

  const mapMatches = async () => {
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const otherUser = await getMatchedInfo(match.pact1, match.pact2);
      if (!checkChat(match.pact1, match.pact2, chats)) {
        chats.push({matchID: generateId(match.pact1, match.pact2), otherUser: otherUser})
      }
    };
  }

  useEffect(
    () => {
      getChats();
      mapMatches();
    }, [again]);

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
      {chats ? (
        <SwipeListView
          style={{ width: "100%" }}
          data={chats}
          renderItem={(chat, index) => {
            return (
              <ChatCard
                id={chat.item.matchID}
                profilePhoto={chat.item.otherUser.profilePic === undefined ? "https://static.vecteezy.com/system/resources/previews/001/826/221/original/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg" : chat.item.otherUser.profilePic}
                name={chat.item.otherUser === undefined ? "Loading..." : chat.item.otherUser.name}
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
