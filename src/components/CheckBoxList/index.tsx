import React, { FC } from 'react';
import { View } from 'react-native';
import CheckboxItem from '../CheckBoxItem';

export interface Item {
  label: string;
  selected: boolean;
}

const initialState = [
  {
    label: 'Basic Facemask',
    selected: false,
  },
  {
    label: 'Filtered Respirator',
    selected: false,
  },
  {
    label: 'Self-Contained Breathing Apparatus',
    selected: false,
  },
  {
    label: 'Protective Clothing',
    selected: false,
  },
  {
    label: 'Goggles',
    selected: false,
  },
];

const CheckboxList: FC = () => {
  return (
    <View>
      {initialState.map((item: Item, index: number) => (
        <CheckboxItem
          key={index}
          label={item.label}
          selected={item.selected}
          onSelect={() => true}
        />
      ))}
    </View>
  );
};

export default CheckboxList;
