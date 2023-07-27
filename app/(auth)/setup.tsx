import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONT } from "../../constants";
import { Redirect, Stack, useRouter } from "expo-router";

const Setup = () => {
  const router = useRouter();
  return (
    <ScrollView
    style={{}}
    contentContainerStyle={{ alignItems: "flex-start" }}
    >
      <Text>Hi!</Text>
    </ScrollView>
  );
};

export default Setup;
