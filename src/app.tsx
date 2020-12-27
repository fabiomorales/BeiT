import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Store from './store';

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default App;
