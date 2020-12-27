import React from 'react';
import { Provider } from 'react-redux';
import CheckboxList from './components/CheckBoxList';
import Container from './components/Container';
import Flex from './components/Flex';
import Store from './store';

const App = () => {
  return (
    <Provider store={Store}>
      <Container>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <CheckboxList />
        </Flex>
      </Container>
    </Provider>
  );
};

export default App;
