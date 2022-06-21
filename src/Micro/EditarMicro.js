import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

const EditarMicro = (props) => {

    const [state, setState] =useState({
        placa: "",
        modelo: "",
        cantAsien: "",
        linea: "",
        numInter: "",
        foto: "",
        fechAsign: "",
        fechBaja: "",
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
        <Button color="#19ac52" title="Actualizar micro" onPress={() => alert("works")} />
      </View>
      <View>
        <Button color="red" title="Eliminar micro" onPress={() => alert("works")} />
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

export default EditarMicro;
