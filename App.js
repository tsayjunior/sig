import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator ();

import userList from './screens/userList'
import CreateUserScreen from './screens/CreateUserScreen'
import userDetailScreen from './screens/userDetailScreen'

function MyStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="userList" component={userList} />
      <Stack.Screen name="userDetailScreen" component={userDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
