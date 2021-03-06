import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_11v = ({onPress = () => {}}) => {

  const [coordinates] = useState([
    //inicio linea 11 vuelta//
{ latitude: -17.82399, longitude: -63.09512 },
{ latitude: -17.82347, longitude: -63.09649 },
{ latitude: -17.8226, longitude: -63.09875 },
{ latitude: -17.8219, longitude: -63.10052 },
{ latitude: -17.82154, longitude: -63.10149 },
{ latitude: -17.82089, longitude: -63.10311 },
{ latitude: -17.8201, longitude: -63.10501 },
{ latitude: -17.81944, longitude: -63.10668 },
{ latitude: -17.81844, longitude: -63.10912 },
{ latitude: -17.81812, longitude: -63.10992 },
{ latitude: -17.81733, longitude: -63.1099 },
{ latitude: -17.81587, longitude: -63.10992 },
{ latitude: -17.81508, longitude: -63.1099 },
{ latitude: -17.81415, longitude: -63.10994 },
{ latitude: -17.81359, longitude: -63.10992 },
{ latitude: -17.81336, longitude: -63.11353 },
{ latitude: -17.81308, longitude: -63.11805 },
{ latitude: -17.81296, longitude: -63.1198 },
{ latitude: -17.81278, longitude: -63.12292 },
{ latitude: -17.81265, longitude: -63.12504 },
{ latitude: -17.81243, longitude: -63.12836 },
{ latitude: -17.81238, longitude: -63.1285 },
{ latitude: -17.81237, longitude: -63.12869 },
{ latitude: -17.81166, longitude: -63.12859 },
{ latitude: -17.81064, longitude: -63.12852 },
{ latitude: -17.81013, longitude: -63.1285 },
{ latitude: -17.80812, longitude: -63.12832 },
{ latitude: -17.80791, longitude: -63.12844 },
{ latitude: -17.80776, longitude: -63.12842 },
{ latitude: -17.80733, longitude: -63.12822 },
{ latitude: -17.80699, longitude: -63.12817 },
{ latitude: -17.80484, longitude: -63.12803 },
{ latitude: -17.80363, longitude: -63.12792 },
{ latitude: -17.8029, longitude: -63.12779 },
{ latitude: -17.80251, longitude: -63.12775 },
{ latitude: -17.80249, longitude: -63.12753 },
{ latitude: -17.80234, longitude: -63.12737 },
{ latitude: -17.80213, longitude: -63.12736 },
{ latitude: -17.80194, longitude: -63.12755 },
{ latitude: -17.80175, longitude: -63.12765 },
{ latitude: -17.80079, longitude: -63.12756 },
{ latitude: -17.79904, longitude: -63.12735 },
{ latitude: -17.7965, longitude: -63.12712 },
{ latitude: -17.79565, longitude: -63.12698 },
{ latitude: -17.79316, longitude: -63.12677 },
{ latitude: -17.79265, longitude: -63.12674 },
{ latitude: -17.79259, longitude: -63.12658 },
{ latitude: -17.79264, longitude: -63.12675 },
{ latitude: -17.7926, longitude: -63.1266 },
{ latitude: -17.79247, longitude: -63.12652 },
{ latitude: -17.79229, longitude: -63.12651 },
{ latitude: -17.79208, longitude: -63.12679 },
{ latitude: -17.79204, longitude: -63.12698 },
{ latitude: -17.79213, longitude: -63.12709 },
{ latitude: -17.7922, longitude: -63.1271 },
{ latitude: -17.792, longitude: -63.13014 },
{ latitude: -17.79179, longitude: -63.13299 },
{ latitude: -17.79166, longitude: -63.13438 },
{ latitude: -17.79375, longitude: -63.1346 },
{ latitude: -17.79368, longitude: -63.13521 },
{ latitude: -17.79492, longitude: -63.13534 },
{ latitude: -17.79501, longitude: -63.13469 },
{ latitude: -17.7969, longitude: -63.13489 },
{ latitude: -17.79887, longitude: -63.13507 },
{ latitude: -17.80125, longitude: -63.13525 },
{ latitude: -17.80139, longitude: -63.1354 },
{ latitude: -17.8011, longitude: -63.13952 },
{ latitude: -17.79865, longitude: -63.14926 },
{ latitude: -17.79825, longitude: -63.1496 },
{ latitude: -17.79809, longitude: -63.14986 },
{ latitude: -17.79807, longitude: -63.15013 },
{ latitude: -17.79819, longitude: -63.15045 },
{ latitude: -17.79813, longitude: -63.15083 },
{ latitude: -17.7978, longitude: -63.15167 },
{ latitude: -17.79567, longitude: -63.15683 },
{ latitude: -17.79545, longitude: -63.157 },
{ latitude: -17.79538, longitude: -63.15719 },
{ latitude: -17.79541, longitude: -63.15741 },
{ latitude: -17.7951, longitude: -63.15802 },
{ latitude: -17.79495, longitude: -63.15851 },
{ latitude: -17.79483, longitude: -63.15916 },
{ latitude: -17.79463, longitude: -63.16024 },
{ latitude: -17.79458, longitude: -63.16075 },
{ latitude: -17.7945, longitude: -63.16166 },
{ latitude: -17.7943, longitude: -63.16219 },
{ latitude: -17.79444, longitude: -63.16236 },
{ latitude: -17.79451, longitude: -63.16237},
{ latitude: -17.79462, longitude: -63.16237 },
{ latitude: -17.79469, longitude: -63.16251 },
{ latitude: -17.7948, longitude: -63.16319 },
{ latitude: -17.79493, longitude: -63.16403 },
{ latitude: -17.79479, longitude:  -63.16637 },
{ latitude: -17.79504, longitude: -63.16641 },
{ latitude: -17.79526, longitude: -63.16652 },
{ latitude: -17.79643, longitude: -63.16671 },
{ latitude: -17.79687, longitude: -63.16687 },
{ latitude: -17.79735, longitude: -63.16716 },
{ latitude: -17.79767, longitude: -63.16741 },
{ latitude: -17.79808, longitude: -63.16795 },
{ latitude: -17.79833, longitude: -63.16838 },
{ latitude: -17.79866, longitude: -63.16958 },
{ latitude: -17.79859, longitude: -63.17043 },
{ latitude: -17.79823, longitude: -63.17256 },
{ latitude: -17.79789, longitude: -63.17446 },
{ latitude: -17.79788, longitude: -63.17473 },
{ latitude: -17.79797, longitude: -63.17557 },
{ latitude: -17.79947, longitude: -63.18068 },
{ latitude: -17.79944, longitude: -63.18088 },
{ latitude: -17.8004, longitude: -63.18446 },
{ latitude: -17.8007, longitude: -63.18543 },
{ latitude: -17.80059, longitude: -63.18568 },
{ latitude: -17.79819, longitude: -63.18613 },
{ latitude: -17.79807, longitude: -63.18607 },
{ latitude: -17.79791, longitude: -63.18614 },
{ latitude: -17.79583, longitude: -63.1865 },
{ latitude: -17.79345, longitude: -63.18689 },
{ latitude: -17.79332, longitude: -63.18678 },
{ latitude: -17.79254, longitude: -63.18173 },
{ latitude: -17.79207, longitude:  -63.17897 },
{ latitude: -17.79195, longitude: -63.17799 },
{ latitude: -17.7919, longitude: -63.17764},
{ latitude: -17.79178, longitude: -63.17766 },
{ latitude: -17.7918, longitude: -63.17779 },
{ latitude: -17.79052, longitude: -63.17799},
{ latitude: -17.79046, longitude: -63.17797 },
{ latitude: -17.79041, longitude: -63.17799 },
{ latitude: -17.79037, longitude: -63.17803 },
{ latitude: -17.78821, longitude: -63.1785 },
{ latitude: -17.78653, longitude: -63.1789 },
{ latitude: -17.78553, longitude: -63.17906 },
{ latitude: -17.78462, longitude: -63.17927 },//221
{ latitude: -17.78359, longitude: -63.17935 },
{ latitude: -17.78159, longitude: -63.17961},
{ latitude: -17.77917, longitude: -63.18043 },
{ latitude: -17.77939, longitude: -63.18067 },
{ latitude: -17.77945, longitude: -63.18093},
{ latitude: -17.77927, longitude: -63.18094},
{ latitude: -17.77846, longitude: -63.18108 },
{ latitude: -17.77775, longitude: -63.18119},
{ latitude: -17.7764, longitude: -63.18128 },
{ latitude: -17.77599, longitude: -63.18131 },
{ latitude: -17.77476, longitude: -63.18102},
{ latitude: -17.77356, longitude: -63.18062},
{ latitude: -17.77374, longitude: -63.18221},
{ latitude: -17.77055, longitude: -63.18243},
{ latitude: -17.76964, longitude: -63.18246},
{ latitude: -17.76864, longitude: -63.18238 },
{ latitude: -17.76757, longitude: -63.18212 },
{ latitude: -17.76563, longitude: -63.18138 },
{ latitude: -17.76385, longitude: -63.18068 },
{ latitude: -17.76213, longitude: -63.17998 },
{ latitude: -17.75967, longitude: -63.17903 },
{ latitude: -17.75514, longitude: -63.17723 },
{ latitude: -17.75241, longitude: -63.17617 },
{ latitude: -17.7508, longitude: -63.17548 },
{ latitude: -17.75047, longitude: -63.17517 },
{ latitude: -17.75032, longitude: -63.17494 },
{ latitude: -17.74991, longitude: -63.1748 },
{ latitude: -17.74963, longitude: -63.17488 },
{ latitude: -17.74935, longitude: -63.1749 },
{ latitude: -17.74778, longitude: -63.17438 },
{ latitude: -17.74363, longitude: -63.17273 },
{ latitude: -17.74111, longitude: -63.17175 },
{ latitude: -17.73882, longitude: -63.17085 },
{ latitude: -17.73755, longitude: -63.17037 },
{ latitude: -17.73582, longitude: -63.16967 },
{ latitude: -17.73308, longitude: -63.16861 },
{ latitude: -17.73002, longitude: -63.1674 },
{ latitude: -17.7284, longitude: -63.16675 },
{ latitude: -17.7247, longitude: -63.1653 },
{ latitude: -17.72049, longitude: -63.16362 },
{ latitude: -17.72047, longitude: -63.16339 },
{ latitude: -17.72186, longitude: -63.15904 },
{ latitude: -17.7234, longitude: -63.16011 },
{ latitude: -17.72431, longitude: -63.15679 },
{ latitude: -17.72503, longitude: -63.15546 },
{ latitude: -17.72432, longitude: -63.15519 },
{ latitude: -17.71993, longitude: -63.15301 },
{ latitude: -17.71999, longitude: -63.15376 },
{ latitude: -17.71848, longitude: -63.15384 },
{ latitude: -17.71656, longitude: -63.15374 },
{ latitude: -17.71529, longitude: -63.15364 },
{ latitude: -17.7154, longitude: -63.15142 },
{ latitude: -17.71534, longitude: -63.15077 },
{ latitude: -17.71536, longitude: -63.15059 },
{ latitude: -17.71471, longitude: -63.14764 },
{ latitude: -17.71431, longitude: -63.14552 },
{ latitude: -17.7148, longitude: -63.14472 },
{ latitude: -17.71495, longitude: -63.14457 },
{ latitude: -17.71635, longitude: -63.14372 },
{ latitude: -17.71872, longitude: -63.14207 },
{ latitude: -17.7202, longitude: -63.1418 },

//fin linea 11 vuelta//
  ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="tan"
    strokeWidth={4}
    lineCap="round"
    lineDashPattern={[5]}
    tappable={true}
    onPress={onPress}
  />
  )
}

export default Poli_11v

const styles = StyleSheet.create({})