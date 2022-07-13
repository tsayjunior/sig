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

const Mapa = () => {
  /* conexion con el servidor */
  const socket = io("https://websockets.procesojudicial.sbs/");

  const { LineaUser, lineaUser } = useContext(AuthContext);

  /* Ubicacion del usuario  */
  const [location, setlocation] = useState(null);
  const [Micro, setMicro] = useState({
    latitude: 0,
    longitude: 0,
  });
  const toastRef = useRef();
 /* estado del numero de linea */
 const [NroLinea, setNroLinea] = useState()
  const loadTasks = async () => {
    const data = lineaUser();
     setNroLinea(LineaUser.data.nrolinea);

    console.log("aqui empieza");
    console.log(LineaUser.data.nrolinea+" ->Nrolinea");
    console.log("aqui acaba");
  };
 
  useEffect(() => {
    (async () => {
      const resultPermiso = await Location.requestForegroundPermissionsAsync();

      const EstadoPermiso = resultPermiso.status;

      if (EstadoPermiso !== "granted") {
        toastRef.current.show(
          "Debes aceptar los permisos de localización",
          3000
        );
      } else {
        const Userlocal = await Location.getCurrentPositionAsync({});
        /* locacion del micro para el marcador */
        setMicro({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
        });
        /* localizacion para sockets */
        setlocation({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
        
         
        if (NroLinea==1) {
           /* envia al servidor las coordenadas Linea 1 */
         socket.emit("linea1", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
        }else if (NroLinea==2){
       /* envia al servidor las coordenadas Linea 2 */
       socket.emit("linea2", {
        coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
      });
       
      }else if (NroLinea==5){
        /* envia al servidor las coordenadas Linea 5 */
        socket.emit("linea5", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }else if (NroLinea==8){
        /* envia al servidor las coordenadas Linea 8 */
        socket.emit("linea8", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
        else if (NroLinea==9){
        /* envia al servidor las coordenadas Linea 9 */
        socket.emit("linea9", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
        else if (NroLinea==10){
        /* envia al servidor las coordenadas Linea 10 */
        socket.emit("linea10", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
        else if (NroLinea==11){
        /* envia al servidor las coordenadas Linea 11 */
        socket.emit("linea11", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
        else if (NroLinea==16){
        /* envia al servidor las coordenadas Linea 16 */
        socket.emit("linea16", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
        else if (NroLinea==17){
        /* envia al servidor las coordenadas Linea 17 */
        socket.emit("linea17", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
        else if (NroLinea==18){
        /* envia al servidor las coordenadas Linea 18 */
        socket.emit("linea18", {
          coord: [Userlocal.coords.latitude, Userlocal.coords.longitude],
        });
      }
      }
      loadTasks();
    })();
  }, []);
  const [estado] = useState({
    origen: {
      latitude: -17.78634,
      longitude: -63.1082,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922,
    },
  });
  const mapRef = useRef();
  const { origen } = estado;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        userLocationPriority="high"
       
        style={StyleSheet.absoluteFill}
        initialRegion={origen}
        showsUserLocation={true}
        /*  toolbarEnabled={false} */
        showsMyLocationButton={true}
        userLocationFastestInterval={5000}
        maxZoomLevel={25}
        minZoomLevel={25}
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
        {renderizadoMapaIda(NroLinea)}
        {renderizadoMapaVuelta(NroLinea)}

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
const renderizadoMapaIda = (linea) => {
  console.log(linea+ " desde funcion nro de linea");
  if (linea==1) {
    return <Poli_1></Poli_1>;
  } else if (linea == 2) {
    return <Poli_2i></Poli_2i>;
  } else if (linea == 5) {
    return <Poli_5i></Poli_5i>;
  } else if (linea == 8) {
    return <Poli_8i></Poli_8i>;
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
  if (linea==1) {
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
export default Mapa;
