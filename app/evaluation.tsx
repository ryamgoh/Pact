import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { container, headings } from "../styles/styled";
import { COLORS } from "../constants";
// import { Pressable } from "react-native-gesture-handler";

const EvaluationPage = () => {
  return (
    <ScrollView
      style={container.MainScrollableCanvas}
      contentContainerStyle={[
        { alignItems: "center", gap: 10, paddingBottom: 50 },
      ]}
    >
      <Text style={headings.title}>Evaluate your Pact</Text>
      <Text style={headings.subtitle}>View the progress</Text>
      <View style={styles.storyCard}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/images/PactHeader.png")}
            style={{
              borderWidth: 1,
              width: "40%",
              height: "70%",
              position: "absolute",
              resizeMode: "contain",
              backgroundColor: COLORS.white,
            }}
          />
          <Image
            source={require("../assets/images/PactHeader.png")}
            style={{
              borderWidth: 1,
              width: "40%",
              height: "70%",
              position: "absolute",
              resizeMode: "contain",
              right: 0,
              backgroundColor: COLORS.white,
            }}
          />
          <Image
            source={require("../assets/images/PactHeader.png")}
            style={{
              borderWidth: 1,
              width: "50%",
              height: "100%",
              position: "absolute",
              resizeMode: "contain",
              margin: "auto",
              left: "25%",
              // left: 0,
              // right: 0,
              // For some reason, IOS is being a bitch and not centering the image
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
              backgroundColor: "white",
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={headings.subtitle}>Make your verdict</Text>
      <Verdict question={`Are you satisfied with xxx’s progress?`} />
      <Verdict question={`Has xxx put  in considerable effort?`} />
      <Verdict question={`Do you think xxx can reach their goal?`} />
      <ExtraComments />
      <TouchableOpacity style={{ borderRadius: 20, overflow: "hidden" }}>
        <Text
          style={{
            backgroundColor: COLORS.primary,
            color: COLORS.white,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EvaluationPage;

interface VerdictInterface {
  question?: string;
}

function Verdict({ question }: VerdictInterface) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text>{question}</Text>
      <TextInput placeholder="Yes/No" placeholderTextColor={"black"} />
    </View>
  );
}

function ExtraComments({ question }: VerdictInterface) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <TextInput
        placeholder="Give your comments here"
        placeholderTextColor={"white"}
        style={{
          padding: 10,
          height: 200,
          width: "100%",
          borderRadius: 10,
          backgroundColor: COLORS.gray2,
        }}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  storyCard: {
    width: "100%",
    height: 300,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    // borderColor: COLORS.black,
    // borderWidth: 1,
  },
});
