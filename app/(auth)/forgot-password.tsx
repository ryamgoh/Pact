import { COLORS, FONT } from "../../constants";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { LargerHeader } from "../../components/UI/logos";
import Toast from "react-native-toast-message";
import { TouchableOpacity } from "react-native-gesture-handler";
import { invalidEmailResetPassword } from "../../components/UI/toast";
import { passwordResetEmail } from "../../store";
import { useRef } from "react";

export default function forgotPassword() {
  const router = useRouter();
  const emailRef = useRef("");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <LargerHeader />
      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.header}>Forgot Your Password?</Text>
      </TouchableOpacity>
      <Text style={styles.tagline}>Don't worry! Just enter your email address below to reset your password!</Text>
      <View>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="forgotemail"
          onChangeText={text => emailRef.current = text}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <TouchableOpacity onPress={async () => {
        const resp = await passwordResetEmail(emailRef.current);
        if (resp) {
          router.replace("/success-reset");
        } else {
          invalidEmailResetPassword();
        }
      }}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.redirect}>
          Remembered you password?  
          <Text style={{textDecorationLine: "underline", color: COLORS.black, fontFamily: FONT.medium}}>
            Login In 
          </Text>
        </Text>
      </TouchableOpacity>
      <Toast />
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
  },
  tagline: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: 16,
    width: 350,
    marginBottom: 30,
  }, 
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    width: 350,
    height: 60,
    borderRadius: 5,
    fontFamily: FONT.regular,
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    fontFamily: FONT.medium,
    color: COLORS.white,
    fontSize: 22,
    width: 350,
    textAlign: "center",
    height: 40,
    justifyContent: "center",
  },
  redirect: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: 16,
    marginTop: 20,
  }
});