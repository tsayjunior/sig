 import { View, Text, FlatList } from 'react-native'
 import React from 'react'
 
import UserItem from './UserItem'

 const TaskUser = ({users}) => {

  const renderItem = ({item}) =>{//que sera la funcion que se ejecutara por cada usuario, y por cada item que recorra, devolverá el texto que se le indica
      //  console.log(item);
      //  return <Text>{item.name}</Text>//indica que se le devuelva el texto name del item 
        return <UserItem user={item}/>
  }

   return (
    //  {/* flatlist recorrera todo el estado */}
     <FlatList style={{width:'100%' }} 
     data={users} //que sera el arreglo de usuarios, data recibe el arreglo de tareas
     keyExtractor={(item) => item.id + ''} //que sera el id de cada usuario, extrae el id, lo convierte en string
     renderItem={renderItem}//renderisa el text
    />
   )
 }
 
 export default TaskUser;