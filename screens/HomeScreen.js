import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


const Tab = createBottomTabNavigator();
export default function HomeScreen({navigation}) {
  return(
    <ScrollView style={styles.container}>
      <Text style= {styles.text}>Hello World
          its a home screen
      </Text>

      
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
              <Card.Title>VISITE TECHNIQUE</Card.Title>
              <Card.Divider />
              <View style={{position: "relative", alignItems: "center"}} >
                <Image style = {styles.cardImage} source={require('../assets/img1.jpg')} />
                <Text style={styles.text}>VISITE TECHNIQUE</Text>
              </View>
          </Card>
        </TouchableOpacity>
      
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
           
        {/* <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name='Home' component={'HomeScreen'}/>  
              </Tab.Navigator>          </NavigationContainer> */}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40
    
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
    overflow: 'hidden',
    margin: 10
  }
  
})