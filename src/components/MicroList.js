 import { View, Text, FlatList, RefreshControl } from 'react-native'
 import React, {useState, useEffect, useContext} from 'react'
 import { getUsers, deleteUser } from "../Api/ApiMicro";
 import {useIsFocused} from '@react-navigation/native' //

import MicroItem from './MicroItem';
import { AuthContext } from '../context/AuthContext';

 const MicroList = () => {

  const [users, setUsers] = useState([]); //defino un estado llamado users, y una funcion usersState que lo actualiza, y un arreglo en blanco que nos permitira empezar siempre con el arreglo en blanco

  const [refresing, setRefresing] = useState(false);

  const isFocused = useIsFocused() //useIsFocused es una funcion, que devuelve true si vuelvo a la pantalla anterior, y false si no

  const {userInfo, isLoading, setMicros, Micros} = useContext(AuthContext)
  const loadTasks = async () => {
    const data = setMicros();
    console.log("*-*-*-*-**-*--*-*-")
    console.log(Micros.data)
    setUsers(Micros.data);

  };

  useEffect(() => {
    // console.log("usuarios");
    // console.log(isFocused);
    
    loadTasks();
  }, [isFocused]);//se pone aca, para que cada que vuelva a la pantalla, me muestre eso

  const handleDelete=async(id)=>{
    // console.log(id)
    await deleteUser(id)
    await loadTasks()
  }
  
  const renderItem = ({item}) =>{//que sera la funcion que se ejecutara por cada usuario, y por cada item que recorra, devolverá el texto que se le indica
      //  console.log(item);
      //  return <Text>{item.name}</Text>//indica que se le devuelva el texto name del item 
        return <MicroItem user={item} handleDelete={handleDelete}/>
  }

  const onRefresh = React.useCallback( async()=>{ //hace que se cargue de nuevo todo
    setRefresing(true);
    await loadTasks();
    setRefresing(false);
  })

   return (
    //  {/* flatlist recorrera todo el estado */}
     <FlatList style={{width:'100%' }} 
     data={users} //que sera el arreglo de usuarios, data recibe el arreglo de tareas
     keyExtractor={(item) => item.id + ''} //que sera el id de cada usuario, extrae el id, lo convierte en string
     renderItem={renderItem}//renderisa el text

     refreshControl={ // bajando hacia abajo el cursor, hace que se actualize la pagina
                        //y muestra el redondito de cargando
      <RefreshControl
      refreshing={refresing}
        colors={["#78e08f"]}
        onRefresh={onRefresh}//cuando se haga el movimiento de arriba hacia abajo
        // onRefresh={()=> console.log('refersing')}
        progressBackgroundColor="#0a3d62"
      />
     }
    />
   )
 }
 
 export default MicroList;