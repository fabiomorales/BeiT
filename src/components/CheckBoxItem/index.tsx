import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Checkbox from '../CheckBox';
import Flex from '../Flex';
import styles from './styles';

export interface CheckboxItemProps {
  label?: string;
  selected: boolean;
  onSelect: () => void;
}

const CheckboxItem: FC<CheckboxItemProps> = ({ label, selected, onSelect }) => {
  return (
    <Flex style={styles().checkboxContainer}>
      <View>
        <Checkbox selected={selected} onSelect={() => onSelect()} />
      </View>
      <View style={styles().contentColumn}>
        {label && (
          <Text
            style={[styles().label, selected ? styles().labelSelected : {}]}>
            {label}
          </Text>
        )}
      </View>
    </Flex>
  );
};

export default CheckboxItem;
