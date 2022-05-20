import React from "react";
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Card, Icon } from '@rneui/base'


export default function HomeScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text style= {{color: 'black'}}>Hello World
          its a home screen
      </Text>
      <Button title="Go To Login" onPress={() => navigation.navigate('Login')}></Button>

      <View style={{flexDirection: 'row'}}>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={require('../assets/img1.jpg')}
          />
          <Text>Pranshu Chittora</Text>
        </View>
      </Card>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={require('../assets/img1.jpg')}
          />
          <Text>Pranshu Chittora</Text>
        </View>
      </Card>
      
      </View>
      <View style={{flexDirection: 'row'}}>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={require('../assets/img1.jpg')}
          />
          <Text>Pranshu Chittora</Text>
        </View>
      </Card>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={require('../assets/img1.jpg')}
          />
          <Text>Pranshu Chittora</Text>
        </View>
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
    
  }
})