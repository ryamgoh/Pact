import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, database } from "../../../FirebaseConfig";
import { useLocalSearchParams, useSearchParams } from "expo-router";

import { GiftedChat } from "react-native-gifted-chat";
import { Stack } from "expo-router";

const ConversationPage = () => {
  const { id: conversationId } = useSearchParams(); // Rename 'id' to 'receiverId'
  //Extracting params passed by clicking the chatCard
  const params = useLocalSearchParams();
  const { name } = params;
  const [messages, setMessages] = useState([]);
  const [avatarImage, setAvatarImage] = useState();

  //Live updates to chat
  useLayoutEffect(() => {
    const collectionRef = collection(
      database,
      "chats",
      `${conversationId}`,
      "messages"
    );

    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });

    return unsubscribe;
  }, []);

  //Handles message sending
  const onSend = useCallback(async (messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
    await addDoc(collection(database, `chats/${conversationId}/messages`), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  useEffect(() => {
    const fetchMyAvatar = async () => {
      const user = await getDoc(doc(database, "users", auth.currentUser.uid));
      setAvatarImage(user.data().photoUrl);
    };
    fetchMyAvatar();
    console.log(avatarImage);
    console.log(conversationId);
  }, []);

  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, headerTitle: `Chat with ${name}` }}
      />
      <GiftedChat
        isTyping={true}
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={(messages) => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: "#fff",
        }}
        user={{
          _id: auth?.currentUser?.uid,
          avatar: avatarImage,
        }}
      />
    </>
  );
};

export default ConversationPage;
