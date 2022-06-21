import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import UserList from "./screens/UserList";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import Login from "./screens/Login";
import RegistroMicro from './screens/RegistroMicro';
import Mapa from './screens/Mapa'

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
        component={CreateUserScreen}
        options={{ title: "Registro chofer" }}
      />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Editar chofer" }}
      />
      <Stack.Screen
        name="RegistroMicro"
        component={RegistroMicro}
        options={{ title: "Registro de micro" }}
      />
      
      <Stack.Screen
        screenOptions={{headerShow:false}}
        // headerLeft={false}
        name="Mapa"
        component={Mapa}
        options={{ title: "Mapa",
        // headerLeft:"false"
      }}
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
