import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from '@rneui/base';


export default function Cards() {
    return(
        <View style= {styles.container}>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black'
    }, 
    cardImage: {
        width: '100%',
        height: 100,
    },
})