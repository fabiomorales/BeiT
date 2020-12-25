import React, { useState } from 'react';
import CheckboxItem from './components/CheckBoxItem';
import Container from './components/Container';
import Flex from './components/Flex';

const App = () => {
  const [checkSelected, setCheckSelected] = useState(false);

  return (
    <Container>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <CheckboxItem
          label="teste"
          selected={checkSelected}
          onSelect={() => setCheckSelected(!checkSelected)}
        />
      </Flex>
    </Container>
  );
};

export default App;
