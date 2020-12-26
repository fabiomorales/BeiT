import { StyleSheet } from 'react-native';

const styles = (radioColor?: string) =>
  StyleSheet.create({
    checkboxContainer: {
      marginTop: 4,
      alignSelf: 'flex-start',
    },
    radio: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderColor: 'gray',
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
    },
    inner: {
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: 'gray',
      lineHeight: 21,
    },
    selected: {
      borderColor: 'gray',
    },
    labelSelected: {
      color: radioColor ? radioColor : 'blue',
    },
    contentColumn: {
      marginLeft: 10,
    },
  });

export default styles;
