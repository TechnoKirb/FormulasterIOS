import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import Algebra1 from "./screens/Algebra1";
import Algebra2 from "./screens/Algebra2";
import Geometry from "./screens/Geometry";
import Trigonometry from "./screens/Trigonometry";
import Precal from "./screens/Precal";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Algebra1" component={Algebra1} />
        <Stack.Screen name="Algebra2" component={Algebra2} />
        <Stack.Screen name="Geometry" component={Geometry} />
        <Stack.Screen name="Trigonometry" component={Trigonometry} />
        <Stack.Screen name="Precal" component={Precal} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;