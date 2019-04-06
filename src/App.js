import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './Controller/Controller'

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img hidden src={logo} className="App-logo"alt="logo"  />
          <Controller />
          <p>Test 6.04.19</p>
        </header>
      </div>
    );
  }
}

export default App;