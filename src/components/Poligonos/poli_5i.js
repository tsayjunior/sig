import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_5i = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        //inicio  de ida de linea 5//
        {latitude: -17.82429, longitude: -63.2357,},
        {latitude: -17.8131, longitude: -63.23046,},
        {latitude: -17.8129, longitude: -63.2303,},
        {latitude: -17.81298, longitude:  -63.23017,},
        {latitude: -17.80996, longitude: -63.22853,},
        {latitude: -17.80927, longitude: -63.22825,},
        {latitude: -17.80329, longitude: -63.22685,},
        {latitude: -17.80178, longitude: -63.22616,},
        {latitude: -17.79785, longitude: -63.21665,},
        {latitude: -17.79786, longitude: -63.2159,},
        {latitude: -17.79716, longitude: -63.21448,},
        {latitude: -17.7952, longitude: -63.20582,},
        {latitude: -17.79527, longitude: -63.20547,},
        {latitude: -17.79047, longitude: -63.19513,},
        {latitude: -17.79026, longitude: -63.19472,},
        {latitude: -17.79009, longitude: -63.19473,},
        {latitude: -17.78984, longitude: -63.19311,},
        {latitude: -17.79141, longitude: -63.19301,},
        {latitude: -17.79183, longitude:  -63.19337,},
        {latitude: -17.79291, longitude: -63.19209,},
        {latitude: -17.79024, longitude: -63.19006,},
        {latitude: -17.78963, longitude: -63.19064,},
        {latitude: -17.78852, longitude:  -63.18803,},
        {latitude: -17.78935, longitude:  -63.18773,},
        {latitude: -17.7895, longitude: -63.18746,},
        {latitude: -17.78937, longitude: -63.18743,},
        {latitude: -17.7888, longitude:  -63.18517,},
        {latitude: -17.78616, longitude:  -63.18572,},
        {latitude: -17.78615, longitude: -63.18577,},
        {latitude: -17.7803, longitude: -63.18606,},
        {latitude: -17.77963, longitude: -63.18193,},
        {latitude: -17.77621, longitude: -63.18216,},
        {latitude: -17.77493, longitude: -63.18212,},
        {latitude: -17.77468, longitude: -63.17813,},
        {latitude: -17.77572, longitude: -63.17491,},
        {latitude: -17.7755, longitude: -63.17457,},
        {latitude: -17.77538, longitude: -63.17468,},
        {latitude: -17.77367, longitude: -63.17447,},
        {latitude: -17.77317, longitude: -63.17404,},
        {latitude: -17.77084, longitude: -63.1717,},
        {latitude: -17.77046, longitude: -63.17083,},
        {latitude: -17.77138, longitude: -63.16847,},
        {latitude: -17.7716, longitude: -63.16804,},
        {latitude: -17.76739, longitude: -63.16329,},
        {latitude: -17.76497, longitude: -63.1609,},
        {latitude: -17.76474, longitude: -63.16057,},
        {latitude: -17.76388, longitude: -63.15996,},
        {latitude: -17.76364, longitude: -63.15958,},
        {latitude: -17.7626, longitude: -63.15911,},
        {latitude: -17.75869, longitude: -63.15647,},
        {latitude: -17.75688, longitude: -63.15484,},
        {latitude: -17.75659, longitude: -63.15409,},
        {latitude: -17.75619, longitude: -63.15473,},
        {latitude: -17.75581, longitude: -63.15572,},
        {latitude: -17.75467, longitude: -63.15724,},
        {latitude: -17.74791, longitude:  -63.15258,},
        {latitude: -17.74773, longitude:  -63.15233,},
        {latitude: -17.74438, longitude: -63.15012,},
        {latitude: -17.7435, longitude: -63.14958,},
        {latitude: -17.74448, longitude: -63.14796,},
        {latitude: -17.74194, longitude: -63.14623,},
        {latitude: -17.73911, longitude: -63.15093,},
        {latitude: -17.73777, longitude: -63.15008,},
        {latitude: -17.73745, longitude: -63.15062,},
        {latitude: -17.73274, longitude: -63.14751,},
        {latitude: -17.73295, longitude: -63.14708,},
        {latitude: -17.72667, longitude: -63.14301,},
        {latitude: -17.7255, longitude: -63.14485,},
        {latitude: -17.72383, longitude: -63.14366,},
        {latitude: -17.72436, longitude: -63.14272,},
        {latitude: -17.72421, longitude: -63.14255,},
        {latitude: -17.72562, longitude: -63.14024,},
        {latitude: -17.72323, longitude: -63.13866,},
        {latitude: -17.72228, longitude:  -63.13851,},
        {latitude: -17.72216, longitude: -63.13882,},
        {latitude: -17.72178, longitude: -63.1393,},
        {latitude: -17.72323, longitude: -63.14027,},
        {latitude: -17.72112, longitude: -63.1418,},
        {latitude: -17.72144, longitude: -63.14374,},
        {latitude: -17.72275, longitude: -63.14472,},
        {latitude: -17.72421, longitude: -63.14255,},
        {latitude: -17.72436, longitude: -63.14272,},
        {latitude: -17.72583, longitude: -63.14039,},
        {latitude: -17.72684, longitude: -63.13883,},
       
        //fin  de ida de linea 5//
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="navy"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
  />
  )
}

export default Poli_5i

const styles = StyleSheet.create({})