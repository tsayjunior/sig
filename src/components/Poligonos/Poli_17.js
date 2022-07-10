import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_17 = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        {
          latitude: -17.79056,
          longitude:  -63.17201,
        },
        { 
          latitude: -17.79024,
          longitude:  -63.17173,
        },
        {
          latitude: -17.79002,
          longitude: -63.17159,
        },
        { 
          latitude: -17.78985,
          longitude:-63.1715,
        },
        { 
          latitude: -17.78968,
          longitude: -63.17144
        },/* fin 5 */
        {  
          latitude: -17.78945,
          longitude:-63.17137
        },
        {  
          latitude: -17.78924,
          longitude:-63.17133
        },
        {   /* 7 */
          latitude: -17.78886,
          longitude:-63.17127
        },
        {  
          latitude: -17.78846,
          longitude: -63.1713
        },
        {  
          latitude: -17.78795,
          longitude: -63.17138
        }, /* 10 */
        {   
          latitude: -17.78745,
          longitude:-63.17145
        },
        { 
          latitude: -17.787,
          longitude: -63.17151
        },
        { 
          latitude: -17.78653, 
          longitude: -63.17158
        }, /* 13 */
        { 
          latitude: -17.78573, 
          longitude: -63.17169
        },
        { 
          latitude: -17.78562, 
          longitude: -63.17169
        },
        { 
          latitude: -17.78554, 
          longitude: -63.17166
        },
        { 
          latitude: -17.78544,
          longitude:  -63.17166
        },
        { 
          latitude: -17.78538, 
          longitude: -63.17173
        }, /* 18 */
        { 
          latitude: -17.7853, 
          longitude: -63.17177
        },
        { 
          latitude: -17.78522, 
          longitude: -63.17178
        },
        { 
          latitude: -17.78483, 
          longitude: -63.17185
        },
        { 
          latitude: -17.78429, 
          longitude: -63.17193
        }, /* 22 */
        { 
          latitude: -17.78321, 
          longitude: -63.1721
        },
        { 
          latitude: -17.78311, 
          longitude: -63.17206
        },
        { 
          latitude: -17.783,
          longitude:  -63.17203
        },
        { 
          latitude: -17.78292, 
          longitude: -63.17205
        },
        { 
          latitude: -17.78284,
          longitude: -63.17211
        }, /* 27 */
        { 
          latitude: -17.78275, 
          longitude: -63.17216
        },
        { 
          latitude: -17.78264, 
          longitude: -63.1722
        },
        { 
          latitude: -17.78246, 
          longitude: -63.17225
        }, /* 30 */
        { 
          latitude: -17.78186, 
          longitude: -63.17232
        },
        { 
          latitude: -17.78129, 
          longitude: -63.17239
        },
        { /* 32 */
          latitude: -17.78016, 
          longitude: -63.17254
        },
        { 
          latitude: -17.7795, 
          longitude: -63.17262
        },
        { /* 34 */
            latitude:-17.77892, 
            longitude: -63.17276
          },
          { 
            latitude:-17.77832, 
            longitude: -63.1729
          },
          { 
            latitude:-17.77827, 
            longitude: -63.17291
          },
          { 
            latitude:-17.77819,
            longitude:  -63.17287
          }, /* 38 */
          { 
            latitude:-17.77811, 
            longitude: -63.17286
          },
          { 
            latitude:-17.77805, 
            longitude: -63.17288
          },
          { 
            latitude:-17.77798, 
            longitude: -63.17294
          },
          { 
            latitude:-17.77792, 
            longitude: -63.17299
          }, /* 42 */ 
          { 
            latitude:-17.77782, 
            longitude: -63.17301
          },
          { 
            latitude:-17.77735, 
            longitude: -63.17314
          },
          { 
            latitude:-17.77704, 
            longitude: -63.17327
          },
          { 
            latitude:-17.77667, 
            longitude: -63.17347
          }, /* 46 */
          { 
            latitude:-17.77622,
            longitude:  -63.17383
          },
          { 
            latitude:-17.77602, 
            longitude: -63.17401
          },
          { 
            latitude:-17.77567,
            longitude:  -63.17443
          },
          { 
            latitude:-17.77557, 
            longitude: -63.17456
          }, /* 50 */
          { 
            latitude:-17.77547, 
            longitude:  -63.17459
          },
          { 
            latitude:-17.77541, 
            longitude: -63.17464
          },
          { 
            latitude:-17.77537, 
            longitude: -63.17472
          },
          { 
            latitude:-17.77537, 
            longitude: -63.17481
          }, /* 54 */
          { 
            latitude:-17.77538, 
            longitude: -63.17487
          },
          { 
            latitude:-17.77537,
            longitude:  -63.17492
          },
          { 
            latitude:-17.77533, 
            longitude: -63.17502
          }, /* 57 */
          { 
            latitude:-17.77482, 
            longitude: -63.17635
          }, /* 59 */ 
          { 
            latitude:-17.77457, 
            longitude: -63.17741
          },
          { 
            latitude:-17.77444,
            longitude:  -63.17872
          },
          { 
            latitude:-17.77448, 
            longitude: -63.1799
          }, /* 62 */
          { 
            latitude:-17.77452, 
            longitude: -63.18094
          }, /* 63 */
          { 
            latitude:-17.77498, 
            longitude: -63.18286
          }, /* 66 */
          { 
            latitude:-17.77549, 
            longitude: -63.1846
          }, /* 67 */
          { 
            latitude:-17.77604, 
            longitude: -63.18619
          }, /* 69 */
          { 
            latitude:-17.7762,
            longitude: -63.18648
          }, /* 70 */
          { 
            latitude:-17.77698, 
            longitude: -63.18751
          }, /*72*/
          { 
            latitude:-17.77737, 
            longitude: -63.18783
          },
          { 
            latitude:-17.77799,
            longitude: -63.18826
          }, /*74*/
          { 
            latitude:-17.77833,
            longitude:  -63.18845
          },
          { 
            latitude:-17.77892,
            longitude:-63.18868
          }, /*76*/
          { 
            latitude:-17.77975, 
            longitude: -63.18891
          }, /*79*/
          { 
            latitude: -17.78094,
            longitude: -63.18903
          },
          { /* 80 */
            latitude:-17.78219,
            longitude: -63.18902
          },
          { 
            latitude: -17.78423, 
            longitude: -63.18903
          }, /* 82 */
          { 
            latitude: -17.78426, 
            longitude: -63.18904
          },
          { 
            latitude: -17.78427, 
            longitude: -63.18906
          },
          { 
            latitude: -17.78432, 
            longitude: -63.18909
          }, /*85*/
          { 
            latitude: -17.78438, 
            longitude: -63.18912
          },
          { 
            latitude: -17.78443, 
            longitude: -63.18912
          },
          { 
            latitude: -17.78447, 
            longitude: -63.18912
          }, /*88*/
          { 
            latitude: -17.78451, 
            longitude:  -63.18909
          },
          { 
            latitude: -17.78455, 
            longitude:-63.18906
          },
          { 
            latitude: -17.78459, 
            longitude: -63.18903
          },
          { 
            latitude: -17.78463, 
            longitude: -63.18903
          }, /*92*/
          { 
            latitude: -17.78552, 
            longitude: -63.18899
          },
          { 
            latitude: -17.78573, 
            longitude: -63.18898
          },
          { 
            latitude: -17.7865, 
            longitude: -63.18878
          }, /*95*/
          { 
            latitude: -17.78926, 
            longitude: -63.18775
          },
          { 
            latitude: -17.78932,
            longitude: -63.18773
          },
          { /* 97 */
            latitude: -17.78936, 
            longitude:  -63.18775
          },
          { 
            latitude: -17.78942, 
            longitude: -63.18775
          },
          { 
            latitude: -17.78946, 
            longitude: -63.18773
          }, /*100*/
          { 
            latitude: -17.78951,
            longitude:  -63.18769
          },
          { 
            latitude: -17.78955,
            longitude: -63.18765
          },
          { 
            latitude:-17.78962, 
            longitude:-63.18763
          }, /*103*/
          { 
            latitude: -17.79037, 
            longitude: -63.18749
          },
          { 
            latitude: -17.79166, 
            longitude: -63.1873
          },
          { 
            latitude: -17.79316,
            longitude:  -63.18712
          }, /*106*/
          { 
            latitude: -17.79321, 
            longitude: -63.18716
          },
          { 
            latitude: -17.79326, 
            longitude: -63.18719
          },
          { 
            latitude: -17.79331,
            longitude: -63.18719
          },
          { 
            latitude: -17.79336, 
            longitude:-63.18717 
          }, /*110*/
          { 
            latitude: -17.7934, 
            longitude: -63.18714
          },
          { 
            latitude: -17.79344, 
            longitude: -63.1871
          },
          { 
            latitude: -17.79346, 
            longitude: -63.18703
          }, /*113*/
          { 
            latitude: -17.79346,
            longitude: -63.18697
          },
          { 
            latitude: -17.79342, 
            longitude:  -63.1869
          }, /*115*/
          { 
            latitude: -17.79335,
            longitude:  -63.18685
          },
          { 
            latitude: -17.79334, 
            longitude: -63.18677
          },
          { /* 117 */
            latitude: -17.79321,
            longitude:  -63.18579
          },
          { 
            latitude: -17.79273, 
            longitude: -63.18275
          },
          { 
            latitude: -17.79245, 
            longitude: -63.18117
          }, /*120*/
          { 
            latitude: -17.79218,
            longitude: -63.17951
          },
          { 
            latitude: -17.79173,
            longitude:   -63.17666
          },
          { 
            latitude: -17.79136,
            longitude:  -63.17441
          }, /*123*/
          { 
            latitude: -17.79124, 
            longitude: -63.1737
          },
          { 
            latitude: -17.79128,
            longitude:  -63.17354
          },
          { 
            latitude: -17.79132,
            longitude: -63.17348
          }, /*126*/
          { 
            latitude: -17.79137, 
            longitude: -63.17347
          },
          { 
            latitude: -17.79144, 
            longitude:  -63.17344
          },
          { 
            latitude: -17.79151,
            longitude:  -63.1734
          },
          { 
            latitude: -17.79157, 
            longitude: -63.17335
          }, /*130*/
          { 
            latitude: -17.7916,
            longitude:   -63.17329
          },
          { 
            latitude: -17.79161, 
            longitude: -63.17322
          },
          { 
            latitude: -17.79162,
            longitude:  -63.17313
          }, /*133*/
          { 
            latitude: -17.79159, 
            longitude: -63.17305
          },
          { 
            latitude: -17.79154, 
            longitude: -63.17297
          },
          { /* 135 */
            latitude: -17.79148, 
            longitude: -63.1729
          },
          { 
            latitude: -17.79137,
            longitude: -63.17285
          },
          { 
            latitude: -17.79126, 
            longitude: -63.1728
          },
          { 
            latitude: -17.79095,
            longitude:  -63.17244
          }, /*139*/
         

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
  />
  )
}

export default Poli_17

const styles = StyleSheet.create({})