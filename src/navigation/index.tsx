import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity, View, Image, Text} from 'react-native';
import {MainTabNavigator} from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen/index';
import {styles} from './style';

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
            <View style={styles.headerRightBox}>
              <IconAntDesign
                name="search1"
                size={16}
                color="white"
                style={styles.iconRightIndent}
              />
              <IconEntypo name="dots-three-vertical" size={16} color="white" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({navigation, route}) => ({
          headerTitle: () => (
            <Text style={styles.title}>
              {route.params.information.users[1].name}
            </Text>
          ),
          headerLeft: () => (
            <View style={styles.headerLeftBox}>
              <Image
                style={styles.iconLeft}
                source={{uri: route.params.information.users[1].imageUri}}
              />
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconMaterialIcons
                  name="arrow-back-ios"
                  size={16}
                  style={{marginRight: 8}}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <IconFontAwesome
                name="video-camera"
                size={16}
                style={{marginRight: 16}}
                color="white"
              />
              <IconFontAwesome
                name="phone"
                size={16}
                style={{marginRight: 16}}
                color="white"
              />
              <IconEntypo
                name="dots-three-vertical"
                size={16}
                color="white"
                style={{marginRight: 16}}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
