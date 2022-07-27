import React from 'react'
import Layout from '../components/Layout'
import { View,Text } from "react-native";
import TarjetaList from '../components/TarjetaList';

const Tarjeta=()=> (
  <Layout >
       <View >
        <Text style={{fontSize:15,fontWeight:"bold"}}>Deslice hacia abajo</Text>
       </View>
     
        <TarjetaList />
      
    </Layout>
   
  );


export default Tarjeta
