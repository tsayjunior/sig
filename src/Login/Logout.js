import { View, Text, Button, StyleSheet, Modal, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "../components/Layout";
import Spinner from "react-native-loading-spinner-overlay/lib";

const Logout = ({ navigation }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);

  const [modal, setModal] = useState(true);
  // console.log(userInfo)

  return (
    <Layout>
      
      {/* {setModal(false)}
      {setModal(true)} */}
      <Modal
        visible={modal}
        transparent
        animationType="fade"
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          
          <View style={styles.warning_modal}>
            <View style={styles.warning_tittle}>
              <Text style={styles.text}>Alerta!!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                Usted esta saliendo de la aplicación
              </Text>
            </View>
            <Button title="Aceptar" color="#C90B08" onPress={logout} />
            {/* <Button
              title="Cancelar"
              color="#073992"
              onPress={() =>navigation.navigate("Tarjeta")}
            /> */}
            {/* <Pressable
              onPress={() => setModal(false)}
              // onPress={logout}

              style={styles.warning_button}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>presione para continuar</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Spinner visible={isLoading} />
      <View style={styles.container}>
       {/*  <Text style={styles.welcome}>
          Presione si desea cerrar sesion {userInfo.data.name}
        </Text> */}
        {/* <Button title="cerrar sesion" color="red" onPress={logout} /> */}
       {/*  <Button
          title="cerrar sesion"
          color="red"
          onPress={() => setModal(true)}
        /> */}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
    color: "black",
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

export default Logout;
