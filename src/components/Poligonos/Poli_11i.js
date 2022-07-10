import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Polyline } from "react-native-maps";

const Poli_11i = ({onPress = () => {}}) => {

  const [coordinates] = useState([
    //inicio  de ida de linea 11//
    { latitude: -17.72029, longitude: -63.14178},
    { latitude: -17.71876, longitude: -63.14205},
    { latitude: -17.71808, longitude: -63.14251},
    { latitude: -17.71632, longitude: -63.14374 },
    { latitude: -17.71496, longitude: -63.14455 },//8
    { latitude: -17.71479, longitude: -63.14473 },
    { latitude: -17.7143, longitude: -63.1455 },
    { latitude: -17.71471, longitude: -63.14764 },
    { latitude: -17.715, longitude: -63.14884 },
    { latitude: -17.71536, longitude:  -63.15058 },//13
    { latitude: -17.71534, longitude: -63.15087 },
    { latitude: -17.71539, longitude: -63.15118 },
    { latitude: -17.71528, longitude: -63.15365 },
    { latitude: -17.71723, longitude: -63.15376 },//17
    { latitude: -17.71849, longitude: -63.15385 },
    { latitude: -17.72, longitude: -63.15377 },
    { latitude: -17.71993, longitude: -63.15321 },
    { latitude: -17.71994, longitude: -63.153},
    { latitude: -17.72058, longitude: -63.15329 },
    { latitude: -17.72299, longitude: -63.15449 },
    { latitude: -17.72501, longitude: -63.15548 },//24
    { latitude: -17.72431, longitude: -63.15681 },
    { latitude: -17.72405, longitude: -63.15776 },
    { latitude: -17.72357, longitude: -63.15934 },
    { latitude: -17.72339, longitude: -63.16011 },
    { latitude: -17.72182, longitude: -63.15903 },
    { latitude: -17.72112, longitude: -63.16132 },//30
    { latitude: -17.72041, longitude: -63.16358},
    { latitude: -17.7184, longitude: -63.16279},
    { latitude: -17.71626, longitude: -63.16199 },
    { latitude: -17.71603, longitude: -63.16189 },
    { latitude: -17.71595, longitude: -63.16205 },//35
    { latitude: -17.71634, longitude: -63.16216 },
    { latitude: -17.71668, longitude: -63.16231 },
    { latitude: -17.71904, longitude: -63.16321},
    { latitude: -17.72057, longitude:  -63.16386 },
    { latitude: -17.72162, longitude: -63.16421 },//40
    { latitude: -17.72331, longitude: -63.16487 },
    { latitude: -17.72354, longitude: -63.16499 },
    { latitude: -17.72481, longitude: -63.16546 },
    { latitude: -17.72735, longitude: -63.16647 },
    { latitude: -17.72951, longitude: -63.16733 },//45
    { latitude: -17.73235, longitude: -63.16841 },
    { latitude: -17.73467, longitude: -63.16934 },
    { latitude: -17.73761, longitude: -63.1705 },
    { latitude: -17.74014, longitude: -63.17148},
    { latitude: -17.7444, longitude: -63.17322 },//50
    { latitude: -17.74906, longitude: -63.17507},
    { latitude: -17.74942, longitude: -63.17538 },
    { latitude: -17.74968, longitude: -63.1757 },
    { latitude: -17.74989, longitude: -63.17578 },
    { latitude: -17.75019, longitude: -63.17572},
    { latitude: -17.75061, longitude: -63.1757 },//56
    { latitude: -17.75184, longitude: -63.17614 },
    { latitude: -17.75634, longitude: -63.17788 },
    { latitude: -17.76138, longitude:-63.17983 },
    { latitude: -17.76274, longitude: -63.1804 },
    { latitude: -17.76357, longitude: -63.18069 },
    { latitude: -17.7669, longitude: -63.18204 },//62
    { latitude: -17.76831, longitude: -63.18247 },
    { latitude: -17.76949, longitude: -63.18261 },
    { latitude: -17.77495, longitude:  -63.18224},
    { latitude: -17.7747, longitude: -63.17995 },
    { latitude: -17.77569, longitude: -63.17988 },
    { latitude: -17.7784, longitude: -63.17933},//68
    { latitude: -17.7796, longitude: -63.179 },
    { latitude: -17.78088, longitude: -63.17869 },
    { latitude: -17.78207, longitude: -63.17841 },
    { latitude: -17.78272, longitude:  -63.17833},
    { latitude: -17.78456, longitude: -63.17818 },//73
    { latitude: -17.78633, longitude: -63.17783},
    { latitude: -17.78794, longitude: -63.17746 },
    { latitude: -17.78919, longitude: -63.17717 },
    { latitude: -17.79114, longitude: -63.17678 },
    { latitude: -17.79165, longitude:  -63.17666 },
    { latitude: -17.79178, longitude:-63.17776 },
    { latitude: -17.79227, longitude: -63.18053 },//80
    { latitude: -17.79264, longitude: -63.18276 },
    { latitude: -17.79321, longitude: -63.18684 },
    { latitude: -17.79315, longitude:  -63.18696 },
    { latitude: -17.79316, longitude: -63.18708 },
    { latitude: -17.79325, longitude: -63.18718 },//85
    { latitude: -17.7934, longitude: -63.18717 },
    { latitude: -17.79349, longitude: -63.18707 },
    { latitude: -17.79792, longitude: -63.18635 },//88
    { latitude: -17.79799, longitude: -63.1864},
    { latitude: -17.79805, longitude: -63.18641 },
    { latitude: -17.79812, longitude:  -63.18638 },
    { latitude: -17.7982, longitude: -63.18631 },//92
    { latitude: -17.79991, longitude: -63.18601 },
    { latitude: -17.80046, longitude: -63.18592 },
    { latitude: -17.80079, longitude: -63.18579 },
    { latitude: -17.80085, longitude: -63.1857 },
    { latitude: -17.80088, longitude: -63.18552 },
    { latitude: -17.80088, longitude: -63.18531 },
    { latitude: -17.79948, longitude: -63.18022 },
    { latitude: -17.79821, longitude: -63.17588 },
    { latitude: -17.79814, longitude: -63.17502 },
    { latitude: -17.79807, longitude: -63.17471 },//102
    { latitude: -17.7981, longitude:  -63.1742 },
    { latitude: -17.79879, longitude: -63.17013 },
    { latitude: -17.7988, longitude: -63.16932 },
    { latitude: -17.79875, longitude: -63.16895 },
    { latitude: -17.79863, longitude: -63.16855 },
    { latitude: -17.79828, longitude:  -63.16791 },//108
    { latitude: -17.79778, longitude: -63.16729 },
    { latitude: -17.79735, longitude: -63.16697 },
    { latitude: -17.79673, longitude: -63.16665 },
    { latitude: -17.79631, longitude:  -63.16654 },
    { latitude: -17.795, longitude: -63.16628 },
    { latitude: -17.79441, longitude: -63.16616 },
    { latitude: -17.79171, longitude:  -63.16573},//115
    { latitude: -17.79088, longitude: -63.16548 },
    { latitude: -17.78823, longitude: -63.16454 },
    { latitude: -17.78789, longitude:  -63.16427 },
    { latitude: -17.78765, longitude: -63.16403 },
    { latitude: -17.78796, longitude: -63.16283 },//120
    { latitude: -17.78807, longitude: -63.16271 },
    { latitude: -17.78823, longitude:  -63.16243 },
    { latitude: -17.78837, longitude: -63.16236},
    { latitude: -17.78882, longitude: -63.16226 },
    { latitude: -17.79043, longitude:  -63.16267 },
    { latitude: -17.79193, longitude: -63.16293 },
    { latitude: -17.79233, longitude:  -63.16291},
    { latitude: -17.79298, longitude:-63.16279 },
    { latitude: -17.79408, longitude:-63.16245 },
    { latitude: -17.79444, longitude: -63.16236 },//200
    { latitude: -17.79451, longitude: -63.16237 },
    { latitude: -17.79462, longitude: -63.16237 },
    { latitude: -17.7947, longitude: -63.16232 },
    { latitude: -17.79475, longitude:  -63.1622},
    { latitude: -17.79481, longitude: -63.16211 },
    { latitude: -17.79488, longitude: -63.16208 },
    { latitude: -17.79481, longitude: -63.16097 },
    { latitude: -17.79488, longitude: -63.16067 },//208
    { latitude: -17.79498, longitude:  -63.16058 },
    { latitude: -17.79501, longitude: -63.16048 },
    { latitude: -17.79498, longitude: -63.16033 },
    { latitude: -17.79487, longitude: -63.16023 },
    { latitude: -17.79511, longitude: -63.15857 },
    { latitude: -17.79543, longitude: -63.15779 },
    { latitude: -17.79565, longitude: -63.15747 },//215
    { latitude: -17.79578, longitude: -63.15746 },
    { latitude: -17.79589, longitude: -63.15737 },
    { latitude: -17.79595, longitude: -63.15723 },
    { latitude: -17.7959, longitude: -63.15704 },
    { latitude: -17.79587, longitude: -63.15691 },//220
    { latitude: -17.7983, longitude: -63.15095 },
    { latitude: -17.79867, longitude: -63.15056 },
    { latitude: -17.79889, longitude: -63.15048},
    { latitude: -17.79905, longitude: -63.15028 },//139
    { latitude: -17.79913, longitude: -63.14995 },
    { latitude: -17.79894, longitude: -63.14954 },
    { latitude: -17.79895, longitude: -63.14915 },
    { latitude: -17.80076, longitude: -63.14195 },
    { latitude: -17.8011, longitude: -63.1406 },
    { latitude: -17.8016, longitude:  -63.1352 },
    { latitude: -17.80142, longitude: -63.13516 },//146
    { latitude: -17.80124, longitude:  -63.13525 },
    { latitude: -17.79751, longitude: -63.13495 },
    { latitude: -17.79499, longitude: -63.1347 },//149
    { latitude: -17.79505, longitude: -63.13407},
    { latitude: -17.7938, longitude:-63.13395 },
    { latitude: -17.79373, longitude: -63.1346 },
    { latitude: -17.79183, longitude: -63.1344 },
    { latitude: -17.79208, longitude: -63.13168 },
    { latitude: -17.7923, longitude:  -63.12854 },//155
    { latitude: -17.79237, longitude: -63.12705},
    { latitude: -17.79261, longitude: -63.12684 },
    { latitude: -17.79264, longitude: -63.12676 },
    { latitude: -17.79319, longitude: -63.12677 },
    { latitude: -17.7974, longitude: -63.12719},//160
    { latitude: -17.79841, longitude: -63.12729},
    { latitude: -17.79985, longitude: -63.12746 },//162
    { latitude: -17.80174, longitude: -63.12768 },
    { latitude: -17.80208, longitude: -63.12783 },
    { latitude: -17.80231, longitude: -63.12785 },
    { latitude: -17.80252, longitude:-63.12776 },
    { latitude: -17.8038, longitude: -63.12795 },
    { latitude: -17.80704, longitude: -63.12818 },
    { latitude: -17.80757, longitude: -63.12833 },
    { latitude: -17.8078, longitude: -63.12844 },//170
    { latitude: -17.80794, longitude: -63.12843 },
    { latitude: -17.80815, longitude: -63.12832 },
    { latitude: -17.81066, longitude: -63.12853 },
    { latitude: -17.81236, longitude: -63.12865 },
    { latitude: -17.8124, longitude: -63.12872 },
    { latitude: -17.81249, longitude:  -63.12878 },//176
    { latitude: -17.81261, longitude: -63.12879 },
    { latitude: -17.81273, longitude: -63.12875 },
    { latitude: -17.81278, longitude: -63.12857 },
    { latitude: -17.81274, longitude: -63.12839 },
    { latitude: -17.81311, longitude:  -63.12217 },
    { latitude: -17.81328, longitude: -63.11977 },
    { latitude: -17.81333, longitude: -63.11917 },
    { latitude: -17.81343, longitude: -63.11899 },
    { latitude: -17.81338, longitude: -63.11838 },
    { latitude: -17.81388, longitude:  -63.10998 },
    { latitude: -17.81425, longitude: -63.10994 },
    { latitude: -17.81814, longitude: -63.10989 },
    { latitude: -17.81889, longitude:  -63.10809 },
    { latitude: -17.81977, longitude: -63.1059 },
    { latitude: -17.82039, longitude:  -63.10437 },
    { latitude: -17.82056, longitude: -63.10445 },
    { latitude: -17.82161, longitude: -63.10176 },
    { latitude: -17.82173, longitude: -63.10153},
    { latitude: -17.82417, longitude: -63.09521 },
    
    //fin  de ida de linea 11//
  ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="coral"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
    />
  )
}

export default Poli_11i

