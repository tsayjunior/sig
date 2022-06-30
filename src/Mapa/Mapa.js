import React,{useState,useRef,useEffect} from "react";
import { Text, View, StyleSheet} from "react-native";
import Layout from "../components/Layout";
import MapView from "react-native-maps";
import Toast from "react-native-easy-toast";
import * as Location from "expo-location";
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
      latitude: -17.79056,
      longitude: -63.17201,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922,
    },
  });
  const mapRef = useRef();
  const { origen } = estado;
  return (
   /*  <Layout>
      <Text>Mapa</Text>
    </Layout> */

    <View style={{flex:1}}>
      <MapView
       ref={mapRef}
       userLocationPriority="high"
       zoomEnabled={true}
       zoomTapEnabled={true}
       zoomControlEnabled={true}
       style={StyleSheet.absoluteFill}
       initialRegion={origen}
       showsUserLocation={true}
       toolbarEnabled={false}
       showsMyLocationButton={true}
       userLocationFastestInterval={5000}
        // mapPadding={{ top: 395 }}
        mapPadding={{
        
          top: 390,
          right: 5,
          bottom: 85,
          left: 10,
        }}
        zoom={10}
      >

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
