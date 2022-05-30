import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from "react-native-elements";

export default function CGScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Carte Grise Screen</Text>
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