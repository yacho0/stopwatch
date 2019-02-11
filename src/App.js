import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Present from './Present';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      secound : 0,
      minute : 0
    }
  };

  tack () {
    this.setState(state => ({
      secound : (state.secound + 1)%3
    }));

    // if(state.secound === 3){
      this.setState(state => ({
        minute : (state.secound)/3
      }));
    // }

  }

  componentDidMount (){
    this.interval = setInterval(() => this.tack(), 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>


          <form>
            <input />
          </form>

          <Present text="My text" />

          <p>{this.state.minute}</p>
          <p>{this.state.secound}</p>

        </header>
      </div>
    );
  }
}

export default App;
