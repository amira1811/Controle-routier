import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Button} from 'react-native';


export default function LoginScreen({navigation}) {
    return(
        <ScrollView style={styles.container}>
            
            <View>
                <Text style={styles.text}>CONNEXION</Text>
                <TextInput 
                keyboardType='numeric'
                placeholder='770000000' 
                placeholderTextColor={'grey'} 
                style={styles.input} />
                <TextInput 
                placeholder='password' 
                placeholderTextColor={'grey'} 
                style={styles.input} />
                <Button title='Submit' onPress={() => navigation.navigate('Home')}/>
                <Text style={styles.text}>Mot de passe oublié?</Text>
            </View>
            <View style={styles.separator} />
    
            <Text style={styles.text}>Vous n'avez pas de compte?</Text>
            <View>
                <Text style={styles.text}>Sign Up section</Text>
               
                <TextInput 
                keyboardType='numeric'
                placeholder='770000000' 
                placeholderTextColor={'grey'} 
                style={styles.input} />
                <TextInput 
                placeholder='password' 
                placeholderTextColor={'grey'} 
                style={styles.input} />
                <Button title='Submit' onPress={() => navigation.navigate('Home')}/>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        color:'black',
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        borderColor: 'black', 
        borderWidth: 1, 
        color: 'black', 
        margin: 20,

        paddingVertical: 10       
    }
})