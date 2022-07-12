import React, { useState, useRef, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, TouchableOpacity,Alert } from "react-native";
import Layout from "../components/Layout";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Toast from "react-native-easy-toast";
import * as Location from "expo-location";
/* poligonos  */
import Poli_1 from "../components/Poligonos/Poli_1";
import Poli_1v from "../components/Poligonos/Poli_1v";
const Mapa = () => {
  /* Ubicacion del usuario  */
  const [location, setlocation] = useState(null);
  const toastRef = useRef();
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

        setlocation({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
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
     /*    provider={PROVIDER_GOOGLE} */
        userLocationPriority="high"
        /* zoomEnabled={true} */
        /* zoomTapEnabled={true}
       zoomControlEnabled={true} */
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
        compassOffset={{x:50, y: 20}}
        MapTypes={'satellite'}
        
      >
        {/* poligono */}
        
        <Poli_1></Poli_1>
        <Poli_1v></Poli_1v>

        <Marker
          title="Inicio"
          coordinate={{ latitude: -17.78634, longitude: -63.1082 }}
          image={require('../Image/you3X.png')}
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


export default Mapa;
