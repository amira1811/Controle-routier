import React from "react";
import { View, Text, StyleSheet } from 'react-native';


export default function VisiteScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Visite Screen</Text>
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