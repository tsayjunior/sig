
import React from "react";
import MicroList from '../components/MicroList'
import Layout from '../components/Layout'
import { View,Text } from "react-native";

const MicroLista = () =>(
 
    <Layout >
       <View >
        <Text style={{fontSize:15,fontWeight:"bold"}}>Deslice hacia abajo</Text>
       </View>
     
        <MicroList />
      
    </Layout>
   
  );

export default MicroLista;
