import React, { useState } from "react";
import {View, Text} from "react-native";
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Calculator from './src/Components/Calculator'

const Stack = createStackNavigator();


function App(){
  return(
    <Calculator />
  )
}

export default App;