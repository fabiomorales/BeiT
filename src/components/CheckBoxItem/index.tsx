import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Checkbox from '../CheckBox';
import styles from './styles';

export interface CheckboxItemProps {
  label?: string;
  selected: boolean;
  onSelect: (selected: boolean) => void;
}

const CheckboxItem: FC<CheckboxItemProps> = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles().listItem}
      onPress={() => onSelect(!selected)}>
      <View style={styles().checkboxContainer}>
        <Checkbox selected={selected} onSelect={onSelect} />
      </View>
      <View style={styles().contentColumn}>
        {label && (
          <Text
            style={[styles().label, selected ? styles().labelSelected : {}]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CheckboxItem;
