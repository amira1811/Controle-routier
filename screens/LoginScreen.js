import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


export default function LoginScreen() {
    return(
        <View style={styles.container}>
            <View><SignIn/>
            <View style={styles.separator} />
    
            {/* <Text>Vous n'avez pas de compte?
            </Text> */}
            <SignUp/></View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
})