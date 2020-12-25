import Flex from './components/Flex';
import React from 'react';
import { Text } from 'react-native';
import Container from './components/Container';

const App = () => {
  return (
    <Container>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Text>Helo Wold</Text>
      </Flex>
    </Container>
  );
};

export default App;
