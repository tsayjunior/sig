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
        name: '',
        email: '',
        phone: ''
    });

  console.log(props.route.params.user);
    const aux=props.route.params.user

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name user"
        //   value='aux'
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email user"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone user"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View>
        <Button color="#19ac52" title="Actualizar usuario" onPress={() => alert("works")} />
      </View>
      <View>
        <Button color="red" title="Eliminar usuario" onPress={() => alert("works")} />
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
