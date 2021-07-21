import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import IconEntypo from 'react-native-vector-icons/Entypo';
import ChatListItem from '../components /ChatListItem';

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
          height: 4,
        },
        labelStyle: {
          fontWeight: 'bold',
        },
        showIcon: true,
      }}>
      <TopTab.Screen
        name="Camera"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <IconEntypo name="camera" size={18} color="white" />
          ),
          tabBarLabel: () => null,
        }}
      />
      <TopTab.Screen name="Chats" component={ChatListItem} />
      <TopTab.Screen name="Status" component={TabTwoScreen} />
      <TopTab.Screen name="Calls" component={TabTwoScreen} />
    </TopTab.Navigator>
  );
};

export default MainTabNavigator;
