import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import UserList from "./screens/UserList";
import Login from "./src/Login/Login";
import DrawerNavigation from "./src/Navigation/DrawerNavigation";
import RegistroMicro from "./src/Micro/RegistroMicro";
import RegistroChofer from "./src/Chofer/RegistroChofer";
import EditarChofer from "./src/Chofer/EditarChofer";


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Inicio de sesion" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={RegistroChofer}
        options={{ title: "Registro chofer" }}
      />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen
        name="UserDetailScreen"
        component={EditarChofer}
        options={{ title: "Editar chofer" }}
      />
      <Stack.Screen
        name="RegistroMicro"
        component={RegistroMicro}
        options={{ title: "Registro de micro" }}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ title: "Información" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
