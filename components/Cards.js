import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from '@rneui/base';


export default function Cards(navigation) {
    return(
        <View style= {styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Assurance')}>
                    <Card containerStyle={{}} wrapperStyle={{}}>
                        <Card.Title>ASSURANCE</Card.Title>
                        <Card.Divider />
                        <View style={{ position: "relative", alignItems: "center"}}>
                            <Card.Image style = {styles.cardImage}  source={require('../assets/img1.jpg')} />
                            <Text style={styles.text}>ASSURANCE</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Permis')}>
                    <Card containerStyle={{}} wrapperStyle={{}}>
                        <Card.Title>PERMIS</Card.Title>
                        <Card.Divider />
                        <View style={{ position: "relative", alignItems: "center" }} >
                            <Card.Image style = {styles.cardImage} source={require('../assets/img1.jpg')} />
                            <Text style={styles.text}>PERMIS</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Carte Grise')}>
                    <Card >
                        <Card.Title></Card.Title>
                        <Card.Divider />
                        <View style={{ position: "relative", alignItems: "center"}}>
                            <Card.Image style = {styles.cardImage} source={require('../assets/img1.jpg')}/>
                            <Text style={styles.text}>CARTE GRISE</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate ('Visite')}>
                    <Card>
                        <Card.Title>VISITE</Card.Title>
                        <Card.Divider />
                        <View style={{position: "relative", alignItems: "center"}} >
                        <Card.Image style = {styles.cardImage} source={require('../assets/img1.jpg')} />
                            <Text style={styles.text}>VISITE</Text>
                            </View>
                    </Card>
                </TouchableOpacity>
            </View>
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