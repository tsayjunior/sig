import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_1 = ({ onPress=() => {}}) => {
   
    const [coordinates] = useState([
        {
          latitude: -17.78634, 
          longitude: -63.1082
        },
        { 
          latitude:-17.77976, 
          longitude: -63.10794
        },
        {
          latitude: -17.77725, 
          longitude:-63.1077
        },
        { 
          latitude: -17.77712, 
          longitude:-63.10787
        },
        { 
          latitude: -17.77716,
          longitude:  -63.10836
        },
        {  /* 23 */
          latitude: -17.77753, 
          longitude: -63.10942
        },
        {  
          latitude:-17.78024, 
          longitude: -63.1165
        },
        {  
          latitude:-17.77828, 
          longitude:-63.11789
        },
        {  
          latitude: -17.77795,
          longitude:  -63.11721
        },
        {  
          latitude: -17.77717, 
          longitude: -63.11759
        },
        {   /* 27 */
          latitude: -17.77771, 
          longitude:-63.11909
        },
        { 
          latitude: -17.77771, 
          longitude: -63.11909
        },
        { 
          latitude: -17.77498, 
          longitude: -63.11993
        },
        { 
          latitude:-17.77445, 
          longitude:-63.11782
        },
        { 
          latitude:-17.77316, 
          longitude: -63.11818
        },
        { 
          latitude:-17.77329,
          longitude:  -63.11876
        },
        { 
          latitude:-17.77084, 
          longitude: -63.11891
        },
        { 
          latitude: -17.77099,
          longitude: -63.11978
        },
        { 
          latitude: -17.76945,
          longitude: -63.12061
        },
        { 
          latitude: -17.77932, 
          longitude: -63.14638
        },
        { 
          latitude: -17.77941,
          longitude: -63.14694
        },
        { 
          latitude:-17.77927,
          longitude:  -63.14723
        },
        { 
          latitude:-17.77925, 
          longitude: -63.14754
        },
        { 
          latitude: -17.77944, 
          longitude: -63.14783
        },
        { 
          latitude: -17.77961,
          longitude:  -63.14794
        },
        { 
          latitude:-17.78004, 
          longitude: -63.14853
        },
        { 
          latitude:-17.78031, 
          longitude: -63.14915
        },
        { 
          latitude: -17.7805, 
          longitude: -63.14974
        },
        { 
          latitude:-17.78074, 
          longitude: -63.15075
        },
        { 
          latitude:-17.78115,
          longitude:  -63.15409
        },
        { 
          latitude:-17.78214, 
          longitude: -63.16467
        },
        { 
          latitude: -17.78227,
          longitude:  -63.16536
        },
        { /* 33 */
          latitude: -17.7829, 
          longitude: -63.17191
        },
        { 
          latitude:-17.78277, 
          longitude: -63.17215
        },
        { /* 35 */
            latitude:-17.78058, 
            longitude:-63.17246
          },
          { 
            latitude:-17.78059, 
            longitude: -63.17268
          },
          { 
            latitude:-17.7809, 
            longitude: -63.17265
          },
          { 
            latitude:-17.78109, 
            longitude: -63.17488
          },
          { 
            latitude:-17.78141, 
            longitude:-63.17745
          },
          { 
            latitude:-17.78342, 
            longitude: -63.17723
          },
          { 
            latitude:-17.786, 
            longitude:-63.17689
          },
          { 
            latitude:-17.78631,
            longitude:  -63.17784
          },
          { 
            latitude:-17.78651, 
            longitude:-63.17889
          },
          { 
            latitude:-17.78738, 
            longitude:-63.18439
          },
          { 
            latitude:-17.78811, 
            longitude: -63.18726
          },
          { 
            latitude:-17.7888, 
            longitude: -63.18793
          },
          { 
            latitude:-17.78928, 
            longitude: -63.18774
          },
          { 
            latitude:-17.78944, 
            longitude: -63.18777
          },
          { 
            latitude:-17.78959, 
            longitude: -63.18763
          },
          { 
            latitude:-17.79316, 
            longitude:-63.18711
          },
          { 
            latitude:-17.79333, 
            longitude:-63.18738
          },
          { 
            latitude:-17.79788, 
            longitude: -63.19264
          },
          { 
            latitude:-17.79792, 
            longitude: -63.19284 
          },
          { 
            latitude:-17.79814, 
            longitude:-63.19296
          },
          { 
            latitude:-17.80385, 
            longitude: -63.1994
          },
          { 
            latitude:-17.80493, 
            longitude:-63.19855
          },
          { 
            latitude:-17.80532, 
            longitude: -63.19905 
          },
          { 
            latitude:-17.80669, 
            longitude:-63.19772
          },
          { 
            latitude:-17.80868, 
            longitude: -63.20049
          },
          { 
            latitude:-17.81872,
            longitude:  -63.19884
          },
          { 
            latitude:-17.81826, 
            longitude:-63.19961
          },
          { 
            latitude:-17.81854, 
            longitude: -63.19989
          },
          { 
            latitude:-17.8192, 
            longitude: -63.19873
          },
          { 
            latitude:-17.81945, 
            longitude:-63.19861
          },
          { 
            latitude:-17.81964,
            longitude:  -63.19863
          },
          { 
            latitude:-17.82551, 
            longitude: -63.20157
          },
          { 
            latitude:-17.82854, 
            longitude: -63.20314
          },
          { 
            latitude:-17.83541,
            longitude:  -63.19699
          },
          { 
            latitude:-17.83893, 
            longitude: -63.20103
          },
          { 
            latitude:-17.83933,
            longitude:  -63.20017
          },
          { 
            latitude:-17.84289, 
            longitude: -63.20199
          },
          { 
            latitude:-17.84383, 
            longitude:-63.20013
          },
          { 
            latitude:-17.84704,
            longitude:  -63.20176
          },
          { /* 85 */
            latitude:-17.84666,
            longitude:  -63.20249
          },
          { 
            latitude:-17.84916, 
            longitude: -63.20404
          },
          { 
            latitude: -17.85143,
            longitude:  -63.20021
          },
          { 
            latitude:-17.85292,
            longitude: -63.20117
          },
          { 
            latitude: -17.85277,
            longitude: -63.20142
          },
          { 
            latitude:-17.85526,
            longitude: -63.20334
          },
          { 
            latitude: -17.85458,
            longitude:  -63.20437
          },/* fin */
          
         

       
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="black"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
  />
  )
}

export default Poli_1

