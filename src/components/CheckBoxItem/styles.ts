import { StyleSheet } from 'react-native';

const styles = (radioColor?: string) =>
  StyleSheet.create({
    listItem: {
      flexDirection: 'row',
      paddingBottom: 10,
      borderColor: 'gray',
      alignItems: 'center',
    },
    bordered: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 4,
      marginBottom: 10,
      padding: 17,
      paddingBottom: 17,
    },
    borderedSelected: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
    checkboxContainer: {
      marginTop: 2,
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
    labelWithContent: {
      marginBottom: 8,
    },
  });

export default styles;
