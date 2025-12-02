import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';
import RecipeScreen from './../screens/RecipeScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />

    </Stack.Navigator>

    
  )
}

export default StackNavigator