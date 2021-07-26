import React from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import ChatListItem from '../../components /ChatListItem/index';
import data from '../../assets/data';
import {FlatList} from 'react-native-gesture-handler';

const ChatScreen = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatScreen;
