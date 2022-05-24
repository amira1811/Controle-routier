import React from "react";
import { View, Text, StyleSheet } from 'react-native';


export default function CGScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Carte Grise Screen</Text>
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