import React, {useState, useEffect} from 'react';
import FilePDF from "./components/FilePDF";
import FilePDFMenores from "./components/FilePDFMenores";
import FilePDFGloria from "./components/FilePDFGloria";
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';

export default function App() {

  const [isReady, setIsReady] = useState(false);
  const Stack = createStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PDF" component={FilePDF} />
        <Stack.Screen name="PDFGloria" component={FilePDFGloria} />
        <Stack.Screen name="PDFMenores" component={FilePDFMenores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

