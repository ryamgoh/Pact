import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FONT, COLORS, SIZES } from "../../../constants";
import Styled from "../../../styles/container";
import TrackerCard from "../../../components/Tracker/TrackerCard";
import { onSnapshot, collection } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";

const TrackerPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const colRef = collection(database, "userdetails");
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      setData(newData);
    });

    // The returned function will be called when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect runs only once

  // console.log(data);

  return (
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
      {data.map((item, index) => (
        <TrackerCard
          key={index}
          profilePhoto={item.profilePic}
          pactName={"placeholdername"} // Just get the data from matches collection
          milestoneCount={2} // Will need more time to figure out how to get this
          category={item.category}
          subcategory={item.interest}
        />
      ))}
    </ScrollView>
  );
};

export default TrackerPage;
