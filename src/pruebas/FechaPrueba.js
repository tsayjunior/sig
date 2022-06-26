import { View, Text, StyleSheet, Button, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "react-native-web";

const FechaPrueba = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("Date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + "| Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
    console.log(fDate + "(" + fTime + ")");
    console.log(fDate)
  };

  
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{text}</Text>
      <View style={{ margin: 20 }}>
        <Button title='DatePicker' onPress={()=> showMode('date')} />
      </View>
      {/* <View style={{ margin: 20 }}>
        <Button title='TimePicker' onPress={()=> showMode('time')} />
      </View> */}
      {/* <RNDateTimePicker mode="time" /> */}
        {show && (
            <DateTimePicker 
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
            />
        )}

      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FechaPrueba;
