import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONT } from "../../constants";
import { Stack, useRouter } from "expo-router";

import { LargerHeader } from "../../components/UI/logos";
import { useRef } from "react";

const Setup = () => {
  const router = useRouter();
  const username = useRef("");
  const age = useRef("");
  const currentInterest = useRef("");
  const category = useRef("");
  const gif = useRef("");
  return (
    <ScrollView
    style={{}}
    contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LargerHeader />
      <Text style={styles.header}>Profile Set Up</Text>
      <Text style={{ fontFamily: FONT.regular, marginBottom: 20, width: 350, color: COLORS.gray, textAlign: "center" }}>Please enter the following information to complete your profile.</Text>
      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="username"
          onChangeText={text => username.current = text}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <View>
        <Text style={styles.label}>Age</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="age"
          onChangeText={text => age.current = text}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <View>
        <Text style={styles.label}>Current Interest</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="currentInterest"
          onChangeText={text => currentInterest.current = text}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <View>
        <Text style={styles.label}>Category</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="category"
          onChangeText={text => category.current = text}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <View>
        <Text style={styles.label}>GIF</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="gif"
          onChangeText={text => gif.current = text}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
        <Text style={styles.button}>
          Create Account
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 40,
    marginBottom: 20,
  },
  label: {
    fontFamily: FONT.medium,
    color: COLORS.orange,
    marginBottom: 5,
  },
  header: {
    fontFamily: FONT.medium,
    fontSize: 24,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    fontFamily: FONT.medium,
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 5,
    color: COLORS.white,
  }
});

export default Setup;
