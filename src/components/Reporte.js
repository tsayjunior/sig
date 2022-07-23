import { StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
/* 11343562 */
export default Reporte = () => {
  const [Reporte, setReporte] = useState("");
  const {guardarProblema} = useContext(AuthContext)
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ justifyContent: "center", alignItems: "center",marginTop: 15}}>
        <Text style={{ fontWeight: "bold" }}>
          Este reporte se enviará al administrador de su linea
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe aquí ..."
          autoCapitalize="none"
          keyboardType="default"
          textContentType="none"
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          value={Reporte}
          onChangeText={(value) => setReporte(value)}
        />
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            guardarProblema(Reporte),
            setReporte("")
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
          Enviar reporte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F7FB",
    height: 88,
    width: 320,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
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
});
