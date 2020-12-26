import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

export interface CheckboxProps {
  selected: boolean;
  onSelect: () => void;
  color?: string;
}

const Checkbox: FC<CheckboxProps> = ({ selected, onSelect, color }) => {
  return (
    <TouchableOpacity
      style={[styles().radio]}
      onPress={() => {
        onSelect();
      }}>
      {selected && <View style={styles(color).inner} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
