import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FONT, COLORS, SIZES } from "../../../constants";
import Styled from "../../../styles/container";
import TrackerCard from "../../../components/Tracker/TrackerCard";

const TrackerPage = () => (
  <ScrollView
    style={Styled.MainScrollableCanvas}
    contentContainerStyle={{ alignItems: "center", gap: 20 }}
  >
    <Text
      style={{
        fontFamily: FONT.medium,
        fontSize: 24,
        fontWeight: "bold",
      }}
    >
      Track your Goals
    </Text>
    <TrackerCard
      profilePhoto={"https://i.imgur.com/1O1moj9.png"}
      pactName={"Shishir Bychapur"}
      milestoneCount={1}
      category={"Sports"}
      subcategory={"Basketball"}
    />
    <TrackerCard
      profilePhoto={"https://i.imgur.com/1O1moj9.png"}
      pactName={"Shishir Bychapur"}
      milestoneCount={2}
      category={"Sports"}
      subcategory={"Basketball"}
    />
    <TrackerCard
      profilePhoto={"https://i.imgur.com/1O1moj9.png"}
      pactName={"Shishir Bychapur"}
      milestoneCount={3}
      category={"Sports"}
      subcategory={"Basketball"}
    />
  </ScrollView>
);

export default TrackerPage;
