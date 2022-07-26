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

const Mapa = () => {
  const foregroundSubscription = null;
  /* conexion con el servidor */
  const socket = io("https://websockets.procesojudicial.sbs/");

  const { LineaUser, lineaUser, ida } = useContext(AuthContext);

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
      console.log("desde useffect");
    }
  }, [LineaUser]);

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
    if (NroLinea !== null) {
      InicioSeguimiento();
      console.log("desde la ubicacion de micro");
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
        accuracy: Location.Accuracy.BestForNavigation,
        distanceInterval: 5,/* actualización de coordenadas cada 5 metros */
        timeInterval: 20000,/* intervalo de tiempo de espera en cada actualización */
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
            location.coords.longitude + "LOcaliacion"
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
          console.log("location 18 " + JSON.stringify(location));
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
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  /*  const { origen } = estado; */
  const mapRef = useRef();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        userLocationPriority="high"
        style={StyleSheet.absoluteFill}
        initialRegion={Origen}
        showsUserLocation={true}
        /*  toolbarEnabled={false} */
        showsMyLocationButton={true}
        userLocationFastestInterval={5000}
        maxZoomLevel={22}
        minZoomLevel={22}
        userLocationCalloutEnabled={true}
        // mapPadding={{ top: 395 }}
        userLocationAnnotationTitle="YOU"
        showsCompass={true}
        showsBuildings={true}
        /*   showsTraffic={true} */
        /* showsIndoors={true} */
        showsIndoorLevelPicker={true}
        rotateEnabled={false}
        pitchEnabled={false}
        toolbarEnabled={true}
        /*  scrollEnabled={false} */
        scrollDuringRotateOrZoomEnabled={false}
        compassOffset={{ x: 50, y: 20 }}
      >
        {ida == true ? (
          <>{renderizadoMapaIda(NroLinea)}</>
        ) : (
          <>{renderizadoMapaVuelta(NroLinea)}</>
        )}
        <Marker
          title="YO"
          coordinate={Micro}
          image={require("../Image/you3X.png")}
        />
      </MapView>
      <Toast
        ref={toastRef}
        position="top"
        opacity={0.8}
        fadeOutDuration={1000}
      />
    </View>
  );
};

//linea 8
const Linea8i = () => {
  toastRef.current.show("Linea 8: Ruta de partida");
};
const renderizadoMapaIda = (linea) => {
  console.log(linea + " desde funcion nro de linea");
  if (linea == 1) {
    return <Poli_1 onPress={alertaIda} />;
  } else if (linea == 2) {
    return <Poli_2i></Poli_2i>;
  } else if (linea == 5) {
    return <Poli_5i></Poli_5i>;
  } else if (linea == 8) {
    return <Poli_8i onPress={Linea8i} />;
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
//linea 1
const alertaIda = () => {
  toastRef.current.show("Linea 1: Ruta de partida");
};
const alertaVuelta = () => {
  toastRef.current.show("Linea 1: Ruta de vuelta");
};

//linea 2
const Linea2i = () => {
  toastRef.current.show("Linea 2: Ruta de partida");
};
const Linea2v = () => {
  toastRef.current.show("Linea 2: Ruta de vuelta");
};

//linea 5
const Linea5i = () => {
  toastRef.current.show("Linea 5: Ruta de partida");
};
const Linea5v = () => {
  toastRef.current.show("Linea 5: Ruta de vuelta");
};

const Linea8v = () => {
  toastRef.current.show("Linea 8: Ruta de vuelta");
};

//linea 9
const Linea9i = () => {
  toastRef.current.show("Linea 9: Ruta de partida");
};
const Linea9v = () => {
  toastRef.current.show("Linea 9: Ruta de vuelta");
};

//linea 10
const Linea10i = () => {
  toastRef.current.show("Linea 10: Ruta de partida");
};
const Linea10v = () => {
  toastRef.current.show("Linea 10: Ruta de vuelta");
};

//linea 11
const Linea11i = () => {
  toastRef.current.show("Linea 11: Ruta de partida");
};
const Linea11v = () => {
  toastRef.current.show("Linea 11: Ruta de vuelta");
};

//linea 16
const Linea16i = () => {
  toastRef.current.show("Linea 16: Ruta de partida");
};
const Linea16v = () => {
  toastRef.current.show("Linea 16: Ruta de vuelta");
};

//linea 17
const Linea17i = () => {
  toastRef.current.show("Linea 17: Ruta de partida");
};
const Linea17v = () => {
  toastRef.current.show("Linea 17: Ruta de vuelta");
};

//linea 18
const Linea18i = () => {
  toastRef.current.show("Linea 18: Ruta de partida");
};
const Linea18v = () => {
  toastRef.current.show("Linea 18: Ruta de vuelta");
};
export default Mapa;
