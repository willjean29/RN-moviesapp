import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import DetailMovieScreen from 'screens/DetailMovieScreen';
import {Movie} from 'interfaces/movieDb.interface';

export type StackNavigationParams = {
  HomeScreen: undefined;
  DetailMovieScreen: {
    movie: Movie;
  };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends StackNavigationParams {}
  }
}

const Stack = createStackNavigator<StackNavigationParams>();

export interface StackNavigationProps {}

const StackNavigation: React.FC<StackNavigationProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailMovieScreen"
        component={DetailMovieScreen}
        initialParams={{}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
