import React from "react";
import { View, Text, StyleSheet } from 'react-native';



export default function RenouvellementScreen() {
    return(
        <View style={styles.container}>
            <Text style={{color: 'black'}}>Renouvellement Screen</Text>
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