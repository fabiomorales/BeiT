import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CheckboxItem from '../../components/CheckBoxItem';
import { connect } from 'react-redux';
import { CheckListState } from 'store/modules/checkList/types';
import { toggleCheckBox } from '../../store/modules/checkList/actions';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import fetchData from '../../services';

export interface Item {
  name: string;
  selected: boolean;
}

const Home = ({
  items,
  dispatch,
}: {
  items: any;
  dispatch: ({}: CheckListState) => void;
}) => {
  const [itemList, setItemList] = useState([]);

  async function initialFunction() {
    const data = await fetchData();
    setItemList(data);
  }

  useEffect(() => {
    initialFunction();
  }, []);

  return (
    <Container>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <View>
          {items.map((item: Item, index: number) => (
            <CheckboxItem
              key={index}
              label={item?.name}
              selected={item.selected}
              onSelect={() => dispatch(toggleCheckBox(item?.selected, index))}
            />
          ))}
        </View>
      </Flex>
    </Container>
  );
};

export default connect(state => ({ items: state.checkList }))(Home);
