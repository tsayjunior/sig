// import React from 'react'
import React, { useContext, useState } from "react";
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
import { AuthContext } from "../context/AuthContext";

const Login = (props) => {
  // const handleChangeText = (name, value) => {
  //     setState({...state, [name]: value});
  // };
// console.log(props)
  const [ci, setCi] = useState();
  const [contraseña, setContraseña] = useState();
  const val = useContext(AuthContext);

  const iniciarSes = async() => {
    // props.navigation.navigate("CreateUserScreen");
    // alert('email')
    // props.navigation.navigate("DrawerNavigation");
    await fetch('http://ec2-15-228-12-142.sa-east-1.compute.amazonaws.com/api/login',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"ci": ci, "password": contraseña})
    }).then(res=>res.json())
    .then(resData=>{
      alert(resData.msg);
      // alert(resData.access_token);
      if (resData.msg==="¡Usuario logueado exitosamente!") {
        props.navigation.navigate("DrawerNavigation");
      }
      console.log(resData);
    })
    // console.log('acabo')
  };
  const onPress = () => {
    props.navigation.navigate("RegistroChofer");
  };
  return (
    <Layout>
      <Text>{val}</Text>
      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        placeholderTextColor="#546474"
        // value={{password}}
        onChangeText={(value)=>setCi(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#546474"
        onChangeText={(value)=>setContraseña(value)}
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
