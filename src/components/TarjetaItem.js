import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const TarjetaItem = ({user, handleDelete }) => {
  const navigation = useNavigation();
  const {setGIda,setHoraLlegada } = useContext(AuthContext);

  const navegarMapa = () => {
    if(user.tipo_recorrido==false){
      setGIda(false)
    }else{
      setGIda(true)
    }
    setHoraLlegada(user.hora_llegada)
    navigation.navigate("Mapa");
  };
  console.log("Desde el recorrido-> " + user.tipo_recorrido);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.aux1}>
        <TouchableOpacity
        // onPress={()=>navigation.navigate('RegistroChofer', {id:user.id})}//aparte de navegar a la otra pantalla, le paso un parametro, que es el id, para poder editar
        >
          <View style={styles.itemContainer2}>
            <Text style={styles.titulo}>Nro. de recorrido: </Text>
            <Text style={styles.itemTitle}>{user.nro_recorrido}</Text>
          </View>
          <Text style={styles.titulo}>Partida: </Text>
          <Text style={styles.itemTitle}>{user.hora_partida}</Text>
          <Text style={styles.titulo}>Llegada: </Text>
          <Text style={styles.itemTitle}>{user.hora_llegada}</Text>
          <Text style={styles.titulo}>Trayectoria: </Text>
          {user.tipo_recorrido === null ? (
            <>
              <Text style={styles.itemTitle}>Ruta de Partida</Text>
            </>
          ) : ( user.tipo_recorrido==false ? (
            <>
              <Text style={styles.itemTitle}>Ruta de Partida</Text>
            </>
            ):(
              <Text style={styles.itemTitle}>Ruta de Vuelta</Text>
            )
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.aux2}>
        <TouchableOpacity
          style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }} 
          onPress={() => navegarMapa()}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Iniciar recorido</Text>
        </TouchableOpacity>
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
    flex: 1,
  },
  itemTitle: {
    color: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#bbb",
  },
  itemContainer2: {
    flex: 1,
  },
  aux1: {
    flex: 2,
  },
  aux2: {
    flex: 1,
  },
});

export default TarjetaItem;
