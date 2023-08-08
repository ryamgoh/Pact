import { Button, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT } from "../../../constants";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Stack, useRouter } from "expo-router";
import { categories, interests, timeframes } from "../../../components/UI/dropdown";
import { enGB, registerTranslation } from 'react-native-paper-dates';
import { useCallback, useState } from "react";

import { DatePickerModal } from 'react-native-paper-dates';
import DropDownPicker from 'react-native-dropdown-picker';

export default function createGoal() {

  const [category, setCategory] = useState(undefined);
  const [categoryItems, setCategoryItems] = useState(categories);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const [interest, setInterest] = useState(undefined);
  const [interestItems, setInterestItems] = useState(interests);
  const [interestOpen, setInterestOpen] = useState(false);

  const [timeframe, setTimeframe] = useState(undefined);
  const [timeframeItems, setTimeframeItems] = useState(timeframes);
  const [timeframeOpen, setTimeframeOpen] = useState(false);

  const [motivations, setMotivations] = useState(undefined);

  const [open1, setOpen1] = useState(false);
  const [date1, setDate1] = useState(undefined);
  const [goal1, setGoal1] = useState(undefined);

  const [date2, setDate2] = useState(undefined);
  const [open2, setOpen2] = useState(false);
  const [goal2, setGoal2] = useState(undefined);

  const [date3, setDate3] = useState(undefined);
  const [open3, setOpen3] = useState(false);
  const [goal3, setGoal3] = useState(undefined);

  const onDismissSingle1 = useCallback(() => {
    setOpen1(false);
  }, [setOpen1]);

  const onConfirmSingle1 = useCallback(
    (params) => {
      setOpen1(false);
      setDate1(params.date);
    },
    [setOpen1, setDate1]
  );

  const onDismissSingle2 = useCallback(() => {
    setOpen2(false);
  }, [setOpen2]);

  const onConfirmSingle2 = useCallback(
    (params) => {
      setOpen2(false);
      setDate2(params.date);
    },
    [setOpen2, setDate2]
  );

  const onDismissSingle3 = useCallback(() => {
    setOpen1(false);
  }, [setOpen1]);

  const onConfirmSingle3 = useCallback(
    (params) => {
      setOpen3(false);
      setDate3(params.date);
    },
    [setOpen3, setDate3]
  );

  const router = useRouter();
  registerTranslation('en-GB', enGB);
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.header}>Create Your Goal</Text>
      <View style={styles.dropdown}>
        <Text style={styles.label}>Category of interest</Text>
        <DropDownPicker
          open={categoryOpen}
          items={categoryItems}
          setItems={setCategoryItems}
          value={category}
          setValue={setCategory}
          setOpen={setCategoryOpen}
        />
      </View>
      <View style={styles.dropdown}>
        <Text style={styles.label}>Current interest</Text>
        <DropDownPicker
          open={interestOpen}
          items={interestItems}
          setItems={setInterestItems}
          value={interest}
          setValue={setInterest}
          setOpen={setInterestOpen}
        />
      </View>
      <View style={styles.dropdown}>
        <Text style={styles.label}>Choose your timeframe</Text>
        <DropDownPicker 
          open={timeframeOpen}
          items={timeframeItems}
          setItems={setTimeframeItems}
          value={timeframe}
          setValue={setTimeframe}
          setOpen={setTimeframeOpen}
        />
      </View>
      <View style={styles.dropdown}>
        <Text style={styles.label}>What are your motivations?</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="motivations"
          onChangeText={(text) => setMotivations(text)}
          style={styles.textInput}
          autoComplete="off"        
        />
      </View>
      <Text style={styles.label}>Create your milestones</Text>
      <View style={styles.milestone}>
        <Text style={styles.label}>Milestone 1</Text>
        <Text>Enter Goal</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="goal"
          onChangeText={(text) => setGoal1(text)}
          style={styles.mtextInput}
          autoComplete="off"
        />
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open1}
          onDismiss={onDismissSingle1}
          date={date1}
          onConfirm={onConfirmSingle1}
        />
        <TouchableOpacity onPress={() => setOpen1(true)}>
          <Text style={styles.deadline}>{date1 === undefined ? "Pick Deadline" : "Change Deadline"}</Text>
          <Text>{date1 === undefined ? "" : date1.toString().slice(4, 15)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.milestone}>
        <Text style={styles.label}>Milestone 2</Text>
        <Text>Enter Goal</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="goal"
          onChangeText={(text) => setGoal2(text)}
          style={styles.mtextInput}
          autoComplete="off"
        />
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open2}
          onDismiss={onDismissSingle2}
          date={date2}
          onConfirm={onConfirmSingle2}
        />
        <TouchableOpacity onPress={() => setOpen2(true)}>
          <Text style={styles.deadline}>{date2 === undefined ? "Pick Deadline" : "Change Deadline"}</Text>
          <Text>{date2=== undefined ? "" : date2.toString().slice(4, 15)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.milestone}>
        <Text style={styles.label}>Milestone 3</Text>
        <Text>Enter Goal</Text>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="goal"
          onChangeText={(text) => setGoal3(text)}
          style={styles.mtextInput}
          autoComplete="off"
        />
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open3}
          onDismiss={onDismissSingle3}
          date={date3}
          onConfirm={onConfirmSingle3}
        />
        <TouchableOpacity onPress={() => setOpen3(true)}>
          <Text style={styles.deadline}>{date3 === undefined ? "Pick Deadline" : "Change Deadline"}</Text>
          <Text>{date3 === undefined ? "" : date3.toString().slice(4, 15)}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => console.log("TODO : ADD INTO DB")} style={styles.button}>
        <Text style={{ color: COLORS.white, fontFamily: FONT.bold, }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    color: COLORS.black,
    fontFamily: FONT.medium,
    fontSize: 30,
    marginBottom: 15,
    marginTop: 30,
  },
  button: {
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 5,
    width: 350,
    textAlign: "center",
  },
  dropdown: {
    width: 350,
    marginBottom: 40,
  },
  label: {
    fontFamily: FONT.medium,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 5,
    width: 350,
    border: "1px solid black",
  },
  milestone: {
    width: 350,
    border: "1px solid black",
    borderRadius: 10,
    padding: 15,
    marginBottom: 40,
  },
  mtextInput: {
    width: 300,
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 5,
    border: "1px solid black",
  },
  deadline: {
    fontFamily: FONT.medium,
    width: 300,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: COLORS.orange,
    color: COLORS.white,
    marginTop: 10,
    padding: 5,
  }
});