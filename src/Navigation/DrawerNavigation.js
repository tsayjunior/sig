import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Mapa from "../Mapa/Mapa";
import EditarMicro from "../Micro/EditarMicro";
import UserLista from "../User/UserLista";
import EditarChofer from "../Chofer/EditarChofer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Editar chofer" component={EditarChofer} />
      <Drawer.Screen name="Editar Micro" component={EditarMicro} />
      <Drawer.Screen
        name="Lista de Usuarios"
        component={UserLista}
        options={({navigation})=>({
          // title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('RegistroChofer')}>
              <Text>New</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
