import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_17v = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        { 
            latitude: -17.79128,
            longitude:  -63.17282
        },
        { 
          latitude: -17.79121,
          longitude:  -63.17284,
        },
        {
          latitude: -17.79116,
          longitude: -63.17287,
        },
        { 
          latitude: -17.7911,
          longitude:-63.17291,
        },
        { 
          latitude: -17.79106,
          longitude: -63.17297
        },/* fin 5 */
        {  
          latitude: -17.79104,
          longitude:-63.17303
        },
        {  
          latitude: -17.79106,
          longitude:-63.17313
        },
        {   /* 7 */
          latitude: -17.79109,
          longitude:-63.17326
        },
        {  
          latitude: -17.79113,
          longitude: -63.1734
        },
        {  
          latitude: -17.79115,
          longitude: -63.17368
        }, /* 10 */
        {   
          latitude: -17.7915,
          longitude:-63.17585
        },
        { 
          latitude: -17.79165,
          longitude: -63.17663
        },
        { 
          latitude: -17.79167, 
          longitude: -63.17683
        }, /* 13 */
        { 
          latitude: -17.79173, 
          longitude: -63.1773
        },
        { 
          latitude: -17.79178, 
          longitude: -63.17771
        },
        { 
          latitude: -17.79179, 
          longitude: -63.17779
        },
        { 
          latitude: -17.79185,
          longitude:   -63.17814
        },
        { 
          latitude: -17.79227, 
          longitude: -63.1805
        }, /* 18 */
        { 
          latitude: -17.7923, 
          longitude: -63.18071
        },
        { 
          latitude: -17.79238, 
          longitude: -63.18126
        },
        { 
          latitude: -17.79241, 
          longitude: -63.18149
        },
        { 
          latitude: -17.79264, 
          longitude: -63.18275
        }, /* 22 */
        { 
          latitude: -17.79265, 
          longitude: -63.18283
        },
        { 
          latitude: -17.79289, 
          longitude: -63.18442
        },
        { 
          latitude: -17.79312,
          longitude: -63.18586
        },
        { 
          latitude: -17.79319, 
          longitude: -63.18638
        },
        { 
          latitude: -17.7932,
          longitude:-63.18649
        }, /* 27 */
        { 
          latitude: -17.79321, 
          longitude: -63.18678
        },
        { 
          latitude: -17.79321, 
          longitude: -63.18686
        },
        { 
          latitude: -17.79318, 
          longitude: -63.1869
        }, /* 30 */
        { 
          latitude: -17.79316, 
          longitude: -63.18691
        },
        { 
          latitude: -17.7931, 
          longitude: -63.18692
        },
        { /* 23 */
          latitude: -17.7928, 
          longitude: -63.18697
        },
        { 
          latitude: -17.79168, 
          longitude: -63.18709
        },
        { /* 34 */
            latitude:-17.79053, 
            longitude:-63.18724
          },
          { 
            latitude:-17.79012, 
            longitude: -63.1873
          },
          { 
            latitude:-17.78955, 
            longitude: -63.18744
          },
          { 
            latitude:-17.78951,
            longitude:-63.18745
          }, /* 28 */
          { 
            latitude:-17.78946, 
            longitude: -63.18744
          },
          { 
            latitude:-17.78941, 
            longitude:  -63.18743
          },
          { 
            latitude:-17.78937, 
            longitude: -63.18744
          },
          { 
            latitude:-17.78935, 
            longitude: -63.18744
          }, /* 32 */ 
          { 
            latitude:-17.78932, 
            longitude: -63.18746
          },
          { 
            latitude:-17.78929, 
            longitude: -63.18749
          },
          { 
            latitude:-17.78926, 
            longitude: -63.18753
          },
          { 
            latitude:-17.78925, 
            longitude: -63.18755
          }, /* 36 */
          { 
            latitude:-17.78922,
            longitude: -63.18756
          },
          { 
            latitude:-17.78752, 
            longitude: -63.18819
          },
          { 
            latitude:-17.78626,
            longitude:-63.18863
          },
          { 
            latitude:-17.78593, 
            longitude:-63.18871
          }, /* 40 */
          { 
            latitude:-17.78537, 
            longitude:-63.1888
          },
          { 
            latitude:-17.78481, 
            longitude:-63.18881
          },
          { 
            latitude:-17.78458, 
            longitude:-63.18878
          },
          { 
            latitude:-17.78454, 
            longitude: -63.18875
          }, /* 44 */
          { 
            latitude:-17.78449, 
            longitude: -63.18873
          },
          { 
            latitude:-17.78444,
            longitude:  -63.18872
          },
          { 
            latitude:-17.78438, 
            longitude: -63.18872
          }, /* 47 */
          { 
            latitude:-17.78433, 
            longitude:  -63.18875
          }, /* 59 */ 
          { 
            latitude:-17.78428, 
            longitude: -63.18878
          },
          { 
            latitude:-17.78427,
            longitude:  -63.18881
          },
          { 
            latitude:-17.78424, 
            longitude: -63.18882
          }, /* 51 */
          { 
            latitude:-17.78314, 
            longitude:  -63.18883
          }, /* 52 */
          { 
            latitude:-17.78212, 
            longitude: -63.1888
          }, /* 53 */
          { 
            latitude:-17.78117, 
            longitude:  -63.18881
          }, /* 54 */
          { 
            latitude:-17.78088, 
            longitude: -63.18879
          }, /* 55 */
          { 
            latitude:-17.7805,
            longitude: -63.18875
          }, /* 57 */
          { 
            latitude:-17.77976, 
            longitude: -63.18864
          }, /*58*/
          { 
            latitude:-17.77953, 
            longitude: -63.18863
          },
          { 
            latitude:-17.77935,
            longitude:  -63.18859
          }, /*60*/
          { 
            latitude:-17.77871,
            longitude: -63.18839
          },
          { 
            latitude:-17.77847,
            longitude: -63.18829
          }, /*62*/
          { 
            latitude:-17.77822, 
            longitude: -63.18816
          }, /*63*/
          { 
            latitude:-17.77804,
            longitude: -63.18805
          },
          { /* 64 */
            latitude:-17.77788,
            longitude:-63.18796
          },
          { 
            latitude: -17.77774, 
            longitude:  -63.18786
          }, /* 66 */
          { 
            latitude:-17.77758, 
            longitude: -63.18775
          },
          { 
            latitude: -17.77743, 
            longitude: -63.18763
          },
          { 
            latitude: -17.77717, 
            longitude: -63.1874
          }, /*69*/
          { 
            latitude:-17.77691, 
            longitude:  -63.18715
          },
          { 
            latitude: -17.77672, 
            longitude: -63.18691
          },
          { 
            latitude: -17.77638, 
            longitude: -63.18641
          }, /*72*/
          { 
            latitude: -17.77615, 
            longitude: -63.18595
          },
          { 
            latitude: -17.77594, 
            longitude:-63.18537
          },
          { 
            latitude:-17.77569, 
            longitude: -63.18457
          },
          { 
            latitude: -17.77498, 
            longitude: -63.18236
          }, /*76*/
          { 
            latitude: -17.77477, 
            longitude: -63.18118
          },
          { 
            latitude: -17.77469, 
            longitude:  -63.17994
          },
          { 
            latitude: -17.77467, 
            longitude: -63.17878
          }, /*79*/
          { 
            latitude: -17.77472, 
            longitude: -63.17804
          },
          { 
            latitude: -17.77481,
            longitude: -63.17751
          },
          { /* 81 */
            latitude: -17.77488, 
            longitude:  -63.17698
          },
          { 
            latitude: -17.77508, 
            longitude: -63.1762
          },
          { 
            latitude: -17.77549, 
            longitude: -63.17516
          }, /*84*/
          { 
            latitude: -17.7756,
            longitude:  -63.17497
          },
          { 
            latitude: -17.77566,
            longitude: -63.17495
          },
          { 
            latitude:-17.77571, 
            longitude:-63.17492
          }, /*87*/
          { 
            latitude: -17.77575, 
            longitude:-63.17487
          },
          { 
            latitude: -17.77577, 
            longitude: -63.17482
          },
          { 
            latitude: -17.77578,
            longitude: -63.17474
          }, /*90*/
          { 
            latitude:-17.77577, 
            longitude:-63.17466
          },
          { 
            latitude: -17.77588, 
            longitude: -63.17447
          },
          { 
            latitude: -17.77631,
            longitude:  -63.174
          },
          { 
            latitude: -17.77695, 
            longitude:-63.17354 
          }, /*94*/
          { 
            latitude: -17.77743, 
            longitude: -63.17332
          },
          { 
            latitude: -17.77765, 
            longitude: -63.17325
          },
          { 
            latitude: -17.7778, 
            longitude:  -63.1732
          }, /*113*/
          { 
            latitude: -17.77799,
            longitude: -63.17317
          }, /*96*/
          { 
            latitude: -17.77801, 
            longitude:-63.17319
          }, /*97*/
          { 
            latitude: -17.77805,
            longitude: -63.17322
          },
          { 
            latitude: -17.77811, 
            longitude: -63.17324
          },
          { /* 99 */
            latitude: -17.77817,
            longitude:-63.17324
          },
          { 
            latitude: -17.77824, 
            longitude: -63.17322
          },
          { 
            latitude: -17.77829, 
            longitude: -63.17316
          }, /*102*/
          { 
            latitude: -17.77832,
            longitude: -63.17312
          },
          { 
            latitude: -17.77954,
            longitude: -63.17283
          },
          { 
            latitude: -17.78018,
            longitude: -63.17274
          },
          { 
            latitude: -17.78089, 
            longitude: -63.17264
          }, /*105*/
          { 
            latitude: -17.7813,
            longitude:-63.17258
          },
          { 
            latitude: -17.78186,
            longitude:-63.17251
          }, /*126*/
          { 
            latitude: -17.78196, 
            longitude:-63.1725
          }, /*106*/
          { 
            latitude: -17.78232, 
            longitude:-63.17245
          },
          { 
            latitude: -17.78285,
            longitude:-63.17237
          },
          { 
            latitude: -17.78287, 
            longitude:-63.17239
          }, /*108*/
          { 
            latitude: -17.78292,
            longitude:-63.17242
          },
          { 
            latitude: -17.78298, 
            longitude:  -63.17244
          },
          { 
            latitude: -17.78306,
            longitude:-63.17244
          }, /*111*/
          { 
            latitude: -17.78314, 
            longitude: -63.17239
          },
          { 
            latitude: -17.78319, 
            longitude: -63.17233
          },
          { /* 113 */
            latitude: -17.78341, 
            longitude: -63.17227
          },
          { 
            latitude: -17.78414,
            longitude: -63.17217
          },
          { 
            latitude: -17.78485, 
            longitude: -63.17204
          },
          { 
            latitude: -17.78534,
            longitude:-63.17198
          }, /*116*/
          { 
            latitude: -17.7854,
            longitude: -63.17197
          },
          { 
            latitude: -17.78545, 
            longitude: -63.172
          },
          { 
            latitude: -17.7855,
            longitude:-63.17201
          }, /*119*/
          { 
            latitude: -17.78554, 
            longitude: -63.17201
          },
          { 
            latitude: -17.7856, 
            longitude:-63.17198
          },
          { /* 121 */
            latitude: -17.78565, 
            longitude: -63.17195
          },
          { 
            latitude: -17.78568,
            longitude: -63.17192
          },
          { 
            latitude: -17.78666, 
            longitude: -63.17178
          }, /*124*/
          { 
            latitude: -17.78773,
            longitude:-63.17161
          }, /*125*/
          { 
            latitude: -17.78854,
            longitude: -63.17151
          },
          { 
            latitude: -17.78888, 
            longitude: -63.17148
          }, /*126*/
          { 
            latitude: -17.78898,
            longitude:-63.17149
          }, /*125*/
          { 
            latitude: -17.7892,
            longitude: -63.17151
          },
          { 
            latitude: -17.78935,
            longitude:-63.17153
          }, /*128*/
          { 
            latitude: -17.78952,
            longitude: -63.17158
          },
          { 
            latitude: -17.78965,
            longitude: -63.17163
          },
          { 
            latitude: -17.79015,
            longitude: -63.1719
          },
          { 
            latitude: -17.79035,
            longitude: -63.17206
          },
          { 
            latitude: -17.79052,
            longitude:-63.17223
          },
          { 
            latitude: -17.79087,
            longitude: -63.17269
          },
          { 
            latitude: -17.79092,
            longitude: -63.17269
          },
          { 
            latitude: -17.79098,
            longitude:-63.17266
          },
          { 
            latitude: -17.79103,
            longitude: -63.17261
          },
          { 
            latitude: -17.79105,
            longitude:-63.17257
          },
          { 
            latitude: -17.79094,
            longitude:-63.17245
          },

      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="gray"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
    lineDashPattern={[5]}
  />
  )
}

export default Poli_17v

const styles = StyleSheet.create({})