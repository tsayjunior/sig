import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Layout from "../components/Layout";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Toast from "react-native-easy-toast";
import * as Location from "expo-location";

import * as TaskManager from "expo-task-manager";
/* poligonos  */
/* IDA */
import Poli_1 from "../components/Poligonos/Poli_1";
import Poli_2i from "../components/Poligonos/Poli_2i";
import Poli_5i from "../components/Poligonos/poli_5i";
import Poli_8i from "../components/Poligonos/poli_8i";
import Poli_9i from "../components/Poligonos/Poli_9i";
import Poli_10i from "../components/Poligonos/Poli_10i";
import Poli_11i from "../components/Poligonos/Poli_11i";
import Poli_16i from "../components/Poligonos/Poli_16i";
import Poli_17 from "../components/Poligonos/Poli_17";
import Poli_18 from "../components/Poligonos/Poli_18";
/* vuelta */

import Poli_1v from "../components/Poligonos/Poli_1v";
import Poli_2v from "../components/Poligonos/Poli_2v";
import Poli_5v from "../components/Poligonos/poli_5v";
import Poli_8v from "../components/Poligonos/Poli_8v";
import Poli_9v from "../components/Poligonos/Poli_9v";
import Poli_10v from "../components/Poligonos/Poli_10v";
import Poli_11v from "../components/Poligonos/Poli_11v";
import Poli_16v from "../components/Poligonos/Poli_16v";
import Poli_17v from "../components/Poligonos/Poli_17v";
import Poli_18v from "../components/Poligonos/Poli_18v";
/* sockets */
import io from "socket.io-client";

// linea del chofer
import { AuthContext } from "../context/AuthContext";
const LOCATION_TASK_NAME = "background-location-task";

export default Mapa = () => {
  const foregroundSubscription = null;
  /* conexion con el servidor */
  const socket = io("https://websockets.procesojudicial.sbs/");

  const { LineaUser, lineaUser, ida, HoraLlegada } = useContext(AuthContext);

  /* Ubicacion del usuario  */
  const [location1, setlocation] = useState({ latitude: 0, longitude: 0 });
  const [Micro, setMicro] = useState({
    latitude: 0,
    longitude: 0,
  });
  const toastRef = useRef();

  /* cambio de datos */
  useEffect(() => {
    if (LineaUser) {
      loadTasks();
      console.log("desde loadTasks");
    }
  }, [LineaUser]);

  /* funcion que envia las la linea logueada para la notificacion de Usuario Peaton */
  function SendNotifications() {
    if (NroLinea > 0) {
      /* Envia la notificacion de la linea 1 */

      socket.emit("notificaciones", { NroLinea });
      console.log("Numero-----> " + NroLinea);
    }
  }

  /* fin */
  /* estado del numero de linea */
  const [NroLinea, setNroLinea] = useState(null);

  const loadTasks = async () => {
    setNroLinea(JSON.stringify(LineaUser.data.nrolinea, null, 4));

    console.log("aqui empieza");
    console.log(
      JSON.stringify(LineaUser.data.nrolinea, null, 4) + " ->Nrolinea"
    );
    console.log("aqui acaba");
  };
  // Solicitar permisos justo después de iniciar la aplicación
  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground.granted) {
        await Location.requestBackgroundPermissionsAsync();
      } else {
        toastRef.current.show(
          "Debes aceptar los permisos de localización",
          3000
        );
      }
    };
    /*  InicioSeguimiento(); */ /* inicia la ruta en primer plano */
    requestPermissions();
    lineaUser();
  }, []);
  /* mandar la ubicacion respecto al micro */
  useEffect(() => {
    if (NroLinea > 0) {
      InicioSeguimiento();
      console.log("desde la ubicacion de micro");

      SendNotifications();
      console.log("Notificacion");
    }
  }, [NroLinea]);

  // Iniciar el seguimiento de la ubicación en primer plano
  const InicioSeguimiento = async () => {
    // Comprobar si se concede el permiso de primer plano
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }
    // Asegúrese de que el seguimiento de la ubicación en primer plano no se esté ejecutando
    foregroundSubscription?.remove();

    // Empezar a ver la posición en tiempo real
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // Para obtener mejores registros, establecemos la precisión en la opción más sensible
        accuracy: Location.Accuracy.High,
        /* distanceInterval: 5  /* actualización de coordenadas cada 5 metros */
        timeInterval: 45000 /* intervalo de tiempo de espera en cada actualización */,
        /* mayShowUserSettingsDialog:true, */
      },
      (location) => {
        setlocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setMicro({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setOrigen({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        });

        /*  socket.emit("linea1", {
          coord: [location.coords.latitude, location.coords.longitude],
        }); */
        if (NroLinea == 1) {
          /* envia al servidor las coordenadas Linea 1 */
          socket.emit("linea1", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
          console.log(
            location.coords.latitude,
            location.coords.longitude + " LOcaliacion"
          );
        } else if (NroLinea == 2) {
          /* envia al servidor las coordenadas Linea 2 */
          socket.emit("linea2", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
        } else if (NroLinea == 5) {
          /* envia al servidor las coordenadas Linea 5 */
          socket.emit("linea5", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
          console.log(
            location.coords.latitude,
            location.coords.longitude + " LOcaliacion"
          );
        } else if (NroLinea == 8) {
          /* envia al servidor las coordenadas Linea 8 */
          socket.emit("linea8", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
        } else if (NroLinea == 9) {
          /* envia al servidor las coordenadas Linea 9 */
          socket.emit("linea9", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
        } else if (NroLinea == 10) {
          /* envia al servidor las coordenadas Linea 10 */
          socket.emit("linea10", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
        } else if (NroLinea == 11) {
          /* envia al servidor las coordenadas Linea 11 */
          socket.emit("linea11", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
        } else if (NroLinea == 16) {
          /* envia al servidor las coordenadas Linea 16 */
          socket.emit("linea16", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
        } else if (NroLinea == 17) {
          /* envia al servidor las coordenadas Linea 17 */
          socket.emit("linea17", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
          console.log("desde la linea 17");
        } else if (NroLinea == 18) {
          /* envia al servidor las coordenadas Linea 18 */
          socket.emit("linea18", {
            coord: [location.coords.latitude, location.coords.longitude],
          });
          console.log(
            location.coords.latitude,
            location.coords.longitude + " LOcaliacion"
          );
        }
      }
    );
  };

  /*   const [estado] = useState({
    origen: {
      latitude: -17.78634,
      longitude: -63.1082,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922,
    },
  }); */
  const [Origen, setOrigen] = useState({
    latitude: -17.78634,
    longitude: -63.1082,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
  });

  /*  const { origen } = estado; */
  const mapRef = useRef(MapView);
  console.log("desde la ida", ida);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        userLocationPriority="high"
        style={StyleSheet.absoluteFill}
        initialRegion={Origen}
        showsUserLocation={true}
        showsMyLocationButton={true}
        userLocationFastestInterval={2000}
        maxZoomLevel={22}
        minZoomLevel={20}
        userLocationCalloutEnabled={true}
        showsIndoorLevelPicker={true}
        rotateEnabled={false}
        scrollDuringRotateOrZoomEnabled={true}
      >
        {ida == true ? (
          <>{renderizadoMapaIda(NroLinea)}</>
        ) : (
          <>{renderizadoMapaVuelta(NroLinea)}</>
        )}
        <Marker
          title="YO"
          coordinate={Micro}
          description={ida == false ? "Ruta de Partida" : "Ruta de Vuelta"}
          image={require("../Image/you3X.png")}
        />
      </MapView>
      <Toast
        ref={toastRef}
        position="top"
        opacity={0.8}
        fadeOutDuration={1000}
      />

      <Text style={styles.titulo}>
        Tiempo estimado de llegada: {HoraLlegada}{" "}
      </Text>
    </View>
  );
};
const renderizadoMapaIda = (linea) => {
  console.log(linea + " desde funcion nro de linea");
  if (linea == 1) {
    return <Poli_1 />;
  } else if (linea == 2) {
    return <Poli_2i></Poli_2i>;
  } else if (linea == 5) {
    return <Poli_5i></Poli_5i>;
  } else if (linea == 8) {
    return <Poli_8i />;
  } else if (linea == 9) {
    return <Poli_9i></Poli_9i>;
  } else if (linea == 10) {
    return <Poli_10i></Poli_10i>;
  } else if (linea == 11) {
    return <Poli_11i></Poli_11i>;
  } else if (linea == 16) {
    return <Poli_16i></Poli_16i>;
  } else if (linea == 17) {
    return <Poli_17></Poli_17>;
  } else if (linea == 18) {
    return <Poli_18></Poli_18>;
  }
};
const renderizadoMapaVuelta = (linea) => {
  if (linea == 1) {
    return <Poli_1v></Poli_1v>;
  } else if (linea == 2) {
    return <Poli_2v></Poli_2v>;
  } else if (linea === 5) {
    return <Poli_5v></Poli_5v>;
  } else if (linea == 8) {
    return <Poli_8v></Poli_8v>;
  } else if (linea == 9) {
    return <Poli_9v></Poli_9v>;
  } else if (linea == 10) {
    return <Poli_10v></Poli_10v>;
  } else if (linea == 11) {
    return <Poli_11v></Poli_11v>;
  } else if (linea == 16) {
    return <Poli_16v></Poli_16v>;
  } else if (linea == 17) {
    return <Poli_17v></Poli_17v>;
  } else if (linea == 18) {
    return <Poli_18v></Poli_18v>;
  }
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#10ac84",
  },
});
