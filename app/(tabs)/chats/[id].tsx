import React, { useState, useLayoutEffect, useCallback } from "react";
import { Stack } from "expo-router";

import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  where, // Import the where function
  or,
  and,
} from "firebase/firestore";

import { auth, database } from "../../../FirebaseConfig";
import { useSearchParams } from "expo-router";

const ConversationPage = () => {
  const { id: conversationId } = useSearchParams(); // Rename 'id' to 'receiverId'

  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const collectionRef = collection(
      database,
      "chats",
      `${conversationId}`,
      "messages"
    );

    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          senderId: auth?.currentUser?.uid,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });

    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { createdAt, text, user } = messages[0];
    addDoc(collection(database, `chats/${conversationId}/messages`), {
      senderId: auth?.currentUser?.uid,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: `Chat` }} />
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={(messages) => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: "#fff",
        }}
        user={{
          _id: auth?.currentUser?.uid,
          avatar: "https://i.pravatar.cc/300",
        }}
      />
    </>
  );
};

export default ConversationPage;
