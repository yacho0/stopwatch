import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Interface from './Interface';
import StopWatch from './StopWatch';

var set1 = '';
var set2 = '';
var set3 = '';
var set4 = '';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <StopWatch />
        </header>
      </div>
    );
  }
}

export default App;
