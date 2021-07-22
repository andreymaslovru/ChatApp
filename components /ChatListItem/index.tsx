import React from 'react';
import {MaskedViewComponent, TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {styles} from './style';

const ChatListItem = props => {
  const {chatRoom} = props;
  const user = chatRoom?.users[1];

  return (
    <TouchableOpacity
      onPress={() => console.log('click chat')}
      style={styles.containerItem}>
      <Image source={{uri: user?.imageUri}} style={styles.avatar} />
      <View style={styles.infoWrapper}>
        <View style={styles.topInfo}>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.moment}>
            {moment(chatRoom?.lastMessage.createdAt).format('YYYY/MM/DD')}
          </Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={2}>
          {chatRoom?.lastMessage.content}
        </Text>
      </View>

      <View style={{justifyContent: 'center'}}>
        <IconAntDesign name="right" size={14} color={'#8E8E93'} />
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
