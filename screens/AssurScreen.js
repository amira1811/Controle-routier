import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from "react-native-elements";


export default function AssurScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Assurance Screen</Text>
            <View>
                <Card>
                    <Image source={require('../assets/qr-code.jpg')} />
                </Card>
            </View>
             
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Renouveler son assurance</Text>

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