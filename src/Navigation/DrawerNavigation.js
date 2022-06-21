import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mapa from "../Mapa/Mapa";
import UserDetailScreen from "../Chofer/UserDetailScreen";
import EditarMicro from "../Micro/EditarMicro";


const Drawer= createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Mapa" component={Mapa}/>
        <Drawer.Screen name="Editar chofer" component={UserDetailScreen}/>
        <Drawer.Screen name="Editar Micro" component={EditarMicro}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
