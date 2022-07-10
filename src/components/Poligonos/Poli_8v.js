import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_8v = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        //inicio  de vuelta de linea 8//
        {latitude: -17.828068,  longitude: -63.137206,},
        {latitude: -17.82771,  longitude: -63.13649,},
        {latitude: -17.82707,  longitude: -63.13525,},
        {latitude: -17.82643,  longitude:  -63.13402,},
        {latitude: -17.82563,  longitude: -63.1324,},
        {latitude: -17.82527,  longitude: -63.13174,},//6
        {latitude: -17.82528,  longitude: -63.13167,},
        {latitude: -17.82526,   longitude: -63.13158,},
        {latitude: -17.82519,   longitude: -63.13151,},
        {latitude: -17.82507,   longitude: -63.13152,},//10
        {latitude: -17.82496,  longitude: -63.13159,},
        {latitude: -17.8249,  longitude: -63.13171,},
        {latitude: -17.82494, longitude: -63.13181,},
        {latitude: -17.82488,  longitude: -63.1319,},//14
        {latitude: -17.82409,  longitude: -63.13274,},
        {latitude: -17.82338,  longitude: -63.13351,},
        {latitude: -17.8229,  longitude: -63.13403,},
        {latitude: -17.82158,  longitude: -63.13541,},//18
        {latitude: -17.82069,  longitude:  -63.13636,},
        {latitude: -17.82001,  longitude: -63.13707,},
        {latitude: -17.8186,  longitude: -63.13857,},
        {latitude: -17.81742,  longitude:-63.13982,},//22
        {latitude: -17.81689,  longitude:  -63.13921,},
        {latitude: -17.81627,  longitude:  -63.13855,},
        {latitude: -17.8154,  longitude: -63.13761,},
        {latitude: -17.81495,  longitude: -63.13724,},//26
        {latitude: -17.81461,  longitude:  -63.13702,},
        {latitude: -17.81417,  longitude:  -63.1368,},
        {latitude: -17.81337,  longitude: -63.13659,},
        {latitude: -17.81236,  longitude: -63.1365, },//30
        {latitude: -17.81228,  longitude: -63.13647,},
        {latitude: -17.81223,  longitude: -63.13642,},
        {latitude: -17.81219,  longitude:  -63.1364,},
        {latitude: -17.81218,  longitude: -63.13632,},//33
        {latitude: -17.81217,  longitude: -63.13617,},
        {latitude: -17.81224,  longitude: -63.13529,},
        {latitude: -17.81235,  longitude: -63.13342,},
        {latitude: -17.81241,  longitude: -63.1325,},//36
        {latitude: -17.81253,  longitude: -63.13078,},
        {latitude: -17.81264,  longitude: -63.12906,},
        {latitude: -17.81266,  longitude: -63.12892,},
        {latitude: -17.8127,  longitude: -63.12878,},//40
        {latitude: -17.81276,  longitude: -63.12869,},
        {latitude: -17.81277,  longitude: -63.12863,},
        {latitude: -17.81277,  longitude: -63.12855,},
        {latitude: -17.81276,  longitude: -63.1285,},
        {latitude: -17.81272,  longitude: -63.12844,},
        {latitude: -17.81263,  longitude: -63.12839,},//p49
        {latitude: -17.81254,  longitude: -63.12839,},
        {latitude: -17.81246,  longitude: -63.12843,},
        {latitude: -17.81242,  longitude: -63.12847,},//52
        {latitude: -17.81239,  longitude: -63.12851,},
        {latitude: -17.81183,  longitude: -63.12845,},
        {latitude: -17.81157,  longitude: -63.12842,},
        {latitude: -17.81089,  longitude: -63.12835,},//56
        {latitude: -17.81047,  longitude: -63.12834,},
        {latitude: -17.81009,  longitude: -63.12831,},
        {latitude: -17.80953,  longitude: -63.12828,},
        {latitude: -17.80893,  longitude: -63.1282,},
        {latitude: -17.80869,  longitude: -63.12816,},
        {latitude: -17.80838,  longitude: -63.12815,},//62
        {latitude: -17.80814, longitude: -63.12813,},
        {latitude: -17.80804,  longitude: -63.12815,},
        {latitude: -17.80795,  longitude: -63.12808,},
        {latitude: -17.80792,  longitude: -63.12804,},//66
        {latitude: -17.80778,  longitude: -63.12801,},
        {latitude: -17.80766,  longitude: -63.12808,},
        {latitude: -17.80676,  longitude: -63.128,},
        {latitude: -17.80598,  longitude: -63.12793,},//70
        {latitude: -17.80586,  longitude: -63.12793,},//71
        {latitude: -17.80506,  longitude: -63.12786,},
        {latitude: -17.80419,  longitude: -63.12778,},
        {latitude: -17.80382,  longitude: -63.12769,},
        {latitude: -17.80306,  longitude: -63.12764,},//76
        {latitude: -17.80289,  longitude: -63.12762,},
        {latitude: -17.80251,  longitude: -63.12755,},//78
        {latitude: -17.80243,  longitude: -63.12746,},
        {latitude: -17.80234,   longitude: -63.12738,},
        {latitude: -17.80213,   longitude: -63.12737,},
        {latitude: -17.80191,   longitude: -63.12757,},//82
        {latitude: -17.80172,  longitude: -63.12752,},
        {latitude: -17.80103,  longitude: -63.12744,},
        {latitude: -17.7998, longitude: -63.12728,},
        {latitude: -17.79931,  longitude: -63.12726,},//86
        {latitude: -17.79753,  longitude:  -63.12704,},
        {latitude: -17.79707,  longitude: -63.12698,},
        {latitude: -17.79706,  longitude: -63.12718,},
        {latitude: -17.79642,  longitude: -63.12712,},//90
        {latitude: -17.79568,  longitude:  -63.12704,},
        {latitude: -17.79486,  longitude: -63.12696,},
        {latitude: -17.79314,  longitude: -63.12679,},
        {latitude: -17.79262,  longitude: -63.12677,},//94
        {latitude: -17.7926,  longitude:  -63.12666,},
        {latitude: -17.79258,  longitude:  -63.12659,},
        {latitude: -17.7925,  longitude: -63.12654,},
        {latitude: -17.79243,  longitude: -63.12652,},//98
        {latitude: -17.79233,  longitude: -63.12654,},
        {latitude: -17.79225,  longitude: -63.1266,},
        {latitude: -17.79211,  longitude:  -63.12678,},
        {latitude: -17.79206,  longitude: -63.12688, },//102
        {latitude: -17.79207,  longitude: -63.12701,},
        {latitude: -17.79215,  longitude: -63.12708,},
        {latitude: -17.7922,  longitude:  -63.12709,},
        {latitude: -17.79213,  longitude: -63.12855,},//106
        {latitude: -17.79202,  longitude: -63.13013,},
        {latitude: -17.79191,  longitude: -63.13167,},
        {latitude: -17.79189,  longitude: -63.13202,},
        {latitude: -17.79166,  longitude: -63.13438,},//110
        {latitude: -17.79198,  longitude: -63.13442,},
        {latitude: -17.7923,  longitude: -63.13445,},
        {latitude: -17.79287,  longitude:  -63.13451,},
        {latitude: -17.79373,  longitude: -63.1346,},//114
        {latitude: -17.79368,  longitude: -63.13521,},
        {latitude: -17.79491,  longitude:  -63.13533,},
        {latitude: -17.79499,  longitude: -63.1347,},
        {latitude: -17.79562,  longitude: -63.13477,},
        {latitude: -17.79625,  longitude:  -63.13484,},
        {latitude: -17.79712,  longitude: -63.13492,},//120
        {latitude: -17.79771,  longitude: -63.13497,},
        {latitude: -17.79819,  longitude: -63.13501,},
        {latitude: -17.79878,  longitude: -63.13506,},//123
        {latitude: -17.79944,  longitude: -63.13511,},
        {latitude: -17.80055,  longitude: -63.1352,},
        {latitude: -17.80124,  longitude: -63.13525,},
        {latitude: -17.80139,  longitude: -63.13538,},//127
        {latitude: -17.8013,  longitude: -63.13634,},
        {latitude: -17.80115,  longitude: -63.13848,},
        {latitude: -17.80101,  longitude:  -63.13972,},
        {latitude: -17.80076,  longitude: -63.14094,},
        {latitude: -17.79968,  longitude: -63.14509,},
        {latitude: -17.7988,  longitude: -63.1486,},//133
        {latitude: -17.79865, longitude: -63.14913,},
        {latitude: -17.79844,  longitude:-63.14947,},
        {latitude: -17.7982,  longitude: -63.14967,},
        {latitude: -17.79809,  longitude: -63.14992,},//137
        {latitude: -17.79811,  longitude: -63.15015,},
        {latitude: -17.79818,  longitude: -63.15035,},
        {latitude: -17.79818,  longitude: -63.1506,},
        {latitude: -17.79812,  longitude: -63.15087,},//141
        {latitude: -17.7961,  longitude: -63.15577,},
        {latitude: -17.79563,  longitude: -63.15689,},
        {latitude: -17.79551,  longitude: -63.15696,},
        {latitude: -17.79542,  longitude:  -63.15708,},
        {latitude: -17.7954,  longitude: -63.15721,},//146
        {latitude: -17.79543,  longitude: -63.15735,},
        {latitude: -17.79522,  longitude: -63.15773,},//148
        {latitude: -17.79505,  longitude: -63.15816,},
        {latitude: -17.79496,   longitude: -63.15846,},
        {latitude: -17.79464,   longitude: -63.16027,},
        {latitude: -17.79459,   longitude: -63.16042,},//152
        {latitude: -17.79459,  longitude: -63.16056,},
        {latitude: -17.79461,  longitude: -63.16065,},
        {latitude: -17.79453, longitude: -63.16134,},
        {latitude: -17.79439,  longitude:  -63.162,},//156
        {latitude: -17.79433,  longitude: -63.16218,},
        {latitude: -17.79353,  longitude: -63.16254,},
        {latitude: -17.79243,  longitude: -63.1628,},
        {latitude: -17.79172,  longitude: -63.16282,},//160
        {latitude: -17.79097,  longitude: -63.16269,},
        {latitude: -17.78824,  longitude: -63.16197,},
        {latitude: -17.78807,  longitude: -63.16202,},
        {latitude: -17.78798,  longitude: -63.16206,},//164
        {latitude: -17.78766,  longitude:  -63.16247,},
        {latitude: -17.78753,  longitude: -63.16274,},
        {latitude: -17.78759,  longitude: -63.16282,},
        {latitude: -17.78782,  longitude: -63.16286,},//168
        {latitude: -17.78795,  longitude: -63.16281,},
        {latitude: -17.78805,  longitude: -63.16273,},
        {latitude: -17.78887,  longitude: -63.16302,},
        {latitude: -17.79072,  longitude: -63.16362, },//172
        {latitude: -17.79046,  longitude: -63.16458,},
        {latitude: -17.79118,  longitude: -63.16485,},
        {latitude: -17.79193,  longitude: -63.16507,},
        {latitude: -17.79396,  longitude: -63.16541,},//176
        {latitude: -17.79483,  longitude: -63.16551,},
        {latitude: -17.79477,  longitude: -63.16637,},
        {latitude: -17.79575,  longitude: -63.16651,},
        {latitude: -17.7963,  longitude: -63.16661,},//180
        {latitude: -17.79675,  longitude: -63.16675,},
        {latitude: -17.79693,  longitude: -63.16682,},
        {latitude: -17.79756,  longitude: -63.16723,},
        {latitude: -17.79802,  longitude: -63.16769,},//184
        {latitude: -17.79844,  longitude: -63.1684,},
        {latitude: -17.79868,  longitude: -63.16909,},
        {latitude: -17.79874,  longitude: -63.16966,},
        {latitude: -17.79872,  longitude: -63.17013,},
        {latitude: -17.79792,  longitude: -63.1748,},
        {latitude: -17.79795,  longitude: -63.17539,},//190
        {latitude: -17.7983,  longitude: -63.17658,},
        {latitude: -17.80023,  longitude: -63.18337,},
        {latitude: -17.80023,  longitude: -63.18381,},//193
        {latitude: -17.8007,  longitude: -63.18542,},
        {latitude: -17.80064,  longitude: -63.18558,},
        {latitude: -17.8005,  longitude: -63.18572,},
        {latitude: -17.79896,  longitude: -63.18599,},//197
        {latitude: -17.79815,  longitude: -63.18611,},
        {latitude: -17.79803,  longitude: -63.18607,},
        {latitude: -17.79792,  longitude: -63.18613,},//200
        {latitude: -17.79759,  longitude: -63.1862,},
        {latitude: -17.79623,  longitude: -63.18644,},
        {latitude: -17.79505,  longitude: -63.18662,},//203
        {latitude: -17.79346, longitude: -63.18689,},
        {latitude: -17.79335,  longitude: -63.18686,},
        {latitude: -17.79314,  longitude: -63.18691,},
        {latitude: -17.79159,  longitude: -63.1871,},//207
        {latitude: -17.79009,  longitude: -63.1873,},
        {latitude: -17.7895,  longitude: -63.18745,},
        {latitude: -17.78936,  longitude: -63.18744,},
        {latitude: -17.78926,  longitude: -63.18754,},//211
        {latitude: -17.78746,  longitude: -63.18821,},//212
        {latitude: -17.78603,  longitude: -63.18869,},
        {latitude: -17.78509,  longitude: -63.18882,},
        {latitude: -17.78459,  longitude: -63.18879,},
        {latitude: -17.78448,  longitude: -63.18872,},//216
        {latitude: -17.78435,  longitude: -63.18874,},
        {latitude: -17.78426,  longitude: -63.18882,},//218
        {latitude: -17.78123,  longitude: -63.18881,},
        {latitude: -17.78062,   longitude: -63.18876,},
        {latitude: -17.77968,   longitude: -63.18865,},
        {latitude: -17.77933,   longitude: -63.18858,},//222
        {latitude: -17.77873,  longitude: -63.1884,},
        {latitude: -17.77805,  longitude: -63.18806,},
        {latitude: -17.77772, longitude: -63.18784,},
        {latitude: -17.77733,  longitude: -63.18755,},//226
        {latitude: -17.77691,  longitude: -63.18715,},
        {latitude: -17.77641,  longitude: -63.18646,},
        {latitude: -17.77569,  longitude: -63.18458,},
        {latitude: -17.77529,  longitude: -63.18336,},//230
        {latitude: -17.77492,  longitude: -63.1821,},
        {latitude: -17.77308,  longitude: -63.18227,},
        {latitude: -17.77128,  longitude: -63.18238,},
        {latitude: -17.76877,  longitude: -63.18241,},//237
        {latitude: -17.76718,  longitude: -63.18201,},
        {latitude: -17.7646,  longitude: -63.18096,},
        {latitude: -17.76164,  longitude: -63.1798,},
        {latitude: -17.7565,  longitude: -63.17777,},//241
        {latitude: -17.75206,  longitude: -63.17605,},
        {latitude: -17.75087,  longitude:  -63.17554,},
        {latitude: -17.75047,  longitude: -63.17522,},
        {latitude: -17.75034,  longitude: -63.17495, },//245
        {latitude: -17.75009,  longitude: -63.17481,},
        {latitude: -17.74979,  longitude: -63.17483,},
        {latitude: -17.74963,  longitude: -63.1749,},
        {latitude: -17.74922,  longitude: -63.17489,},//249
        {latitude: -17.74783,  longitude: -63.17442,},
        {latitude: -17.74196,  longitude: -63.17212,},
        {latitude: -17.73911,  longitude: -63.171,},
        {latitude: -17.73648,  longitude: -63.16994,},//253
        {latitude: -17.73444,  longitude: -63.16917,},
        {latitude: -17.73004,  longitude: -63.16742,},
        {latitude: -17.72933,  longitude: -63.16708,},
        {latitude: -17.72827,  longitude: -63.16671,},//257
        {latitude: -17.72517,  longitude: -63.1655,},
        {latitude: -17.72592,  longitude: -63.16354,},
        {latitude: -17.72703,  longitude: -63.16089,},
        {latitude: -17.72774,  longitude: -63.1593,},
        {latitude: -17.72801,  longitude: -63.15877,},
        {latitude: -17.7281,  longitude:  -63.15868,},//263
        {latitude: -17.72814,  longitude: -63.15853,},
        {latitude: -17.72807,  longitude: -63.15834,},
        {latitude: -17.72845,  longitude: -63.15698,},//266
        {latitude: -17.72787,  longitude: -63.15679,},
        {latitude: -17.72766,  longitude: -63.15681,},
        {latitude: -17.72639,  longitude: -63.15615,},
        {latitude: -17.72502,  longitude: -63.15549,},//270
        {latitude: -17.72298,  longitude: -63.15449,},
        {latitude: -17.72428,  longitude: -63.15112,},
        {latitude: -17.72352,  longitude: -63.15114,},//273
        {latitude: -17.72295,  longitude: -63.15106,},
        {latitude: -17.72281,  longitude: -63.15096,},
        {latitude: -17.72229,  longitude: -63.15039,},//276
        {latitude: -17.72135, longitude: -63.14925,},
        {latitude: -17.71919,  longitude: -63.14671,},
        {latitude: -17.71892,  longitude: -63.1464,},
        {latitude: -17.71807,  longitude: -63.14597,},//282
        {latitude: -17.71573,  longitude: -63.14507,},
        {latitude: -17.71479,  longitude: -63.14472,},//282
        {latitude: -17.71493,  longitude: -63.14457,},
        {latitude: -17.71635,  longitude:  -63.14372,},
        {latitude: -17.71862,  longitude: -63.14212,},//282
        {latitude: -17.71828,  longitude: -63.14005,},
        {latitude: -17.71806,  longitude: -63.13867,},
        
        //fin  de vuelta de linea 8//
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="turquoise"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
    lineDashPattern={[5]}
   
  />
  )
}

export default Poli_8v