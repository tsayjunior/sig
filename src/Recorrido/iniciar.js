import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Checkbox from "expo-checkbox";
import { AuthContext } from "../context/AuthContext";

const iniciar = ({ navigation }) => {
  const { ida, setGIda } = useContext(AuthContext);
  const [isIda, setIda] = useState(false);
  const [isvuelta, setVuelta] = useState(false);

  const interuptorIda = () => {
    if (isIda == true) {
      setIda(false);
    } else {
      setIda(true);
      setVuelta(false);
    }
  };
  const interuptorVuelta = () => {
    if (isvuelta == true) {
      setVuelta(false);
    } else {
      setVuelta(true);
      setIda(false);
    }
  };
  const navegarIdaMapa = () => {
    setGIda(true)
    navigation.navigate("Mapa");
  };
  const navegarVueltaMapa = () => {
    setGIda(false)
    navigation.navigate("Mapa");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar recorrido: </Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isIda}
          onValueChange={() => interuptorIda()}
        />
        <Text style={styles.paragraph}>De ida</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isvuelta}
          onValueChange={() => interuptorVuelta()}
          color={isvuelta ? "#4630EB" : undefined}
        />
        <Text style={styles.paragraph}>De vuelta</Text>
      </View>

      {isIda == true ? (
        <>
          <TouchableOpacity
            style={styles.button}
            //   onPress={() => {
            //     guardarProblema(Reporte),
            //     setReporte("")
            //   }}
            onPress={() => navegarIdaMapa()}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              Iniciar recorrido de ida
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
      {isvuelta == true ? (
        <>
          <TouchableOpacity
            style={styles.button}
            //   onPress={() => {
            //     guardarProblema(Reporte),
            //     setReporte("")
            //   }}
            onPress={() => navegarVueltaMapa()}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              Iniciar recorrido de vuelta
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  button: {
    backgroundColor: "#33d9b2",
    height: 38,
    width: 250,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default iniciar;
