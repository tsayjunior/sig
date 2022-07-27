import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MicroItem = ({ user, handleDelete }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: 200, width: "100%" }}
          source={{
            // uri: "https://reactnative.dev/img/tiny_logo.png",
            uri:
              "http://ec2-18-228-190-183.sa-east-1.compute.amazonaws.com/" +
              user.micro.permiso_linea.linea.foto,
          }}
          // source={require("../../assets/micro.jpg")}
        />
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity
        // onPress={()=>navigation.navigate('RegistroMicro', {id:user.id})}//aparte de navegar a la otra pantalla, le paso un parametro, que es el id, para poder editar
        >
          <Text style={styles.titulo}>Placa: </Text>
          <Text style={styles.itemTitle}>     {user.micro.placa}</Text>
          <Text style={styles.titulo}>Modelo: </Text>
          <Text style={styles.itemTitle}>     {user.micro.modelo}</Text>
          <Text style={styles.titulo}>Linea: </Text>
          <Text style={styles.itemTitle}>     {user.micro.permiso_linea.linea.nrolinea}</Text>
          <Text style={styles.titulo}>Asientos: </Text>
          <Text style={styles.itemTitle}>     {user.micro.cant_asiento}</Text>
          <Text style={styles.titulo}>Nº Interno: </Text>
          <Text style={styles.itemTitle}>     {user.micro.nro_interno}</Text>
          <Text style={styles.titulo}>Asignación: </Text>
          <Text style={styles.itemTitle}>      {user.fecha_asig}</Text>
          {user.fecha_baja == null ? (
            <>
              <Text style={styles.titulo}>Micro en uso</Text>
            </>
          ) : (
            <>
              <Text style={styles.titulo}>Baja: </Text>
              <Text style={styles.itemTitle}>     {user.fecha_baja}</Text>
            </>
          )}

          {/* <Text style={styles.itemTitle}>{user.conductor_id}</Text> */}
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
          onPress={() => handleDelete(user.id)}
        >
          <Text style={{ color: "#fff" }}>Eliminar</Text>
        </TouchableOpacity> */}
      </View>
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
  container: {
    backgroundColor: "#333333",
    paddingBottom: 50,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#bbb",
  },
});

export default MicroItem;
