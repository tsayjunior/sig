// import React from 'react'
import React, { useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from "react-native";

const Login = (props) => {
  // const handleChangeText = (name, value) => {
  //     setState({...state, [name]: value});
  // };

  const iniciarSes = () => {
    // props.navigation.navigate("CreateUserScreen");
    props.navigation.navigate("RegistroChofer");
  };
  const onPress = () => {
    props.navigation.navigate("CrearUsuario");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Usuario"
          // onChangeText={(value)=> handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Contraseña"
          // onChangeText={(value)=> handleChangeText("email", value)}
        />
      </View>
      <View>
        <Button title="Iniciar sesion" onPress={() => iniciarSes()} />
      </View>
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={onPress}>
          <View>
            <Text style={styles.letra}>Aun no tiene una cuenta,registrese</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputGroup: {
    // flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    bordeBottomColor: "#cccccc",
  },
  container: {
    // flex: 0.3,
    padding: 35,
  },
  letra: {
    color: "red",
    fontWeight: "bold",
  },
});
export default Login;
