import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { AuthStore, appSignIn } from "../../store";
import { Stack, useRouter } from "expo-router";
import { useRef } from "react";
import { COLORS } from "../../constants";
import { LargeLogo } from "../../components/UI/logos";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function LogIn() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <LinearGradient
      colors={["pink", "orange"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />

        <LargeLogo />
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="email"
            autoCapitalize="none"
            nativeID="email"
            onChangeText={(text) => {
              emailRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            nativeID="password"
            onChangeText={(text) => {
              passwordRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={async () => {
            const resp = await appSignIn(emailRef.current, passwordRef.current);
            if (resp?.user) {
              router.replace("/(tabs)/home");
            } else {
              console.log(resp.error);
              Alert.alert("Login Error", resp.error?.message);
            }
          }}
        >
          <Text style={{ color: COLORS.white, textAlign: "center" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => {
            // AuthStore.update((s) => {
            //   s.isLoggedIn = true;
            // });
            router.push("/create-account");
          }}
        >
          <Text style={{ color: COLORS.white, textAlign: "center" }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginBottom: 4,
    color: "#455fff",
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#455fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  buttonPress: {
    justifyContent: "center",
    width: 150,
    height: 40,
    marginTop: 8,
    borderRadius: 10,
    overflow: "hidden", // For ios, need to set overflow hidden, for borderRadius to work
    backgroundColor: COLORS.primary,
  },
});
