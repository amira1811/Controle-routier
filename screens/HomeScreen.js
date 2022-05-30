import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';


export default function HomeScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text style= {styles.text}>Hello World
          its a home screen
      </Text>

      <Button title="Go To Login" onPress={() => navigation.navigate('Login')}></Button>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Assurance')}>
          <Card>
              <Card.Title>ASSURANCE</Card.Title>
              <Card.Divider />
              <View style={{ position: "relative", alignItems: "center"}}>
                  <Image style = {styles.cardImage}  source={require('../assets/img1.jpg')} />
                  <Text style={styles.text}>ASSURANCE</Text>
              </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Visite')}>
          <Card>
              <Card.Title>VISITE</Card.Title>
              <Card.Divider />
              <View style={{position: "relative", alignItems: "center"}} >
                <Image style = {styles.cardImage} source={require('../assets/img1.jpg')} />
                <Text style={styles.text}>VISITE</Text>
              </View>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Permis')}>
          <Card>
              <Card.Title >PERMIS</Card.Title>
              <Card.Divider />
              <View style={{ position: "relative", alignItems: "center" }} >
                  <Image style = {styles.cardImage} source={require('../assets/img1.jpg')} />
                  <Text style={styles.text}>PERMIS</Text>
              </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Carte Grise')}>
          <Card >
              <Card.Title>CARTE GRISE</Card.Title>
              <Card.Divider />
              <View style={{ position: "relative", alignItems: "center"}}>
                  <Image style = {styles.cardImage} source={require('../assets/img1.jpg')}/>
                  <Text style={styles.text}>CARTE GRISE</Text>
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
    alignItems: 'center',
    
  },
  text: {
    color: 'black'
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  card: {
    borderRadius: 30,
    overflow: 'hidden'
  }
  
})