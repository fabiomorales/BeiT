import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

export interface CheckboxProps {
  selected: boolean;
  onSelect: (selected: boolean) => void;
  color?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  selected,
  onSelect,
  color,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles().radio]}
      onPress={() => {
        onSelect(!selected);
      }}>
      {selected && <View style={styles(color).inner} {...props} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
