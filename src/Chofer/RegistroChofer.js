import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";
import Layout from "../components/Layout";
import { saveUsers, getUser, updateUser } from "../Api/ApiChofer";
import DateTimePicker from "@react-native-community/datetimepicker"; //fecha
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";


const RegistroChofer = ({ navigation, route }) => {
  const [state, setState] = useState({
    ci: "",
    name: "",
    lastname: "",
    fecha_nac: "",
    sex: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
    category_licencia_id: "",
  });

  const [editing, setEditing] = useState(false); //creo este estado, para que en caso tenga que editar, se cambie a true, editing

  const {isLoading, register, userInfo} = useContext(AuthContext);

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
    // console.log(state);
  };

  const handleSubmit = async () => {
    //segun se actualize o se cree, realiza una funcion
    try {
      if (!editing) {
        // await saveUsers(state);
        // console.log(state)
        
        register(state.ci, state.name, state.lastname, state.sex, state.fecha_nac, state.email, state.category_licencia_id, state.password, state.password_confirmation, state.phone)
        /* pone el estado vacio cuando cierra session */
        setText("Fecha de nacimiento");
        setState({
          category_licencia_id:"",
          ci:"",
          name:"",
          lastname:"",
          fecha_nac:"",
          sex:"",
          phone:"", 
          email:"", 
        /*   password: userInfo.data.password,
          password_confirmation: userInfo.data.password_confirmation, */
        });
        /* fin */
        navigation.navigate("RegistroMicro");
        alert(resData.msg);
      } else {
        await updateUser(route.params.id, state);
        navigation.navigate("Usuarios");
        
        // alert(resData.msg);
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
    setState({ ...state, ["fecha_nac"]: fDate });
    setText(fDate);
    console.log(state);
  };

  useEffect(() => {
    
    if (userInfo.access_token) {
      // console.log(userInfo)
      //si tiene token es que quiero editarlo
      navigation.setOptions({ headerTitle: "PERFL" }); //le cambia el nombre a la barra de arriba de navegacion
      setEditing(true);
      
      (async () => {
        //recibe el objeto del usuario, sacandolo de la api
        // const state = await getUser(route.params.id);
        
        console.log("++++++++++++++++++++++++++")
        console.log(userInfo.data.email);
        setText(userInfo.data.fecha_nac);
        setState({
          category_licencia_id: userInfo.data.category_licencia_id + "",
          ci: userInfo.data.ci,
          name: userInfo.data.name,
          lastname: userInfo.data.lastname,
          fecha_nac: userInfo.data.fecha_nac,
          sex: userInfo.data.sex,
          phone: userInfo.data.phone,
          email: userInfo.data.email,
        /*   password: userInfo.data.password,
          password_confirmation: userInfo.data.password_confirmation, */
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
  // const val = useContext(AuthContext);
  return (
    <Layout >
 {/* <Text>{val}</Text> */}
   {/*  <Spinner visible={isLoading} /> */}
   
      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        placeholderTextColor="#546474"
        keyboardType="numeric"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("ci", text)}
        value={state.ci} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#546474"
        keyboardType="name-phone-pad"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("name", text)}
        value={state.name} //pone en el input, lo que tenga el estado users
      />
      {console.log(state)}
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="#546474"
        // keyboardType="name"
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
            {text}     <FontAwesome name="calendar" size={24} color="#33d9b2" marginBottom="auto" />
          </Text>
        ) : (
          <Text style={{ color: "#33d9b2", textAlign: "center" }}>
            {text}     <FontAwesome name="calendar" size={24} color="#33d9b2"
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
        placeholder="Sexo -> M o F"
        placeholderTextColor="#546474"
        keyboardType="name-phone-pad"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("sex", text)}
        value={state.sex} //pone en el input, lo que tenga el estado users
      />
     {/*   <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        /> */}
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        placeholderTextColor="#546474"
        keyboardType="numeric"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("phone", text)}
        value={state.phone} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#546474"
        keyboardType="email-address"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("email", text)}
        value={state.email} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#546474"
        keyboardType="visible-password"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("password", text)}
        value={state.password}//pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        placeholderTextColor="#546474"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        keyboardType="visible-password"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("password_confirmation", text)}
        value={state.password_confirmation} //pone en el input, lo que tenga el estado users
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria licencia (1-3)"
        placeholderTextColor="#546474"
        keyboardType="numeric"
        // onChangeText={text=>console.log(text)}
        onChangeText={(text) => handleChangeText("category_licencia_id", text)}
        value={state.category_licencia_id} //pone en el input, lo que tenga el estado users
      />
     
      
      {!editing ? (
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={handleSubmit}
          // onPress={()=>{register(state.ci, state.name, state.lastname, state.sex, state.fecha_nac, state.email, state.category_licencia_id, state.password, state.password_confirmation, state.phone)}}
          // disabled
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      ) : (
        
       /*  <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={handleSubmit}
          // disabled
        >
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity> */
        <></>
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
    borderColor: "#33d9b2",
    fontSize: 14,
    borderBottomWidth: 1,
    //  borderWidth: 1,
    height: 35,
    color: "#33d9b2",
    padding: 4,
    textAlign: "center",
    justifyContent: "center",
  
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
  /* safeArea */
  form: {
    flex: 1,
    justifyContent: "center",
   
    // marginHorizontal: 10,
   
  },
});

export default RegistroChofer;
