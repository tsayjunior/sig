import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Mapa from "../Mapa/Mapa";
import EditarMicro from "../Micro/EditarMicro";
import UserLista from "../User/UserLista";
import PerfilChofer from "../Chofer/PerfilChofer";
import ChoferLista from "../Chofer/ChoferLista";
import MicroLista from "../Micro/MicroLista";
import RegistroChofer from "../Chofer/RegistroChofer";
// import { AuthProvider } from "../context/AuthContext";
import Logout from "../Login/Logout";
import Reporte from "../components/Reporte";

import Tarjeta from "../Tarjetas/Tarjeta";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
       <Drawer.Screen
        name="Tarjeta"
        component={Tarjeta}
        options={({ navigation }) => ({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
        })}
      />
      <Drawer.Screen name="Mapa" component={Mapa} 
      options={({navigation})=>({
        // title: "Información",
        headerStyle: { backgroundColor: "#222f3e" },
        headerTitleStyle: { color: "#fff" },
        // headerBackVisible: {headerLeft: 'false'}
      })}
      />
     
      <Drawer.Screen name="perfil chofer" component={PerfilChofer} 
      options={({navigation})=>({
        // title: "Información",
        headerStyle: { backgroundColor: "#222f3e" },
        headerTitleStyle: { color: "#fff" },
        // headerBackVisible: {headerLeft: 'false'}
      })}/>
      {/* <Drawer.Screen
        name="Recorrido"
        component={iniciar}
        options={({ navigation }) => ({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
        })}
      /> */}
     
     
  

      <Drawer.Screen
        name="Micros"
        component={MicroLista}
        options={({ navigation }) => ({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.navigate("RegistroMicro")}
          //   >
          //     <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
          //       Nuevo
          //     </Text>
          //   </TouchableOpacity>
          // ),
        })}
      />
      <Drawer.Screen
        name="Reporte"
        component={Reporte}
        options={({ navigation }) => ({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          // headerRight: () => (
          //   <TouchableOpacity onPress={()=>navigation.navigate('RegistroChofer')}>
          //     <Text style={{color: '#fff', marginRight: 20, fontSize: 15}}>Nuevo</Text>
          //   </TouchableOpacity>
          // ),
        })}
      />

      <Drawer.Screen
        name="Cerrar sesion"
        component={Logout}
        options={({ navigation }) => ({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          // headerRight: () => (
          //   <TouchableOpacity onPress={()=>navigation.navigate('RegistroChofer')}>
          //     <Text style={{color: '#fff', marginRight: 20, fontSize: 15}}>Nuevo</Text>
          //   </TouchableOpacity>
          // ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
