import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
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
////////////
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
///////Camera stuff

import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";

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
  ////////

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `Chat with ${name}`,
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTintColor: `#F96D5A`,
        }}
      />
      {/* <GiftedChat
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
      /> */}
      <Camera style={styles.container} ref={cameraRef}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 3.84,
            elevation: 5,
            overflow: "hidden",
          }}
          onPress={takePic}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 50,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "", // Set the background color to transparent
                borderWidth: 2, // Optional: You can add a border to the transparent core
                borderColor: COLORS.bgColor, // Optional: Set the border color to white
                overflow: "hidden",
              }}
            >
              {/* You can add your icon or content here */}
            </View>
          </View>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </Camera>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default ConversationPage;
