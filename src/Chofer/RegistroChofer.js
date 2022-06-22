import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Layout from "../components/Layout";
import { saveUsers, getUser, updateUser } from "../Api/ApiChofer";

const RegistroChofer = ({ navigation, route }) => {
  const [state, setState] = useState({
    ci: "",
    names: "",
    lastname: "",
    date: "",
    sex: "",
    phone: "",
    mail: "",
    category_licencia_id: "",
    user_id: "",
  });

  const [editing, setEditing] = useState(false); //creo este estado, para que en caso tenga que editar, se cambie a true, editing

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    //segun se actualize o se cree, realiza una funcion
    try {
      if (!editing) {
        await saveUsers(state);
        console.log(state)
        navigation.navigate("RegistroMicro");
      } else {
        await updateUser(route.params.id, state);
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
        const state = await getUser(route.params.id);
        // console.log(user);
        setState({
          email: state.email,
          name: state.name,
          password: "********",
          password_confirmation: "********",
        });
      })();
    }
  }, []);

  const saveNewUSer = () => {
    // if (state.name === "") {
    //   alert("provea un nombre");
    // } else {
    //   try {
    //     // console.log(state)
    //     props.navigation.navigate("RegistroMicro", {
    //       user: "1",
    //     });
    //   } catch (error) {
    //     console.log("error");
    //   }
    // }
    props.navigation.navigate("RegistroMicro", {
      user: "1",
    });
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("ci", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("names", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("lastname", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("date", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("sex", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("phone", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("mail", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria licencia"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("category_licencia_id", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario id"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("user_id", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
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
      {/* <View>
        <Button title="Registar chofer" onPress={() => saveNewUSer()} />
      </View> */}
      {/* <View>
                <Button title="lista de usuario" onPress={props.navigation.navigate('userList')}/>
            </View> */}
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

export default RegistroChofer;
