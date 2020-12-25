import { StyleSheet } from 'react-native';

const styles = (color?: string) =>
  StyleSheet.create({
    radio: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderColor: 'gray',
      width: 16,
      height: 16,
      borderRadius: 4,
      borderWidth: 1,
    },
    inner: {
      width: 16,
      height: 16,
      borderRadius: 4,
      backgroundColor: color ? color : 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
