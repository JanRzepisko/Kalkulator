import React, { useState } from "react";
import {View, Text} from "react-native";
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Calculator from './src/Components/Calculator'

const Stack = createStackNavigator();

const MainScreen = (navigation) => {  return(<Calculator/>) }
const HistoryScreen = (navigation) => {  return(<View></View>)  }


function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MainScreen' component={MainScreen}/>
          <Stack.Screen name='HistoryScreen' component={HistoryScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;