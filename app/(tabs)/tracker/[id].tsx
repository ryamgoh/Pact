import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import { COLORS } from "../../../constants";
import React, { useEffect, useState } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";
import SwipeCardBack from "../../../components/Swiping/SwipeCardBack";
import FlipCard from "react-native-flip-card";

const NewsDetailsPage = () => {
  const { id } = useSearchParams();
  const params = useLocalSearchParams();
  const { pactName } = params;

  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   getDoc(doc(database, `matches/${id}`)).then((doc) => {
  //     // console.log(doc.data());
  //     setUserData(doc.data().users);
  //     console.log(userData);
  //   });
  // }, [id]);

  useEffect(() => {
    getDoc(doc(database, `matches/${id}`))
      .then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data && data.users) {
            setUserData(data.users);
          } else {
            console.error(
              "Invalid data structure: 'users' property not found."
            );
          }
        } else {
        }
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      });
  }, [id]);

  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 40 }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `View Your Card with ${pactName}`,
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTintColor: `#F96D5A`,
        }}
      />
      <View>
        <FlipCard
          friction={10}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          clickable={true}
        >
          {Object.entries(userData).map(
            ([key, value]) => (
              <SwipeCardBack key={key} data={value} />
            ) // Added parentheses and key prop
          )}
        </FlipCard>
      </View>
    </View>
  );
};

export default NewsDetailsPage;
