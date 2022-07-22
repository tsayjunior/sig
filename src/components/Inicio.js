import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Animated,
  StatusBar,
} from "react-native";
import React, { useRef, useState } from "react";
import InicioItems from "./InicioItems";
import InicioPaginacion from "./InicioPaginacion";
import NextButton from "./NextButton";

export default Inicio = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setcurrentIndex] = useState(0);

  const viewItemsChanged = useRef(({ viewableItems }) => {
    setcurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef(null);

  const DATA = [
    {
      id: "1",
      titulo: "Afíliate",
      descripcion:"Entrega los requisitos al area de administración de tu linea,para poder iniciar sesión",
      image: require("../Image/admin.png"),
    },
    {
      id: "2",
      titulo: "Permiso de Transporte",
      descripcion:"Asegúrate de tener un permiso para pertenecer a una linea de microbus",
      image: require("../Image/permiso.png"),
    },
    {
      id: "3",
      titulo: "Navegación",
      descripcion:
        "Obtén tus ruta de ida y vuelta desde la aplicación al iniciar sesión",
      image: require("../Image/rutas.png"),
    },
    {
      id: "4",
      titulo: "Reporte",
      descripcion:"Si tienes algún inconveniente a medio camino, reporta a la central del problema, en la sección reporte ",
      image: require("../Image/reporte.png"),
    },
  ];

  const scrollTo = () => {
    if (currentIndex < DATA.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("siguiente item");
      navigation.navigate("Login");
    }
  };
  return (
    
    <View style={styles.container}>
     
      <View style={{ flex: 3 }}>
      <StatusBar hidden />
        <FlatList
          data={DATA}
          renderItem={({ item }) => <InicioItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <InicioPaginacion data={DATA} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / DATA.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
