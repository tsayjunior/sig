import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Layout from '../components/Layout'
import Spinner from 'react-native-loading-spinner-overlay/lib'

const Logout = () => {

    const {userInfo, isLoading, logout} = useContext(AuthContext)
    console.log(userInfo)
  return (
    <Layout>
        <Spinner visible={isLoading} />
        <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido {userInfo.data.name}</Text>
      <Button title="Logout" color="red" onPress={logout}/>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome:{
        fontSize: 18,
        marginBottom: 8,
        color: "white"
    }
}); 

export default Logout