
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen"
import { NativeWindStyleSheet } from "nativewind";
const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({
    default: "native",
});


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
           </Stack.Navigator>
      </NavigationContainer>

  );
}


