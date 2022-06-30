import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Layout from "../components/Layout";
import { AuthContext } from "../context/AuthContext";
const backImage = require("../Image/tucan1.png");

export default function NewLogin({ navigation }) {
  /*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  const [ci, setCi] = useState();
  const [password, setPassword] = useState();
  const { isLoading, login } = useContext(AuthContext);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        {/* <Layout> */}
        <Spinner visible={isLoading} />
        <TextInput
          style={styles.input}
          placeholder="Carnet identidad"
          autoCapitalize="none"
          keyboardType="numeric"
          textContentType="none"
          autoFocus={true}
          value={ci}
          onChangeText={(value) => setCi(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {/*   </Layout> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login(ci, password);
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            {" "}
            Iniciar
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
            Aun no tienes una cuenta?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegistroChofer")}
          >
            <Text style={{ color: "#33d9b2", fontWeight: "600", fontSize: 14 }}>
              {" "}
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
 /*  container: {
    flex: 1,
    backgroundColor: "#fff",
  }, */
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#33d9b2",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#33d9b2",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
