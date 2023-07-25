import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthStore, appSignUp } from "../../store";
import { COLORS, FONT } from "../../constants";
import { Stack, useRouter } from "expo-router";

import { useRef } from "react";

export default function CreateAccount() {
  const router = useRouter();
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      {/* <Stack.Screen options={{ headerShown: true, title: "Create Account" }} /> */}
      <Text style={{ fontFamily: FONT.medium, fontSize: 24, marginBottom: 16, marginTop: 30, }}>
        Create Account
      </Text>
      <Text style={{ fontFamily: FONT.regular, marginBottom: 16 }}>
        Please enter your information below
      </Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          autoComplete="off"
          nativeID="email"
          onChangeText={(text) => {
            emailRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Username"
          autoComplete="off"
          nativeID="username"
          onChangeText={(text) => {
            usernameRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="First Name"
          autoComplete="off"
          nativeID="firstName"
          onChangeText={(text) => {
            firstNameRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          placeholder="Last Name"
          autoComplete="off"
          nativeID="lastName"
          onChangeText={(text) => {
            lastNameRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          autoComplete="off"
          secureTextEntry={true}
          nativeID="password"
          onChangeText={(text) => {
            passwordRef.current = text;
          }}
          style={styles.textInput}
        />
      </View>

      <Text
        style={styles.createButton}
        onPress={async () => {
          const resp = await appSignUp(
            emailRef.current,
            passwordRef.current,
            // firstNameRef.current + " " + lastNameRef.current
            usernameRef.current,
          );
          if (resp?.user) {
            router.replace("/frontProfileSetup");
          } else {
            console.log(resp.error);
            Alert.alert("Sign Up Error", resp.error?.message);
          }
        }}
      >
        Create Account
      </Text>

      <Text
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.back();
        }}
        style={styles.cancelButton}
      >
        Have an Account? <Text style={{textDecorationLine: "underline"}}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    color: COLORS.orange,
    fontFamily: FONT.medium,
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 15,
    height: 40,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  createButton: {
    fontFamily: FONT.medium,
    margin: 8,
    backgroundColor: COLORS.orange,
    padding: 8,
    borderRadius: 8,
    width: 250,
    textAlign: "center",
    color: COLORS.white,
  },
  cancelButton: {
    fontFamily: FONT.medium,
    margin: 8,
    padding: 8,
    borderRadius: 8,
    width: 250,
    textAlign: "center",
  }
});
