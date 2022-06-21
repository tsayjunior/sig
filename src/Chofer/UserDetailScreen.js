import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

const UserDetailScreen = (props) => {

    const [state, setState] =useState({
      docId: "",
      name: "",
      fechaNac: "",
      sexo: "",
      phone: "",
      email: "",
      catLic: "",
    });

  // console.log(props.route.params.user);
  //   const aux=props.route.params.user

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
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
        <Button color="#19ac52" title="Actualizar chofer" onPress={() => alert("works")} />
      </View>
      <View>
        <Button color="red" title="Eliminar chofer" onPress={() => alert("works")} />
      </View>
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

export default UserDetailScreen;
