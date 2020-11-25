import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import dashboard from './dashboard';
import login from './login';

const Stack = createStackNavigator();

const navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Dashboard" component={dashboard} />
    </Stack.Navigator>
  );
};

export default navigator;
