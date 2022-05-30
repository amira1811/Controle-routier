import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from "react-native-elements";
import { Link } from "@react-navigation/native";


export default function AssurScreen() {
    return(
        <View style= { styles.container}>
            <Text style={styles.text}>Assurance Screen</Text>
            <View>
                <Card>
                    <Image source={require('../assets/qr-code.jpg')} />
                </Card>
            </View>
            <Link to={{screen: 'Renouvellement'}} style={{color: 'blue'}}>Renouveler son assurance</Link>

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