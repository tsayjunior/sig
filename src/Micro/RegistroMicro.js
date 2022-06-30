import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Layout from "../components/Layout";
import { saveUsers, getUser, updateUser } from "../Api/ApiMicro";
import { AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker"; //fecha

const RegistroMicro = ({ navigation, route }) => {
  const [state, setState] = useState({
    placa: "",
    modelo: "",
    linea: "",
    cantidad_asiento: "",
    numero_interno: "",
    fecha_asignacion: "",
    fecha_baja: "",
    
    // conductor_id: "",
  });
  const [editing, setEditing] = useState(false); //creo este estado, para que en caso tenga que editar, se cambie a true, editing

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  // const saveNewUSer = () => {
  //   if (state.name === "") {
  //     alert("provea un nombre");
  //   } else {
  //     try {
  //       // console.log(state)
  //       props.navigation.navigate("DrawerNavigation", {
  //         user: "1",
  //       });
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   }
  // };
  const {userInfo, isLoading, setMicros, Micros, saveMicro} = useContext(AuthContext)
  const handleSubmit = async () => {
    //segun se actualize o se cree, realiza una funcion
    try {
      if (!editing) {

        saveMicro(state.placa, state.modelo, state.linea, state.cantidad_asiento, state.numero_interno, state.fecha_asignacion, state.fecha_baja)
        // console.log(state)
        navigation.navigate("DrawerNavigation");
        // props.navigation.navigate("DrawerNavigation", {
        //   user: "1",
        // });
      } else {
        await updateUser(route.params.id, state);
        navigation.navigate("Usuarios");
      }
    } catch (error) {
      console.log(error);
    }
    // navigation.navigate("Usuarios");

  };

  useEffect(() => {
    if (route.params && route.params.id) {
      //si le mando un id, es por que quiero editar, y no crear
      navigation.setOptions({ headerTitle: "Actualizar Chofer" }); //le cambia el nombre a la barra de arriba de navegacion
      setEditing(true);
      (async () => {
        //recibe el objeto del usuario, sacandolo de la api
        const state = await getUser(route.params.id);
        // console.log(state);
        setState({
          placa: state.data.placa,
          modelo: state.modelo,
          linea: state.linea,
          cantidad_asiento: state.cantidad_asiento,
          numero_interno: state.numero_interno,
          fecha_asignacion: state.fecha_asignacion,
          fecha_baja: state.fecha_baja,
          // conductor_id: state.conductor_id
        });
      })();
    }
  }, []);

  // --**------------*-**para poner Fecha *-*-*-*-*-*-*-*-*-----------------------------
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Fecha de asignacion");
  const insertarFecha = (currentMode) => {
    setShow(true);
    // setMode(currentMode);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setState({ ...state, ["fecha_asignacion"]: fDate });
    setText(fDate);
    console.log(state);
  };
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="placa"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("placa", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="modelo"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("modelo", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Linea"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("linea", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad de asientos"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("cantidad_asiento", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      
      <TextInput
        style={styles.input}
        placeholder="Numero Interno"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("numero_interno", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      />
      <TouchableOpacity
        style={styles.input}
        // placeholder="Fecha de nacimiento"
        onPress={insertarFecha}
      >
        {text === "Fecha de asignacion" ? (
          <Text style={{ color: "#546474", textAlign: "center" }}>
            {text}     <FontAwesome name="calendar" size={24} color="#fff" marginBottom="auto" />
          </Text>
        ) : (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            {text}     <FontAwesome name="calendar" size={24} color="#fff"
            // style={{margin:0, padding:0}} 
            />
          </Text>
        )}
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      {/* <TextInput
        style={styles.input}
        placeholder="Fecha de baja"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("fecha_baja", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      /> */}
      {/* <TextInput
        style={styles.input}
        placeholder="Conductor id"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("conductor_id", text)}
        // value={users.email} //pone en el input, lo que tenga el estado users
      /> */}
      
      {!editing ? (
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handleSubmit}
          // disabled
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={handleSubmit}
          // disabled
        >
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      )}
     </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 15,
    // borderColor: '#10ac84',
    borderColor: "#cccccc",
    fontSize: 14,
    borderBottomWidth: 1,
    //  borderWidth: 1,
    height: 35,
    color: "#fff",
    padding: 4,
    textAlign: "center",
  },
  buttonSave: {
    // flex: 0.3,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonUpdate:{
    padding:10,
    paddingBottom: 5,
    borderRadius: 5,
    marginBottom:3,
    backgroundColor: "#e58e26",
    width: "90%"
  }
});

export default RegistroMicro;
