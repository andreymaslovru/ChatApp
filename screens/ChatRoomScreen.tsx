import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ChatRoomScreen = () => {
  const route = useRoute();
  const information = route.params.information;
  console.log(information, 'informationinformationinformation');
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  );
};

export default ChatRoomScreen;
