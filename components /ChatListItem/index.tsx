import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ChatListItem = props => {
  const {chatRoom} = props;
  return (
    <TouchableOpacity
      style={{
        minHeight: 90,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          maxWidth: 52,
          maxHeight: 52,
          backgroundColor: 'black',
          borderRadius: 50,
        }}></View>
      <View style={{justifyContent: 'flex-start'}}>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <Text>Firstname Lastname</Text>
          <Text>11/15/19</Text>
        </View>
        <Text>{chatRoom}</Text>
      </View>

      <View style={{justifyContent: 'center'}}>
        <IconAntDesign name="right" />
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
