import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native'

const ChoferItem = ({ user, handleDelete }) => {

  const navigation = useNavigation();
  // const prue()={

  // }
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('RegistroChofer', {id:user.id})}//aparte de navegar a la otra pantalla, le paso un parametro, que es el id, para poder editar
      >
        <Text style={styles.itemTitle}>{user.ci}</Text>
        <Text style={styles.itemTitle}>{user.names}</Text>
        <Text style={styles.itemTitle}>{user.lastname}</Text>
        <Text style={styles.itemTitle}>{user.date}</Text>
        <Text style={styles.itemTitle}>{user.sex}</Text>
        <Text style={styles.itemTitle}>{user.phone}</Text>
        <Text style={styles.itemTitle}>{user.mail}</Text>
        <Text style={styles.itemTitle}>{user.category_id}</Text>
        <Text style={styles.itemTitle}>{user.user_id}</Text>
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

export default ChoferItem;
