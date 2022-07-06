import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import AssurScreen from "./screens/AssurScreen";
import PermisScreen from "./screens/PermisScreen";
import CGScreen from "./screens/CGScreen";
import VisiteScreen from "./screens/VisiteScreen";
import RenouvellementScreen from "./screens/RenouvellementScreen";
import DemandeScreen from "./screens/DemandeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Assurance" component={AssurScreen}/>
        <Stack.Screen name="Permis" component={PermisScreen}/>
        <Stack.Screen name="Carte Grise" component={CGScreen}/>
        <Stack.Screen name="Visite" component={VisiteScreen}/>
        <Stack.Screen name="Renouvellement" component={RenouvellementScreen}/>
        <Stack.Screen name="DemandeRV" component={DemandeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}
