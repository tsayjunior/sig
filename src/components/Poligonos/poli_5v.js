import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_5v = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        //inicio  de vuelta de linea 5//
        {latitude: -17.72684,  longitude: -63.13883,},
        {latitude: -17.72583,  longitude: -63.14039,},
        {latitude: -17.72436,  longitude: -63.14272,},
        {latitude: -17.72421,  longitude:  -63.14255,},
        {latitude: -17.72275,   longitude: -63.14472,},
        {latitude: -17.72144,   longitude: -63.14374,},
        {latitude: -17.72112,   longitude: -63.1418,},
        {latitude: -17.72323,  longitude: -63.14027,},
        {latitude: -17.72178,  longitude: -63.1393,},
        {latitude: -17.72216,  longitude: -63.13882,},
        {latitude: -17.72228,  longitude: -63.13851,},
        {latitude: -17.72323,  longitude: -63.13866,},
        {latitude: -17.72562,  longitude: -63.14024,},
        {latitude: -17.72421,  longitude: -63.14255,},
        {latitude: -17.72436,  longitude: -63.14272,},
        {latitude: -17.72383,  longitude: -63.14366,},
        {latitude: -17.7255,  longitude: -63.14485,},
        {latitude: -17.72667,  longitude: -63.14301,},
        {latitude: -17.73269,   longitude:  -63.14694,},
        {latitude: -17.73164,   longitude: -63.14879,},
        {latitude: -17.73187,  longitude: -63.14893,},
        {latitude: -17.73274,  longitude: -63.14751,},
        {latitude: -17.73745,  longitude:  -63.15062,},
        {latitude: -17.73777,  longitude:  -63.15008,},
        {latitude: -17.73911,  longitude: -63.15093,},
        {latitude: -17.73932,  longitude: -63.15107,},
        {latitude: -17.74099,  longitude:  -63.14836,},
        {latitude: -17.74121,   longitude:  -63.14823,},
        {latitude: -17.74348,   longitude: -63.1497,},
        {latitude: -17.74749,  longitude: -63.15232,},
        {latitude: -17.74788,  longitude: -63.15274,},
        {latitude: -17.75459,  longitude: -63.15738,},
        {latitude: -17.75409,  longitude: -63.15814,},
        {latitude: -17.75438,  longitude: -63.15836,},
        {latitude: -17.75624,  longitude: -63.15566,},
        {latitude: -17.75677,  longitude: -63.15552,},
        {latitude: -17.75826,  longitude: -63.15631,},
        {latitude: -17.76291,  longitude: -63.15946,},
        {latitude: -17.76341,  longitude: -63.16004,},
        {latitude: -17.76428,  longitude: -63.16064,},
        {latitude: -17.76466,  longitude: -63.16115,},
        {latitude: -17.76835,  longitude: -63.16447,},
        {latitude: -17.77125,  longitude: -63.16808,},
        {latitude: -17.77036,  longitude: -63.17061,},
        {latitude: -17.77026,  longitude: -63.17132,},
        {latitude: -17.77079,  longitude: -63.17183,},
        {latitude: -17.77129,  longitude: -63.17228,},
        {latitude: -17.77295,  longitude: -63.17389,},
        {latitude: -17.77452,  longitude: -63.17577,},
        {latitude: -17.77476,  longitude: -63.17653,},
        {latitude: -17.77449,  longitude: -63.17802,},
        {latitude: -17.77449,   longitude: -63.18015,},
        {latitude: -17.77473,  longitude: -63.18207,},
        {latitude: -17.77513,  longitude: -63.18333,},
        {latitude: -17.7753,  longitude: -63.18334,},
        {latitude: -17.775,  longitude:  -63.18239,},
        {latitude: -17.77622,  longitude:  -63.18223,},
        {latitude: -17.77643,  longitude: -63.18327,},
        {latitude: -17.77772,  longitude: -63.18316,},
        {latitude: -17.7788,  longitude: -63.18306,},
        {latitude: -17.77978,  longitude: -63.18299,},
        {latitude: -17.78076,  longitude: -63.18292,},
        {latitude: -17.78094,  longitude: -63.18497,},
        {latitude: -17.78102,  longitude: -63.18594,},
        {latitude: -17.78615,  longitude: -63.18577,},
        {latitude: -17.78616,  longitude: -63.18572,},
        {latitude: -17.7888,  longitude: -63.18517,},
        {latitude: -17.78937,  longitude: -63.18743,},
        {latitude: -17.78925,  longitude: -63.18762,},
        {latitude: -17.7892,  longitude: -63.18777,},
        {latitude: -17.78852,  longitude: -63.18803,},
        {latitude: -17.78963,  longitude: -63.19064,},
        {latitude: -17.79024,  longitude: -63.19006,},
        {latitude: -17.79291,  longitude:  -63.19209,},
        {latitude: -17.79183,  longitude: -63.19337,},
        {latitude: -17.79141,  longitude: -63.19301,},
        {latitude: -17.78984,  longitude: -63.19311,},
        {latitude: -17.79009,  longitude: -63.19473,},
        {latitude: -17.79087,   longitude: -63.19665,},
        {latitude: -17.79393,  longitude: -63.20367,},
        {latitude: -17.79477,  longitude: -63.20531,},
        {latitude: -17.79538,  longitude: -63.20748,},
        {latitude: -17.79655,  longitude: -63.21259,},
        {latitude: -17.79708,  longitude: -63.2154,},

	{latitude: -17.7969,   longitude: -63.21628,},
        {latitude: -17.79759,   longitude:  -63.21683,},
        {latitude: -17.79897,   longitude: -63.21943,},
        {latitude: -17.80137,   longitude: -63.22571,},
        {latitude: -17.80178,   longitude: -63.22616,},
        {latitude: -17.80329,   longitude: -63.22685,},
        {latitude: -17.80927,    longitude: -63.22825,},
        {latitude: -17.80996,   longitude: -63.22853,},
        {latitude: -17.81298,   longitude: -63.23017,},
        {latitude: -17.8129,   longitude: -63.2303,},
        {latitude: -17.8131,   longitude: -63.23046,},
        {latitude: -17.81329,   longitude: -63.23032,},
        {latitude: -17.82429,    longitude: -63.2357,},
       
        //fin  de vuelta de linea 5//
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="lime"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
    lineDashPattern={[5]}
  />
  )
}

export default Poli_5v

const styles = StyleSheet.create({})