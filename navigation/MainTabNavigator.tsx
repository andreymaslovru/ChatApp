import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

const TopTab = createMaterialTopTabNavigator();

export const MainTabNavigator = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          backgroundColor: 'green',
        },
        indicatorStyle: {
          backgroundColor: 'white',
          height: 5,
        },
        labelStyle: {
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen name="TopTwo" component={TabOneScreen} />
      <TopTab.Screen name="TopOne" component={TabTwoScreen} />
    </TopTab.Navigator>
  );
};

export default MainTabNavigator;
