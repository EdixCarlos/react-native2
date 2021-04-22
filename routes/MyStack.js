import React from 'react'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Details from '../screens/Details'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'orange'
            },
            headerTintColor:'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}> 
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>

    )
}

export default MyStack
