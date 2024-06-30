import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ProcessedScreen from '../screens/ProcessedScreen';
import RouteName from './RouteName';
import LoaderScreen from '../components/LoaderScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name={RouteName.BOTTOM_TAB}
        component={BottomTab}
      />
      <Stack.Screen
        name={RouteName.PROCESSED_SCREEN}
        component={ProcessedScreen}
      />
      <Stack.Screen
        name={RouteName.LOADER_SCREEN}
        component={LoaderScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
