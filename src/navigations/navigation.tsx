import React from 'react';
import { useColorScheme, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Ionicons } from '@expo/vector-icons';
// Screens
import { BusinessDetails } from '@screens/BusinessDetails';
import { Businesses } from '@screens/Businesses';
import Business from '@screens/Business';
import Person from '@screens/Person';

const { Navigator, Screen, Group } = createStackNavigator<RootStackParamList>();

/**
 * This component handle the routes of the app
 * @function appNavigation
 * @author Rich Jimenez <richjimenez@me.com>
 */
export const AppNavigator = () => {
  const scheme = useColorScheme();
  const BackIcon = ({ navigation }: any) => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons name="chevron-back" size={28} color="#3366FF" />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigator>
        <Group>
          <Screen name="Businesses" component={Businesses} />
          <Screen
            name="BusinessDetails"
            component={BusinessDetails}
            options={({ navigation }) => ({
              title: '',
              headerLeft: () => <BackIcon navigation={navigation} />,
            })}
          />
        </Group>
        <Group screenOptions={{ presentation: 'modal' }}>
          <Screen
            name="Business"
            component={Business}
            options={({ navigation, route }) => ({
              title: route.params.title,
              headerLeft: () => <BackIcon navigation={navigation} />,
            })}
          />
          <Screen
            name="Person"
            component={Person}
            options={({ navigation, route }) => ({
              title: route.params.title,
              headerLeft: () => <BackIcon navigation={navigation} />,
            })}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};
