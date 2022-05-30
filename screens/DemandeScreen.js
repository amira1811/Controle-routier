import React from "react";
import { View, Text, StyleSheet } from 'react-native';



export default function DemandeScreen() {
    return(
        <View style={styles.container}>
            <Text style={{color: 'black'}}>Demande Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})