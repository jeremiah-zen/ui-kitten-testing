/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
