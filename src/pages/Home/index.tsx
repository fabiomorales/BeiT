import React from 'react';
import CheckboxList from '../../components/CheckBoxList';
import Container from '../../components/Container';
import Flex from '../../components/Flex';

const Home = () => {
  return (
    <Container>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <CheckboxList />
      </Flex>
    </Container>
  );
};

export default Home;
