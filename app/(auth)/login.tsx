import { AuthStore, appSignIn } from "../../store";
import { COLORS, FONT } from "../../constants";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { LargerHeader } from "../../components/UI/logos";
import Toast from 'react-native-toast-message';
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginErrorToast } from "../../components/UI/toast";
import { useRef } from "react";

export default function LogIn() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
  <SafeAreaView style={styles.container}>
    <Stack.Screen options={{ headerShown: false }} />
    <LargerHeader />
    <Text style={{ color: COLORS.black, fontSize: 26, marginBottom: 8, fontFamily: FONT.medium, marginTop: 20, }}>
      Welcome Back!
    </Text>
    <Text style={{ color: COLORS.gray, fontSize: 14, marginBottom: 28, fontFamily: FONT.regular }}>
      Please login with your credentials below
    </Text>
    <View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        nativeID="email"
        onChangeText={(text) => {
          emailRef.current = text;
        }}
        style={styles.textInput}
        autoComplete="off"
      />
    </View>
    <View>
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        nativeID="password"
        autoComplete="off"
        onChangeText={(text) => {
        passwordRef.current = text;
      }}
        style={styles.textInput}
      />
    </View>
    <TouchableOpacity
      style={styles.loginButton}
      onPress={async () => {
        const resp = await appSignIn(emailRef.current, passwordRef.current);
          if (resp?.user) {
            router.replace("/(tabs)/home");
          } else {
            loginErrorToast();
          }
        }}
    >
      <Text style={{ color: COLORS.white, textAlign: "center", fontFamily: FONT.medium }}>
        Login
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.createButton}
      onPress={() => {
        router.push("/create-account");
      }}
    >
      <Text style={{ color: COLORS.orange, textAlign: "center", fontFamily: FONT.medium, }}>
        Create Account
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => router.push("/forgot-password")}
    >
      <Text style={{ color: COLORS.black, textAlign: "center", fontFamily: FONT.regular, marginTop: 30 }}>
        Forgot Password?
      </Text>
    </TouchableOpacity>
    <Toast />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  label: {
    marginBottom: 4,
    color: COLORS.orange,
    fontFamily: FONT.medium,
    fontSize: 17,
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: COLORS.black,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 10,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  loginButton: {
    justifyContent: "center",
    width: 250,
    height: 40,
    marginTop: 8,
    borderRadius: 10,
    overflow: "hidden", // For ios, need to set overflow hidden, for borderRadius to work
    backgroundColor: COLORS.orange,
  },
  createButton: {
    justifyContent: "center",
    width: 250,
    height: 40,
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.orange,
    overflow: "hidden", // For ios, need to set overflow hidden, for borderRadius to work
    backgroundColor: "transparent",
  }
});
