// import React from 'react'
import React, { useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout";

const Login = (props) => {
  // const handleChangeText = (name, value) => {
  //     setState({...state, [name]: value});
  // };

  const iniciarSes = () => {
    // props.navigation.navigate("CreateUserScreen");
    props.navigation.navigate("DrawerNavigation");
  };
  const onPress = () => {
    props.navigation.navigate("CrearUsuario");
  };
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#546474"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#546474"
      />
      <TouchableOpacity
        style={styles.buttonSave}
        onPress={iniciarSes}
        // disabled  // para desabilitar boton
      >
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonUpdate} onPress={onPress}>
        <View>
          <Text style={styles.buttonText}>Registrarse</Text>
        </View>
      </TouchableOpacity>
    </Layout>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 15,
    // borderColor: '#10ac84',
    borderColor: "#cccccc",
    fontSize: 14,
    borderBottomWidth: 1,
    //  borderWidth: 1,
    height: 35,
    color: "#fff",
    padding: 4,
    textAlign: "center",
  },
  buttonSave: {
    // flex: 0.3,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonUpdate: {
    padding: 10,
    paddingBottom: 5,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  }
});
export default Login;
