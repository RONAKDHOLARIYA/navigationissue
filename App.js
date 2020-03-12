import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './App/menu';
import Info from './App/info';
const Stack = createStackNavigator();
const App = ({params}) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
