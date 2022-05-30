import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from "react-native-elements";


export default function PermisScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Permis Screen</Text>
            <View>
                <Card>
                    <Image source={require('../assets/qr-code.jpg')} />
                </Card>
            </View>
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