import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Text
  // Dimensions
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../Config";

// const screenWidth= Dimensions.get("window").width;
const PerfilChofer = ({ navigation }) => {
  const [state, setState] = useState({
    id: "",
    ci: "",
    password: "",
    nombre: "",
    apellido: "",
    sexo: "",
    fecha_nac: "",
    telefono: "",
    email: "",
    foto: "",
    tipo: "",
  });
  const { userInfo } = useContext(AuthContext);
  // console.log(props.route.params.user);
  //   const aux=props.route.params.user

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: "Usuario " + userInfo.data.nombre }); //le cambia el nombre a la barra de arriba de navegacion
    
    (async () => {
      console.log("++++++++++++++++++++++++++");
      console.log(userInfo);
      setState({
        id: userInfo.data.id + "",
        ci: userInfo.data.ci,
        password: userInfo.data.password,
        nombre: userInfo.data.nombre,
        apellido: userInfo.data.apellido,
        sexo: userInfo.data.sexo,
        fecha_nac: userInfo.data.fecha_nac,
        telefono: userInfo.data.telefono,
        email: userInfo.data.email,
        foto: userInfo.data.foto,
        tipo: userInfo.data.tipo,
      });
      
    })();

    console.log("----*-*-*-**-*-*---*-");
    console.log("aca estate");
    console.log(state);
  }, []);

  return (
    <ScrollView vertical style={styles.container}>
      
      {/* {console.log(`${BASE_URL}/`+ state.foto)} */}
      {state.foto ? (
        
        <Image
          style={{ width: "100%", height: 250 }}
          source={{
            // uri: "https://reactnative.dev/img/tiny_logo.png",
            uri: 'http://ec2-18-228-190-183.sa-east-1.compute.amazonaws.com/' + state.foto,
          }}
        />
      ) : (
        <Image
          style={{ width: "100%", height: 250 }}
          source={require("../../assets/usuario.png")}
        />
      )}
      <View style={styles.viewContainer}>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Documento de identidad</Text>
      </View>
      <Text style={styles.descripcion}>{state.ci}</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Nombre</Text>
      </View>
      <Text style={styles.descripcion}>{state.nombre}</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Apellido</Text>
      </View>
      <Text style={styles.descripcion}>{state.apellido}</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Sexo</Text>
      </View>
      
      {state.sexo=="M"? (<Text style={styles.descripcion}>Masculino</Text>):
      (<Text style={styles.descripcion}>Femenino</Text>)}
      
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Fecha de nacimiento</Text>
      </View>
      <Text style={styles.descripcion}>{state.fecha_nac}</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Telefono</Text>
      </View>
      <Text style={styles.descripcion}>{state.telefono}</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}>Correo electrónico</Text>
      </View>
      <Text style={styles.descripcion}>{state.email}</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.titulo}> </Text>
      </View>
      </View>
      
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    bordeBottomColor: "#cccccc",
  },
  container: {
    flex: 1,
    padding: 35,
  },
  viewContainer:{
    padding:15
  },
  titulo:{
    fontSize: 20,
    fontWeight: "bold"
  },
  descripcion:{
    marginTop: 5,
    color: "grey"
  }
});

export default PerfilChofer;
