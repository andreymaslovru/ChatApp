import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {paddingLeft: 16, color: 'white', fontWeight: 'bold'},
  headerRightBox: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
    marginRight: 16,
  },
  headerLeftBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  iconLeft: {height: 35, width: 35, borderRadius: 50},
  iconRightIndent: {marginRight: 16},
});
