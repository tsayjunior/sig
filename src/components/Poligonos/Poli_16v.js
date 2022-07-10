import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Polyline } from "react-native-maps";

const Poli_16v = ({ onPress = () => { } }) => {

  const [coordinates] = useState([
    { latitude: -17.72678, longitude: -63.1336 },
    { latitude: -17.72684, longitude: -63.13347 },
    { latitude: -17.7276, longitude: -63.13203 },
    { latitude: -17.72829, longitude: -63.13079 },
    { latitude: -17.72926, longitude: -63.12899 },
    { latitude: -17.72975, longitude: -63.12922 },
    { latitude: -17.7298, longitude: -63.12939 },
    { latitude: -17.72943, longitude: -63.13005 },
    { latitude: -17.72878, longitude: -63.13134 },
    { latitude: -17.72843, longitude: -63.13193 },
    { latitude: -17.72974, longitude: -63.13226 },
    { latitude: -17.72912, longitude: -63.13347 },
    { latitude: -17.72923, longitude: -63.13351 },
    { latitude: -17.72953, longitude: -63.13293 },
    { latitude: -17.73019, longitude: -63.13309 },
    { latitude: -17.73216, longitude: -63.13357 },
    { latitude: -17.73308, longitude: -63.13381 },
    { latitude: -17.73412, longitude: -63.13467 },
    { latitude: -17.73545, longitude: -63.1358 },
    { latitude: -17.73667, longitude: -63.13685 },
    { latitude: -17.73563, longitude: -63.13871 },
    { latitude: -17.73466, longitude: -63.14035 },
    { latitude: -17.73644, longitude: -63.14153 },
    { latitude: -17.73652, longitude: -63.1418 },
    { latitude: -17.73616, longitude: -63.14235 },
    { latitude: -17.73544, longitude: -63.14306 },
    { latitude: -17.73497, longitude: -63.14356 },
    { latitude: -17.73485, longitude: -63.14364 },
    { latitude: -17.73461, longitude: -63.14368 },
    { latitude: -17.7345, longitude: -63.14391 },
    { latitude: -17.73458, longitude: -63.14415 },
    { latitude: -17.73484, longitude: -63.1442 },
    { latitude: -17.73496, longitude: -63.14411 },
    { latitude: -17.73568, longitude: -63.14457 },
    { latitude: -17.73692, longitude: -63.14538 },
    { latitude: -17.7379, longitude: -63.14601 },
    { latitude: -17.73995, longitude: -63.14737 },
    { latitude: -17.74087, longitude: -63.14801 },
    { latitude: -17.73913, longitude: -63.15098 },
    { latitude: -17.73933, longitude: -63.15108 },
    { latitude: -17.7411, longitude: -63.14815 },
    { latitude: -17.74297, longitude: -63.14936 },
    { latitude: -17.74424, longitude: -63.1502 },
    { latitude: -17.74443, longitude: -63.1503 },
    { latitude: -17.74753, longitude: -63.15234 },
    { latitude: -17.74763, longitude: -63.15246 },
    { latitude: -17.74767, longitude: -63.15262 },
    { latitude: -17.74779, longitude: -63.15268 },
    { latitude: -17.7479, longitude: -63.15272 },
    { latitude: -17.74982, longitude: -63.15409 },
    { latitude: -17.75167, longitude: -63.15535 },
    { latitude: -17.75292, longitude: -63.15621 },
    { latitude: -17.75462, longitude: -63.1574 },
    { latitude: -17.75411, longitude: -63.15815 },
    { latitude: -17.75435, longitude: -63.15834 },
    { latitude: -17.75519, longitude: -63.15706 },
    { latitude: -17.75635, longitude: -63.15563 },
    { latitude: -17.757, longitude: -63.15546 },
    { latitude: -17.76002, longitude: -63.15748 },
    { latitude: -17.76319, longitude: -63.1596 },
    { latitude: -17.76328, longitude: -63.15978 },
    { latitude: -17.76338, longitude: -63.16003 },
    { latitude: -17.76358, longitude: -63.16011 },
    { latitude: -17.76374, longitude: -63.16009 },
    { latitude: -17.76444, longitude: -63.16075 },
    { latitude: -17.76446, longitude: -63.16098 },
    { latitude: -17.76465, longitude: -63.16115 },
    { latitude: -17.76482, longitude: -63.16114 },
    { latitude: -17.76528, longitude: -63.1615 },
    { latitude: -17.76602, longitude: -63.16218 },
    { latitude: -17.76698, longitude: -63.16306 },
    { latitude: -17.76805, longitude: -63.1641 },
    { latitude: -17.76943, longitude: -63.1657 },
    { latitude: -17.77104, longitude: -63.16761 },
    { latitude: -17.77171, longitude: -63.16839 },
    { latitude: -17.77263, longitude: -63.16958 },
    { latitude: -17.77277, longitude: -63.16978 },
    { latitude: -17.77321, longitude: -63.17075 },
    { latitude: -17.77358, longitude: -63.17145 },
    { latitude: -17.774, longitude: -63.17208 },
    { latitude: -17.77436, longitude: -63.17247 },
    { latitude: -17.77453, longitude: -63.17258 },
    { latitude: -17.77417, longitude: -63.17403 },
    { latitude: -17.77344, longitude: -63.17426 },
    { latitude: -17.77428, longitude: -63.17523 },
    { latitude: -17.77483, longitude: -63.17635 },
    { latitude: -17.77448, longitude: -63.17799 },
    { latitude: -17.77449, longitude: -63.17996 },
    { latitude: -17.77568, longitude: -63.17988 },
    { latitude: -17.77614, longitude: -63.1798 },
    { latitude: -17.77768, longitude: -63.1795 },
    { latitude: -17.77842, longitude: -63.17932 },
    { latitude: -17.77867, longitude: -63.17921 },
    { latitude: -17.77933, longitude: -63.17906 },
    { latitude: -17.78046, longitude: -63.1788 },
    { latitude: -17.78112, longitude: -63.17862 },
    { latitude: -17.7817, longitude: -63.17847 },
    { latitude: -17.7825, longitude: -63.17836 },
    { latitude: -17.78326, longitude: -63.17829 },
    { latitude: -17.78431, longitude: -63.1782 },
    { latitude: -17.78496, longitude: -63.1781 },
    { latitude: -17.7856, longitude: -63.178 },
    { latitude: -17.78698, longitude: -63.17768 },
    { latitude: -17.78795, longitude: -63.17746 },
    { latitude: -17.78903, longitude: -63.17721 },
    { latitude: -17.79021, longitude: -63.17697 },
    { latitude: -17.79113, longitude: -63.17678 },
    { latitude: -17.79165, longitude: -63.17666 },
    { latitude: -17.79179, longitude: -63.17781 },
    { latitude: -17.79209, longitude: -63.17952 },
    { latitude: -17.79239, longitude: -63.18135 },
    { latitude: -17.79272, longitude: -63.18326 },
    { latitude: -17.79321, longitude: -63.18641 },
    { latitude: -17.79318, longitude: -63.18687 },
    { latitude: -17.79314, longitude: -63.1871 },
    { latitude: -17.79336, longitude: -63.18722 },
    { latitude: -17.79352, longitude: -63.18707 },
    { latitude: -17.79517, longitude: -63.1868 },
    { latitude: -17.79788, longitude: -63.18634 },
    { latitude: -17.79804, longitude: -63.18641 },
    { latitude: -17.79815, longitude: -63.18636 },
    { latitude: -17.79821, longitude: -63.18632 },
    { latitude: -17.80052, longitude: -63.1859 },
    { latitude: -17.80086, longitude: -63.18574 },
    { latitude: -17.80089, longitude: -63.18535 },
    { latitude: -17.801, longitude: -63.18514 },
    { latitude: -17.80147, longitude: -63.18508 },
    { latitude: -17.80182, longitude: -63.18653 },
    { latitude: -17.80188, longitude: -63.18723 },
    { latitude: -17.80243, longitude: -63.18723 },
    { latitude: -17.80431, longitude: -63.18724 },
    { latitude: -17.80581, longitude: -63.18725 },
    { latitude: -17.80755, longitude: -63.18728 },
    { latitude: -17.80851, longitude: -63.18729 },
    { latitude: -17.80967, longitude: -63.18731 },
    { latitude: -17.81065, longitude: -63.18729 },
    { latitude: -17.81061, longitude: -63.18915 },
    { latitude: -17.81055, longitude: -63.18918 },
    { latitude: -17.81059, longitude: -63.19018 },
    { latitude: -17.81039, longitude: -63.19023 },
    { latitude: -17.81048, longitude: -63.19028 },
    { latitude: -17.81088, longitude: -63.19024 },
    { latitude: -17.81137, longitude: -63.19032 },
    { latitude: -17.81194, longitude: -63.19025 },
    { latitude: -17.81235, longitude: -63.19025 },
    { latitude: -17.81251, longitude: -63.19036 },
    { latitude: -17.81273, longitude: -63.19042 },
    { latitude: -17.81292, longitude: -63.19033 },
    { latitude: -17.81297, longitude: -63.19004 },
    { latitude: -17.81295, longitude: -63.18954 },
    { latitude: -17.81316, longitude: -63.18905 },
    { latitude: -17.81317, longitude: -63.18906 },
    { latitude: -17.81466, longitude: -63.18885 },
    { latitude: -17.81562, longitude: -63.18855 },
    { latitude: -17.81685, longitude: -63.18823 },
    { latitude: -17.8179, longitude: -63.18805 },
    { latitude: -17.81964, longitude: -63.18777 },
    { latitude: -17.8223, longitude: -63.18729 },
    { latitude: -17.82216, longitude: -63.18823 },
    { latitude: -17.82207, longitude: -63.18852 },
    { latitude: -17.82183, longitude: -63.18874 },
    { latitude: -17.82172, longitude: -63.18903 },
    { latitude: -17.82178, longitude: -63.18937 },
    { latitude: -17.82194, longitude: -63.18955 },
    { latitude: -17.82223, longitude: -63.18964 },
    { latitude: -17.82234, longitude: -63.18963 },
    { latitude: -17.82286, longitude: -63.18593 },
    { latitude: -17.82294, longitude: -63.18487 },
    { latitude: -17.82322, longitude: -63.18455 },
    { latitude: -17.82325, longitude: -63.18417 },
    { latitude: -17.82299, longitude: -63.18376 },
    { latitude: -17.82292, longitude: -63.18094 },
    { latitude: -17.82244, longitude: -63.17751 },
    { latitude: -17.82255, longitude: -63.17721 },
    { latitude: -17.82288, longitude: -63.17712 },
    { latitude: -17.82417, longitude: -63.17705 },
  ]);
  return (
    <Polyline
      coordinates={coordinates}
      strokeColor="blue"
      strokeWidth={4}
      lineCap="round"
      tappable={true}
      lineJoin="round"
      onPress={onPress}
      lineDashPattern={[5]}
    />
  )
}

export default Poli_16v

const styles = StyleSheet.create({})