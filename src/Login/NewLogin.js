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
  Modal,
  Pressable,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Layout from "../components/Layout";
import { AuthContext } from "../context/AuthContext";
import DrawerNavigation from "../Navigation/DrawerNavigation";
const backImage = require("../Image/tucan1.png");

export default function NewLogin({ navigation }) {
  /*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  const [ci, setCi] = useState();

  const [password, setPassword] = useState();
  const { isLoading, login, modalLogin, setModalLogin } =
    useContext(AuthContext);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Modal
        visible={modalLogin}
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
              <Text style={styles.text}>Usuario o contraseña erronea, por favor vuelva a ingresarlo</Text>
            </View>
            {/* <Button title="Aceptar" color="#C90B08" onPress={logout} /> */}
            <Pressable
              onPress={() => setModalLogin(false)}
              // onPress={logout}

              style={styles.warning_button}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        {/* <Layout> */}
        {/*  <Spinner visible={isLoading} /> */}
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
        {/* <View
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
        </View> */}
        <TouchableOpacity
          style={styles.Info}
          onPress={() => navigation.navigate("Inicio")}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#33d9b2",
              fontSize: 15,
              width: "150%",
              textAlign: "center",
            }}
          >
            {`¿Cómo Afiliarme?`}
          </Text>
        </TouchableOpacity>
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
    marginTop: 25,
  },
  Info: {
    height: 48,
    width: 98,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    alignSelf: "center",
    flexDirection: "row",
  },
  text: {
    color: "#000",
    fontSize: 20,
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
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
    backgroundColor: "#33d9b2",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#33d9b2",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
