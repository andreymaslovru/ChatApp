import React from 'react';
import {MaskedViewComponent, TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

const ChatListItem = props => {
  const {chatRoom} = props;
  const user = chatRoom?.users[1];
  console.log(user, 'gergergere');
  console.log(chatRoom, 'chatRoomchatRoomchatRoom');
  
  return (
    <TouchableOpacity
      onPress={() => console.log('click chat')}
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
          <Text>{moment(chatRoom?.lastMessage.createdAt).format('YYYY MM DD')}</Text>
        </View>
        <Text style={{width: 150}} numberOfLines={1}>
          {chatRoom?.lastMessage.content}
        </Text>
      </View>

      <View style={{justifyContent: 'center'}}>
        <IconAntDesign name="right" />
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
