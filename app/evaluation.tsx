import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { container, headings } from "../styles/styled";

const EvaluationPage = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        container.MainScrollableCanvas,
        { alignItems: "center" },
      ]}
    >
      <Text style={headings.title}>Evaluate your Pact</Text>
    </ScrollView>
  );
};

export default EvaluationPage;

const styles = StyleSheet.create({});
