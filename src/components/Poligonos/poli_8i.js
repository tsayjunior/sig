import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_8i = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        //inicio  de ida de linea 8//
        {latitude: -17.82602,  longitude: -63.1332,},
        {latitude: -17.8251,  longitude: -63.13151,},
        {latitude: -17.82494,  longitude: -63.13181,},
        {latitude: -17.82092,  longitude:  -63.13607,},
        {latitude: -17.81741,  longitude: -63.1398,},
        {latitude: -17.81232,  longitude: -63.13648,},
        {latitude: -17.81236,  longitude: -63.13343,},
        {latitude: -17.81271,   longitude: -63.12874,},
        {latitude: -17.81258,   longitude: -63.12839,},
        {latitude: -17.81233,   longitude: -63.12866,},
        {latitude: -17.80894,  longitude: -63.1284,},
        {latitude: -17.80253,  longitude: -63.12776,},
        {latitude: -17.80197, longitude: -63.12752,},
        {latitude: -17.80104,  longitude: -63.12746,},
        {latitude: -17.80102,  longitude: -63.1276,},
        {latitude: -17.79744,  longitude: -63.1272,},
        {latitude: -17.79263,  longitude: -63.12675,},
        {latitude: -17.79212,  longitude: -63.12675,},
        {latitude: -17.79219,  longitude:  -63.12713,},
        {latitude: -17.79166,  longitude: -63.1343,},
        {latitude: -17.79293,  longitude: -63.13452,},
        {latitude: -17.79372,  longitude:-63.13459,},
        {latitude: -17.79367,  longitude:  -63.1352,},
        {latitude: -17.79492,  longitude:  -63.13533,},
        {latitude: -17.79498,  longitude: -63.13471,},
        {latitude: -17.79745,  longitude: -63.13494,},
        {latitude: -17.80123,  longitude:  -63.13525,},
        {latitude: -17.80139,  longitude:  -63.13538,},
        {latitude: -17.80085,  longitude: -63.14045,},
        {latitude: -17.79855,  longitude: -63.14932, },
        {latitude: -17.79811,  longitude: -63.14981,},
        {latitude: -17.79772,  longitude: -63.15186,},
        {latitude: -17.79565,  longitude: -63.15683,},
        {latitude: -17.7947,  longitude: -63.15983,},
        {latitude: -17.79433,  longitude: -63.16214,},
        {latitude: -17.79248,  longitude: -63.16279,},
        {latitude: -17.7881,  longitude: -63.16201,},
        {latitude: -17.78752,  longitude: -63.16272,},
        {latitude: -17.78745,  longitude: -63.16405,},
        {latitude: -17.78843,  longitude: -63.16481,},
        {latitude: -17.79296,  longitude: -63.16615,},
        {latitude: -17.7962,  longitude: -63.16665,},
        {latitude: -17.79851,  longitude: -63.16917,},
        {latitude: -17.79822,  longitude: -63.17264,},
        {latitude: -17.79911,  longitude: -63.1796,},
        {latitude: -17.79942,  longitude: -63.18092,},
        {latitude: -17.80066,  longitude: -63.18539,},
        {latitude: -17.79818,  longitude: -63.1861,},
        {latitude: -17.79345,  longitude: -63.1869,},
        {latitude: -17.79114,  longitude: -63.18715,},
        {latitude: -17.78932,  longitude: -63.18746,},
        {latitude: -17.78441,  longitude: -63.18871,},
        {latitude: -17.77692,  longitude: -63.18714,},
        {latitude: -17.77492,  longitude:  -63.1821,},
        {latitude: -17.77147,  longitude: -63.18237,},
        {latitude: -17.76545,  longitude:  -63.18131,},
        {latitude: -17.75669,  longitude: -63.17785,},
        {latitude: -17.7477,  longitude: -63.17435,},
        {latitude: -17.7393,  longitude: -63.17104,},
        {latitude: -17.73006,  longitude: -63.16739,},
        {latitude: -17.72519,  longitude: -63.16542,},
        {latitude: -17.72733, longitude: -63.16016,},
        {latitude: -17.72841,  longitude: -63.15699,},
        {latitude: -17.7241,  longitude: -63.15506,},
        {latitude: -17.72295,  longitude: -63.15449,},
        {latitude: -17.72428,  longitude: -63.1511,},
        {latitude: -17.71961,  longitude: -63.14714,},
        {latitude: -17.7148,  longitude: -63.14472,},
        {latitude: -17.71862,  longitude: -63.14212,},
        {latitude: -17.71818,  longitude: -63.13963,},
        
        //fin  de ida de linea 8//
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="teal"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
   
  />
  )
}

export default Poli_8i

const styles = StyleSheet.create({})