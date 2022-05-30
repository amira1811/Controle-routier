import React from "react";
import { View, Text, StyleSheet,Image } from 'react-native';
import { Card } from "react-native-elements";

export default function VisiteScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Visite Screen</Text>
            <View>
                <Card>
                    <Image source={require('../assets/qr-code.jpg')} />
                </Card>
            </View>
             
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Demander un Rendez-vous</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black'
    }
})