import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native'

const UserItem = ({ user, handleDelete }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('CrearUsuario', {id:user.id})}//aparte de navegar a la otra pantalla, le paso un parametro, que es el id, para poder editar
      >
        <Text style={styles.itemTitle}>{user.name}</Text>
        <Text style={styles.itemTitle}>{user.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={()=>handleDelete(user.id)}
      >
        <Text style={{ color: "#fff" }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#fff",
  },
  itemDescripcion: {},
});

export default UserItem;
