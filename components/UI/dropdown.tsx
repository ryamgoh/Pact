import { Picker } from "@react-native-picker/picker";

export const SportsPicker = 
  <>
    <Picker.Item label="Basketball" value="Basketball" />
    <Picker.Item label="Badminton" value="Badminton" />
    <Picker.Item label="Squash" value="Squash" />        
  </>;

export const AcademicsPicker =
  <>
    <Picker.Item label="Math" value="Math" />
    <Picker.Item label="Science" value="Science" />
    <Picker.Item label="English" value="English" />
  </>;

export const InstrumentsPicker =
  <>
    <Picker.Item label="Piano" value="Piano" />
    <Picker.Item label="Guitar" value="Guitar" />
    <Picker.Item label="Violin" value="Violin" />
  </>;

export const EmptyPicker =
  <>
    <Picker.Item label="Select" value="" />
  </>;