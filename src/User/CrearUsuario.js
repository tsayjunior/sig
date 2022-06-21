import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, {useState} from "react";
import Layout from "../components/Layout";
import {saveUsers} from '../Api/ConsultasApi'

const CrearUsuario = ({navigation}) => {

  const [users, setUsers] = useState({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  });
  const handleChangeUser = (name, value) => {
    setUsers({ ...users, [name]: value });
  };
  const handleSubmit =()=>{
    saveUsers(users)
    navigation.navigate('RegistroChofer')
  }
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text)=> handleChangeUser('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#546474"
        onChangeText={(text)=> handleChangeUser('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#546474"
        onChangeText={(text)=> handleChangeUser('password', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        placeholderTextColor="#546474"
        onChangeText={(text)=> handleChangeUser('password_confirmation', text)}
      />
      <TouchableOpacity style={styles.buttonSave}
      onPress={handleSubmit}
        // disabled
        >
        <Text style={styles.buttonText}>Registrar</Text>
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
});
export default CrearUsuario;
