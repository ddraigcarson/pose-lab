import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu';
import { WEEK } from './constants/constants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu data={WEEK}/>
      </div>
    );
  }
}

export default App;
