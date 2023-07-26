import { COLORS, FONT } from "../../constants";
import { Image, StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { TouchableOpacity } from "react-native-gesture-handler";
import icons from "../../constants/icons";

export default function successfulCreation() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={icons.tickIcon} style={styles.image} />
      <Text style={styles.header}>Successfully Created Your Account!</Text>
      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.button}>Get started with Pact!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: COLORS.black,
    fontFamily: FONT.medium,
    fontSize: 30,
    marginTop: 30,
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 20,
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 5,
    width: 350,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
  }
});