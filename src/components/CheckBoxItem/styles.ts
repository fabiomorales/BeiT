import { StyleSheet } from 'react-native';

const styles = (radioColor?: string) =>
  StyleSheet.create({
    checkboxContainer: {
      marginTop: 4,
      alignSelf: 'flex-start',
    },
    label: {
      color: 'gray',
      lineHeight: 17,
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
