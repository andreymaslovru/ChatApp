import React from 'react';
import {View, Text, FlatList, ImageBackground} from 'react-native';
import {useRoute} from '@react-navigation/native';

import dataMessages from '../assets/dataMessages';
import ChatMessage from '../components /ChatMessage';

import BG from '../assets/BG.png';
import InputTypeMessage from '../components /InputTypeMessage';

const ChatRoomScreen = () => {
  const route = useRoute();
  const information = route.params.information;
  console.log(information, 'informationinformationinformation');

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <FlatList
          data={dataMessages.messages}
          renderItem={({item}) => <ChatMessage message={item} />}
          keyExtractor={item => item.id}
          style={{padding: 16}}
          ListHeaderComponent={InputTypeMessage}
          inverted
        />
      </ImageBackground>
    </View>
  );
};

export default ChatRoomScreen;
