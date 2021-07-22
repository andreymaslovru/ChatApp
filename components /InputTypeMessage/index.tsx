import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './style';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InputTypeMessage = () => {
  const [message, setMessage] = useState('');
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: '80%',
          borderRadius: 50,
          padding: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
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
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
