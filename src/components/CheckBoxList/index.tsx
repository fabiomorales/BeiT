import React from 'react';
import { View } from 'react-native';
import CheckboxItem from '../CheckBoxItem';
import { connect } from 'react-redux';
import { CheckListState } from 'store/modules/checkList/types';
import { toggleCheckBox } from '../../store/modules/checkList/actions';

export interface Item {
  label: string;
  selected: boolean;
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

export default connect(state => ({ items: state.checkList }))(CheckboxList);
