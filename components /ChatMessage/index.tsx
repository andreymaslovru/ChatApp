import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {styles} from './style';

const ChatMessage = props => {
  const {message} = props;
  const isMyMessage = () => {
    return message.user.id == 'u1';
  };
  return (
    <View
      style={
        isMyMessage()
          ? [styles.container, styles.myMessContainer]
          : styles.container
      }>
      {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
      <Text>{message.content}</Text>
      <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
};

export default ChatMessage;
