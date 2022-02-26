import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
// Screens
import { BusinessDetails } from '@screens/BusinessDetails';
import { Business } from '@screens/Business';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigator>
        <Screen name="Business" component={Business} />
        <Screen name="BusinessDetails" component={BusinessDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
