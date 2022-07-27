import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
/* 11343562 */
export default Reporte = () => {
  const [Reporte, setReporte] = useState("");
  const { guardarProblema, ErrorReporte } = useContext(AuthContext);

  const [modal, setModal] = useState(false);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Modal
        visible={modal}
        transparent
        animationType="fade"
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_tittle}>
              <Text style={styles.text}>Aviso !!!</Text>
            </View>
            <View style={styles.warning_body}>
              {ErrorReporte == true ? (
                <>
                
                <Text style={styles.text}>
                    El reporte no se envió correctamente, por favor vuelva a intentarlo
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.text}>
                    El reporte se envió correctamente
                  </Text>
                </>
              )}
            </View>
            {/* <Button title="Aceptar" color="#C90B08" onPress={logout} /> */}
            <Pressable
              onPress={() => setModal(false)}
              // onPress={logout}

              style={styles.warning_button}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
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
            guardarProblema(Reporte), setReporte(""), setModal(true);
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
  text: {
    color: "#000",
    fontSize: 20,
    margin: 10,
    alignItems: "center",
    // justifyContent: "center",
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_tittle: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "red",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
