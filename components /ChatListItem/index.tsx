import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ChatListItem = props => {
  const {chatRoom} = props;
  const user = chatRoom?.users[1];
  console.log(user, 'gergergere');
  return (
    <TouchableOpacity
      style={{
        minHeight: 90,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image
        source={{uri: user?.imageUri}}
        style={{
          height: '100%',
          width: '100%',
          maxWidth: 52,
          maxHeight: 52,
          backgroundColor: 'black',
          borderRadius: 50,
        }}
      />
      <View style={{justifyContent: 'flex-start'}}>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <Text>{user?.name}</Text>
          <Text>{chatRoom?.lastMessage.createdAt}</Text>
        </View>
        <Text style={{width: 150}} numberOfLines={1}>{chatRoom?.lastMessage.content}</Text>
      </View>

      <View style={{justifyContent: 'center'}}>
        <IconAntDesign name="right" />
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
