import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


export default function SignIn() {
    return(
    <View style={styles.container}>
        <Text style={styles.text}>Sign In section</Text>
        <TextInput 
        keyboardType='numeric'
        placeholder='770000000' 
        placeholderTextColor={'grey'} 
        style={styles.input} />
        <TextInput 
        placeholder='password' 
        placeholderTextColor={'grey'} 
        style={styles.input} />
        <Button title='Submit'/>
    </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        color:'black'
    },
    input: {
        borderColor: 'black', 
        borderWidth: 1, 
        color: 'black', 
        margin: 10, 
        padding: 10,
        width: '100%'
    }
})