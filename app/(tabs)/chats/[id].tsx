import { View, Text } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import chatsJson from "./chats.json";

const ConversationPage = () => {
  const { id } = useSearchParams();
  // const chatData = chatsJson.filter((chat) => String(chat.id) === id);
  const chatData = chatsJson.findIndex((chat) => chat.id === Number(id));

  return (
    <View>
      <Stack.Screen
        options={{ headerShown: true, headerTitle: `Chat #${id}` }}
      />
      <Text onPress={() => console.log(chatData)}>My Chat: {id}</Text>
      {/* <Text>{chatData[0].name}</Text> */}
    </View>
  );
};

export default ConversationPage;
