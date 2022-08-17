import React, { useState } from "react";
import {View, Text} from "react-native";
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenA from './src/Screens/ScreenA'

const Stack = createStackNavigator();


function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen_A' component={ScreenA}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;