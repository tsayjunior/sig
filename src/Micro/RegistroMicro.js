import React, { useState } from "react";
import {
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const RegistroMicro = (props) => {
  const [state, setState] = useState({
    placa: "",
    modelo: "",
    cantAsien: "",
    linea: "",
    numInter: "",
    foto: "",
    fechAsign: "",
    fechBaja: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUSer = () => {
    if (state.name === "") {
      alert("provea un nombre");
    } else {
      try {
        // console.log(state)
        props.navigation.navigate("DrawerNavigation", {
          user: "1",
        });
      } catch (error) {
        console.log("error");
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="placa"
          onChangeText={(value) => handleChangeText("placa", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="modelo"
          onChangeText={(value) => handleChangeText("modelo", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Cantidad de asientos"
          onChangeText={(value) => handleChangeText("cantAsien", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="linea"
          onChangeText={(value) => handleChangeText("linea", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Numero interno"
          onChangeText={(value) => handleChangeText("numInter", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="foto"
          onChangeText={(value) => handleChangeText("foto", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha de asignacion"
          onChangeText={(value) => handleChangeText("fechAsign", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="fecha de baja"
          onChangeText={(value) => handleChangeText("fechBaja", value)}
        />
      </View>
      <View>
        <Button title="Registar Micro" onPress={() => saveNewUSer()} />
      </View>
      {/* <View>
                <Button title="lista de usuario" onPress={props.navigation.navigate('userList')}/>
            </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    bordeBottomColor: "#cccccc",
  },
  container: {
    flex: 1,
    padding: 35,
  },
});

export default RegistroMicro;
