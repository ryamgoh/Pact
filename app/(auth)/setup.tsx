import {
  AcademicsPicker,
  EmptyPicker,
  InstrumentsPicker,
  SportsPicker,
} from "../../components/UI/dropdown";
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
import { useRef, useState } from "react";

import { LargerHeader } from "../../components/UI/logos";
import { Picker } from "@react-native-picker/picker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { invalidSetupDetails } from "../../components/UI/toast";
import { setupDetails } from "../../store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Setup = () => {
  const router = useRouter();
  const username = useRef("");
  const age = useRef("");
  const [category, setCategory] = useState("");
  const [currentInterest, setCurrentInterest] = useState("");
  const gif = useRef("");
  const bio = useRef("");

  const createAccount = async () => {
    try {
      const data = {
        age: age.current,
        username: username.current,
        category: category,
        interest: currentInterest,
        gif: gif.current,
        bio: bio.current,
      };
      const resp = await setupDetails(data);
      if (resp) {
        router.replace("/(tabs)/home");
      } else {
        invalidSetupDetails();
      }
    } catch (err) {
      invalidSetupDetails();
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ paddingVertical: 50 }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LargerHeader />
      <Text style={styles.header}>Profile Set Up</Text>
      <Text
        style={{
          fontFamily: FONT.regular,
          marginBottom: 20,
          width: 350,
          color: COLORS.gray,
          textAlign: "center",
        }}
      >
        Please enter the following information to complete your profile.
      </Text>
      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="username"
          onChangeText={(text) => (username.current = text)}
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
          onChangeText={(text) => (age.current = text)}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <View>
        <Text style={styles.label}>Bio</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="bio"
          onChangeText={(text) => (bio.current = text)}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <View>
        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          style={styles.textInput}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Sports" value="Sports" />
          <Picker.Item label="Academics" value="Academics" />
          <Picker.Item label="Instruments" value="Instruments" />
        </Picker>
      </View>
      <View>
        <Text style={styles.label}>Current Interest</Text>
        <Picker
          selectedValue={currentInterest}
          onValueChange={(itemValue, itemIndex) =>
            setCurrentInterest(itemValue)
          }
          style={styles.textInput}
        >
          {category === "Sports"
            ? SportsPicker
            : category === "Academics"
            ? AcademicsPicker
            : category === "Instruments"
            ? InstrumentsPicker
            : EmptyPicker}
        </Picker>
      </View>
      <View>
        <Text style={styles.label}>GIF that best describes you!</Text>
        {/* This will be used as the user's swipe page */}
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="gif"
          onChangeText={(text) => (gif.current = text)}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      <TouchableOpacity onPress={createAccount}>
        <Text style={styles.button}>Set up your details!</Text>
      </TouchableOpacity>
      <Toast />
    </KeyboardAwareScrollView>
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
    backgroundColor: COLORS.white,
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
  },
});

export default Setup;
