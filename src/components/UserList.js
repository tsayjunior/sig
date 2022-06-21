 import { View, Text, FlatList } from 'react-native'
 import React from 'react'
 
 const TaskUser = ({users}) => {
   return (
    //  {/* flatlist recorrera todo el estado */}
     <FlatList 
     data={users} //que sera el arreglo de usuarios
     renderItem={({item}) => { //que sera la funcion que se ejecutara por cada usuario, y retornarà un elemento, está en {item} ya que obtendra la variable item del item que se esta recorriendo
         console.log('item');
         return <Text>{item.name} sss</Text>
     }}
    />
   )
 }
 
 export default TaskUser;