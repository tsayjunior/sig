import React, { useState } from 'react'
import { Button, TextInput, ScrollView, StyleSheet, Text, View } from 'react-native';



const CreateUserScreen = () => {

    const [state, setState] =useState({
        name: '',
        email: '',
        phone: ''
    });
    
    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    };

    return (
        <ScrollView>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Name user"
                onChangeText={(value)=> handleChangeText("name", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email user"
                onChangeText={(value)=> handleChangeText("email", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone user"
                onChangeText={(value)=> handleChangeText("phone", value)}
                />
            </View>
            <View>
                <Button title="Guardar usuario" onPress={()=> console.log(state)}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        bordeBottomColor: '#cccccc'
    }
})

export default CreateUserScreen