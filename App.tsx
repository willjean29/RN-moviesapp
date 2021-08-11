/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from 'navigation/StackNavigation';
import UiState from 'context/UiState';
const App = () => {
  return (
    <UiState>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </UiState>
  );
};

export default App;
