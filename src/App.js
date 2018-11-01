import React from 'react';
import './App.css';

import Menu from './components/Menu';
import { MENU_OPTIONS } from './constants/constants';

const App = () => {
  const onSelect = (values) => {
    console.log(values);
  }

  return (
    <div className="App">
      <Menu
        data={MENU_OPTIONS}
        labelField='value'
        onSelect={onSelect}
      />
    </div>
  );
}

export default App;
