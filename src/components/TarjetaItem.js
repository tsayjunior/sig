import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const TarjetaItem = ({ user, handleDelete }) => {
  const navigation = useNavigation();
  const { setGIda, setHoraLlegada, HoraLlegada, setId, setHora_Finalizado, setRecorrido_tarjeta_id, id, recorrido_tarjeta_id } = useContext(AuthContext);
  const [enHora, setEnHora] = useState(true);
  const [habilitado, setHabilitado] = useState(true);
  const [habEnHora, setHabEnHora] = useState(false);

  const [modal, setModal] = useState(false);
  // var date1 = new moment('2022-07-07 08:30:00 AM', 'YYYY-MM-DD hh:mm:ss a');//para pruebas
  var date1 = new Date().toLocaleTimeString(); //me dá la hora actual
  var aux1 = user.recorrido_tarjeta.hora_partida;
  var aux2 = user.recorrido_tarjeta.hora_llegada;

  const navegarMapa = () => {
    
    setId(user.id)
    setRecorrido_tarjeta_id(user.recorrido_tarjeta_id)
    // console.log("--------------id---------------")
    // console.log(date1)

    // console.log(id)
    
    // console.log("---recorrido id tarjeta--------------")
    // console.log(recorrido_tarjeta_id)
    // console.log("----------------------------------")
    if (user.tipo_recorrido == false) {
      setGIda(false);
    } else {
      setGIda(true);
    }
    setHoraLlegada(aux2);
    console.log("hora estimada de llegada es: ---");
    console.log(HoraLlegada);
    navigation.navigate("Mapa");
  };

  

  useEffect(() => {
    // console.log(user);
    date1 = new Date().toLocaleTimeString();
    // console.log(date1);
    // console.log(aux1);
    // console.log(aux2);
    setHabEnHora(date1 > aux1 && date1 < aux2);
    // console.log(habEnHora)

    if (habEnHora) {
      setEnHora(true);
    } else {
      setEnHora(false);
    }

    if (user.hora_finalizado == null) {
      setHabilitado(true);
    } else {
      setHabilitado(false);
    }
    // console.log(enHora);
  });

  // console.log("Desde el recorrido-> " + user.recorrido_tarjeta.tipo_recorrido);
  return (
    <View style={styles.itemContainer}>
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
              {!habilitado ? (
                <>
                  <Text style={styles.text}>
                    El recorrido se finalizó a las: {user.hora_finalizado}
                  </Text>
                </>
              ) : null}
              {habilitado && !enHora ? (
                <>
                  <Text style={styles.text}>
                    Horario fuera de turno, si aun desea continuar, presione Aceptar
                  </Text>
                </>
              ) : (
                <>
                  {habilitado && enHora ? (
                    <>
                      <Text style={styles.text}>
                        Está por iniciar el recorrido, para continuar presione
                        aceptar
                      </Text>
                    </>
                  ) : null}
                </>
              )}
            </View>
            {habilitado && !enHora ? (
              <>
                <Pressable
                  onPress={() => setModal(false)}
                  style={styles.warning_button2}
                  android_ripple={{ color: "#fff" }}
                >
                  <Text style={styles.text}>cancelar</Text>
                </Pressable>
                <Pressable
                  onPress={() => (setModal(false), navegarMapa())}
                  style={styles.warning_button}
                  android_ripple={{ color: "#fff" }}
                >
                  <Text style={styles.text}>Aceptar</Text>
                </Pressable>
              </>
            ) : (
              <>
                {!habilitado ? (
                  <>
                    <Pressable
                      onPress={() => setModal(false)}
                      // onPress={logout}

                      style={styles.warning_button}
                      android_ripple={{ color: "#fff" }}
                    >
                      <Text style={styles.text}>Aceptar</Text>
                    </Pressable>
                  </>
                ) : (
                  <>
                    <Pressable
                      onPress={() => (setModal(false), navegarMapa())}
                      // onPress={logout}

                      style={styles.warning_button}
                      android_ripple={{ color: "#fff" }}
                    >
                      <Text style={styles.text}>Aceptar</Text>
                    </Pressable>
                  </>
                )}
              </>
            )}
          </View>
        </View>
      </Modal>
      <View style={styles.aux1}>
        <TouchableOpacity
        // onPress={()=>navigation.navigate('RegistroChofer', {id:user.id})}//aparte de navegar a la otra pantalla, le paso un parametro, que es el id, para poder editar
        >
          <View style={styles.itemContainer2}>
            <Text style={styles.titulo}>Nro. de recorrido: </Text>
            <Text style={styles.itemTitle}>
              {user.recorrido_tarjeta.nro_recorrido}
            </Text>
          </View>
          <Text style={styles.titulo}>Partida: </Text>
          <Text style={styles.itemTitle}>
            {user.recorrido_tarjeta.hora_partida}
          </Text>
          <Text style={styles.titulo}>Llegada: </Text>
          <Text style={styles.itemTitle}>
            {user.recorrido_tarjeta.hora_llegada}
          </Text>
          <Text style={styles.titulo}>Trayectoria: </Text>
          {user.recorrido_tarjeta.tipo_recorrido === null ? (
            <>
              <Text style={styles.itemTitle}>Ruta de Partida</Text>
            </>
          ) : user.recorrido_tarjeta.tipo_recorrido == false ? (
            <>
              <Text style={styles.itemTitle}>Ruta de Partida</Text>
            </>
          ) : (
            <Text style={styles.itemTitle}>Ruta de Vuelta</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.aux2}>
        {habilitado ? (
          <>
            {habEnHora ? (
              <>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#ee5253",
                    padding: 7,
                    borderRadius: 5,
                  }}
                  // onPress={() => navegarMapa()}
                  onPress={() => setModal(true)}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Iniciar recorido
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#cbcf00",
                    padding: 7,
                    borderRadius: 5,
                  }}
                  // onPress={() => navegarMapa()}
                  onPress={() => setModal(true)}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Iniciar recorido
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </>
        ) : (
          <>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                padding: 7,
                borderRadius: 10,
              }}
              onPress={() => setModal(true)}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                Recorrido realizado
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  itemTitle: {
    color: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#bbb",
  },
  itemContainer2: {
    flex: 1,
  },
  aux1: {
    flex: 2,
  },
  aux2: {
    flex: 1,
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
  warning_button2: {
    backgroundColor: "#CA1212",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
});

export default TarjetaItem;
