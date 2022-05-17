import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';


export default function HomeScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text style= {{color: 'black'}}>Hello World
          its a home screen
      </Text>
      <Button title="Go To Login" onPress={() => navigation.navigate('Login')}></Button>
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