import React, { useState } from "react";
import {
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
Text
} from "react-native";
import Layout from "../components/Layout";
import { saveUsers, getUser, updateUser } from "../Api/ApiMicro";


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
  const [editing, setEditing] = useState(false); //creo este estado, para que en caso tenga que editar, se cambie a true, editing

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
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="placa"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("placa", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="modelo"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("modelo", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad de asientos"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("lastname", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Linea"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("date", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Numero Interno"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("sex", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="foto"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("phone", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de asignacion"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("mail", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de baja"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("category_licencia_id", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      
      {!editing ? (
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={saveNewUSer}
          // disabled
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={saveNewUSer}
          // disabled
        >
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      )}
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
  buttonUpdate:{
    padding:10,
    paddingBottom: 5,
    borderRadius: 5,
    marginBottom:3,
    backgroundColor: "#e58e26",
    width: "90%"
  }
});

export default RegistroMicro;
