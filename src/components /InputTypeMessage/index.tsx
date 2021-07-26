import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './style';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InputTypeMessage = () => {
  const [message, setMessage] = useState('');

  const onMicroPress = () => {
    console.log('micro press');
  };

  const onSendPress = () => {
    console.log('send press');
  };

  const onPressButton = () => {
    !message ? onMicroPress() : onSendPress();
  };

  return (
    <View
      style={styles.container}>
      <View
        style={styles.inputBox}>
        <IconSimpleLineIcons name="emotsmile" size={18} color="grey" />
        <TextInput
          placeholder="Type to message"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          numberOfLines={4}
          multiline
        />
        <IconEntypo name="camera" size={18} color="grey" />
        <IconSimpleLineIcons name="paper-clip" size={18} color="grey" />
      </View>
      <TouchableOpacity
        onPress={() => onPressButton()}
        style={styles.buttonAction}>
        {!message ? (
          <IconFontAwesome5 name="microphone" size={18} color="white" />
        ) : (
          <IconMaterialCommunityIcons name="send" size={18} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputTypeMessage;
