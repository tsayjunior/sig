import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Layout from "../components/Layout";
import { saveUsers, getUser, updateUser } from "../Api/ApiChofer";
import DateTimePicker from "@react-native-community/datetimepicker"; //fecha
import { FontAwesome } from "@expo/vector-icons";

const RegistroChofer = ({ navigation, route }) => {
  const [state, setState] = useState({
    ci: "",
    names: "",
    lastname: "",
    date: "",
    sex: "",
    phone: "",
    mail: "",
    category_id: "",
    user_id: "",
  });

  const [editing, setEditing] = useState(false); //creo este estado, para que en caso tenga que editar, se cambie a true, editing

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handleSubmit = async () => {
    //segun se actualize o se cree, realiza una funcion
    try {
      if (!editing) {
        await saveUsers(state);
        // console.log(state)
        navigation.navigate("RegistroMicro");
      } else {
        await updateUser(route.params.id, state);
        navigation.navigate("Usuarios");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // --**------------*-**para poner Fecha *-*-*-*-*-*-*-*-*-----------------------------
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Fecha de nacimiento");
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
    setState({ ...state, ["date"]: fDate });
    setText(fDate);
    console.log(state);
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      //si le mando un id, es por que quiero editar, y no crear
      navigation.setOptions({ headerTitle: "Actualizar Chofer" }); //le cambia el nombre a la barra de arriba de navegacion
      setEditing(true);
      (async () => {
        //recibe el objeto del usuario, sacandolo de la api
        const state = await getUser(route.params.id);
        console.log(state);
        setState({
          ci: state.data.ci,
          names: state.data.names,
          lastname: state.data.lastname,
          date: state.data.date,
          sex: state.data.sex,
          phone: state.data.phone,
          mail: state.data.mail,
          category_id: state.data.category_id + "",
          user_id: state.data.user_id + "",
        });
      })();
    }

    // console.log("----*-*-*-**-*-*---*-");
    // console.log(route.params.id);
  }, []);

  const saveNewUSer = () => {
    // if (state.name === "") {
    //   alert("provea un nombre");
    // } else {
    //   try {
    //     // console.log(state)
    //     props.navigation.navigate("RegistroMicro", {
    //       user: "1",
    //     });
    //   } catch (error) {
    //     console.log("error");
    //   }
    // }
    props.navigation.navigate("RegistroMicro", {
      user: "1",
    });
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("ci", text)}
        value={state.ci} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("names", text)}
        value={state.names} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("lastname", text)}
        value={state.lastname} //pone en el input, lo que tenga el estado users
      />

      <TouchableOpacity
        style={styles.input}
        // placeholder="Fecha de nacimiento"
        onPress={insertarFecha}
      >
        {text === "Fecha de nacimiento" ? (
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

      <TextInput
        style={styles.input}
        placeholder="Sexo"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("sex", text)}
        value={state.sex} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("phone", text)}
        value={state.phone} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("mail", text)}
        value={state.mail} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria licencia"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("category_id", text)}
        value={state.category_id} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario id"
        placeholderTextColor="#546474"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("user_id", text)}
        value={state.user_id} //pone en el input, lo que tenga el estado users
      />

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
      {/* <View>
        <Button title="Registar chofer" onPress={() => saveNewUSer()} />
      </View> */}
      {/* <View>
                <Button title="lista de usuario" onPress={props.navigation.navigate('userList')}/>
            </View> */}
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
  buttonUpdate: {
    padding: 10,
    paddingBottom: 5,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
});

export default RegistroChofer;
