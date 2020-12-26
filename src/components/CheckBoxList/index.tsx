import React from 'react';
import { View } from 'react-native';
import CheckboxItem from '../CheckBoxItem';
import { connect } from 'react-redux';

export interface Item {
  type: string;
  label: string;
  selected: boolean;
  index: number;
}

function toggleCheckBox(item: Item, index: number) {
  return {
    type: 'SET_CHECKBOX_CHECKED',
    item,
    index,
  };
}

const CheckboxList = ({ items, dispatch }) => (
  <View>
    {items.map((item: Item, index: number) => (
      <CheckboxItem
        key={index}
        label={item.label}
        selected={item.selected}
        onSelect={() => dispatch(toggleCheckBox(item, index))}
      />
    ))}
  </View>
);

export default connect(state => ({ items: state }))(CheckboxList);
