import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerItem: {
    minHeight: 90,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    height: '100%',
    width: '100%',
    maxWidth: 52,
    maxHeight: 52,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  infoWrapper: {justifyContent: 'flex-start', width: '70%'},
  topInfo: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 21,
    color: 'black',
  },
  moment: {fontSize: 14, lineHeight: 17, color: '#8E8E93'},
  lastMessage: {
    fontSize: 14,
    lineHeight: 17,
    color: '#8E8E93',
  },
});
