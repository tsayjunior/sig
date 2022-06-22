import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { saveUsers, getUser, updateUser } from "../Api/ConsultasApi";

const CrearUsuario = ({ navigation, route }) => {
  //con route, recibo el parametro que me mandan, y lo mu

  // console.log(route.params)//aca muestro el parametro que me manadn, el cual es un objeto con un id

  const [users, setUsers] = useState({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  });

  const [editing, setEditing] = useState(false); //creo este estado, para que en caso tenga que editar, se cambie a true, editing

  const handleChangeUser = (name, value) => {
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = async () => {
    //segun se actualize o se cree, realiza una funcion
    try {
      if (!editing) {
        await saveUsers(users);
        navigation.navigate("RegistroChofer");
      } else {
        await updateUser(route.params.id, users);
        navigation.navigate("Usuarios");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      //si le mando un id, es por que quiero editar, y no crear
      navigation.setOptions({ headerTitle: "Actualizar Usuario" }); //le cambia el nombre a la barra de arriba de navegacion
      setEditing(true);
      (async () => {
        //recibe el objeto del usuario, sacandolo de la api
        const users = await getUser(route.params.id);
        // console.log(user);
        setUsers({
          email: users.email,
          name: users.name,
          password: "********",
          password_confirmation: "********",
        });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeUser("email", text)}
        value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#546474"
        onChangeText={(text) => handleChangeUser("name", text)}
        value={users.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#546474"
        onChangeText={(text) => handleChangeUser("password", text)}
        value={users.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        placeholderTextColor="#546474"
        onChangeText={(text) => handleChangeUser("password_confirmation", text)}
        value={users.password_confirmation}
      />

      {!editing ? (
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handleSubmit}
          // disabled
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={handleSubmit}
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
export default CrearUsuario;
