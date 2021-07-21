import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

import NotFoundScreen from '../screens/NotFoundScreen';
import {View} from 'react-native';
import MainTabNavigator from './MainTabNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'green', shadowOpacity: 0, elevation: 0},
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: 'WhatsApp',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between',
                marginRight: 16,
              }}>
              <IconAntDesign
                name="search1"
                size={24}
                color="white"
                style={{marginRight: 16}}
              />
              <IconEntypo name="dots-three-vertical" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};
