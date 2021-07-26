import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    width: '70%',
    backgroundColor: 'white',
    paddingVertical: 4,
    borderRadius: 16,
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 50,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  buttonAction: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
