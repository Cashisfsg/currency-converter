import React from 'react';
import './App.css';
import Provider from './containers/context';
import Converter from './containers/converter';

function App() {

  return (
    <Provider>
      <Converter />
    </Provider>
  );
}

export default App;
