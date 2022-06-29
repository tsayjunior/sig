import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Mapa from "../Mapa/Mapa";
import EditarMicro from "../Micro/EditarMicro";
import UserLista from "../User/UserLista";
import EditarChofer from "../Chofer/EditarChofer";
import ChoferLista from "../Chofer/ChoferLista";
import MicroLista from "../Micro/MicroLista";
import RegistroChofer from "../Chofer/RegistroChofer";
// import { AuthProvider } from "../context/AuthContext";
import Logout from "../Login/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Mapa" component={Mapa} 
      options={({navigation})=>({
        // title: "Información",
        headerStyle: { backgroundColor: "#222f3e" },
        headerTitleStyle: { color: "#fff" },
        // headerBackVisible: {headerLeft: 'false'}
      })}
      />
      {/* <Drawer.Screen name="Editar chofer" component={EditarChofer} />
      <Drawer.Screen name="Editar Micro" component={EditarMicro} /> */}
      {/* <Drawer.Screen
        name="Usuarios"
        component={UserLista}
        options={({navigation})=>({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('CrearUsuario')}>
              <Text style={{color: '#fff', marginRight: 20, fontSize: 15}}>Nuevo</Text>
            </TouchableOpacity>
          ),
        })}
      /> */}
      <Drawer.Screen
        name="chofer"
        component={ChoferLista}
        options={({navigation})=>({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('RegistroChofer')}>
              <Text style={{color: '#fff', marginRight: 20, fontSize: 15}}>Nuevo</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Editar perfil"
        component={RegistroChofer}
        options={({navigation})=>({
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
        name="Micros"
        component={MicroLista}
        options={({navigation})=>({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('RegistroMicro')}>
              <Text style={{color: '#fff', marginRight: 20, fontSize: 15}}>Nuevo</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="logout"
        component={Logout}
        />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
