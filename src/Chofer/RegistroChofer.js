import React, { useState } from "react";
import {
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Layout from "../components/Layout";

const RegistroChofer = (props) => {
  const [state, setState] = useState({
    docId: "",
    name: "",
    fechaNac: "",
    sexo: "",
    phone: "",
    email: "",
    catLic: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

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
    })
  };

  return (
    <Layout >
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Documento de identidad"
          onChangeText={(value) => handleChangeText("docId", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha de nacimiento"
          onChangeText={(value) => handleChangeText("fechaNac", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Sexo"
          onChangeText={(value) => handleChangeText("sexo", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Telefono"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Categoria licencia"
          onChangeText={(value) => handleChangeText("catLic", value)}
        />
      </View>
      <View>
        <Button title="Registar chofer" onPress={() => saveNewUSer()} />
      </View>
      {/* <View>
                <Button title="lista de usuario" onPress={props.navigation.navigate('userList')}/>
            </View> */}
    </Layout>
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

export default RegistroChofer;
