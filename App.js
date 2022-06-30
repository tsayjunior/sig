import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "./src/Login/Login";
import DrawerNavigation from "./src/Navigation/DrawerNavigation";
import RegistroMicro from "./src/Micro/RegistroMicro";
import RegistroChofer from "./src/Chofer/RegistroChofer";
import EditarChofer from "./src/Chofer/EditarChofer";
import CrearUsuario from "./src/User/CrearUsuario";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import { useContext } from "react";
/* PRueba del nuevo login */
import NewLogin from "./src/Login/NewLogin";
// import FechaPrueba from "./src/pruebas/FechaPrueba"; //prueba

function MyStack() {
  const {userInfo} = useContext(AuthContext);
  return (
    <Stack.Navigator>

     {/*  <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false, //oculta la barra de arriba
          title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerMode: "screen",
        }}
      /> */}

      {userInfo.access_token? (
        <>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false, //oculta la barra de arriba
          title: "Información",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerMode: "screen",
        }}
      />
       <Stack.Screen
          name="RegistroChofer"
          component={RegistroChofer}
          options={{
            title: "Registros personales",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            // headerBackVisible: {headerLeft: 'false'}
            headerMode: "screen",
          }}
        />
        <Stack.Screen
          name="RegistroMicro"
          component={RegistroMicro}
          options={{
            title: "Registro de micro",
            headerStyle: { backgroundColor: "#222f3e" }, //color de la barra superior
            headerTitleStyle: { color: "#fff" }, //color de la letra
          }}
        />
      </>
       ):( 

      <>
        {/* <Stack.Screen
        name="fecha"
        component={FechaPrueba}
        options={{
          title: "fecha",
          headerStyle: { backgroundColor: "#222f3e" },
          headerTitleStyle: { color: "#fff" },
          // headerBackVisible: {headerLeft: 'false'}
          headerMode: "screen",
        }}
      /> */}
      {/* prueba del nuevo login */}
       <Stack.Screen
          name="NewLogin"
          component={NewLogin}
          options={{
            title: "Login",
            headerStyle:false,
            headerShown: false,
           
          }}
        />
        {/* fin */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Inicio de sesion",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            // headerBackVisible: {headerLeft: 'false'}
            headerMode: "screen",
          }}
        />
        <Stack.Screen
          name="RegistroChofer"
          component={RegistroChofer}
          options={{
            title: "Registros personales",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            // headerBackVisible: {headerLeft: 'false'}
            headerMode: "screen",
          }}
        />

        <Stack.Screen
          name="RegistroMicro"
          component={RegistroMicro}
          options={{
            title: "Registro de micro",
            headerStyle: { backgroundColor: "#222f3e" }, //color de la barra superior
            headerTitleStyle: { color: "#fff" }, //color de la letra
          }}
        />

        <Stack.Screen
          name="CrearUsuario"
          component={CrearUsuario}
          options={{
            title: "Crear usuario",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            headerTintColor: "#fff",
          }}
        />
      </>
       )} 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
