import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './StopWatch';

class App extends Component {

  state = {
    numChildren : 1
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }

  render() {

    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<StopWatch />);
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"alt="logo"  />
          {children}
          <button onClick={this.onAddChild}>Add</button>
        </header>
      </div>
    );
  }
}

export default App;