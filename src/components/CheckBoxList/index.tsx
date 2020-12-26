import React from 'react';
import { View } from 'react-native';
import CheckboxItem from '../CheckBoxItem';
import { connect } from 'react-redux';
import { CheckListState } from 'store';

export interface Item {
  label: string;
  selected: boolean;
}

function toggleCheckBox(selected: boolean, index: number) {
  return {
    type: 'SET_CHECKBOX_CHECKED',
    payload: {
      selected,
      index,
    },
  };
}

const CheckboxList = ({
  items,
  dispatch,
}: {
  items: any;
  dispatch: ({}: CheckListState) => void;
}) => (
  <View>
    {items.map((item: Item, index: number) => (
      <CheckboxItem
        key={index}
        label={item.label}
        selected={item.selected}
        onSelect={() => dispatch(toggleCheckBox(item.selected, index))}
      />
    ))}
  </View>
);

export default connect(state => ({ items: state }))(CheckboxList);
