import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './StopWatch/StopWatch';
import plus from './plus2.png'

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
      children.push(<StopWatch key={i}/>);
    };

    return (
      <div className="App">
        <header className="App-header">
          <img hidden src={logo} className="App-logo"alt="logo"  />
          {children}
          <img className="App-plus" alt="plus" src={plus} onClick={this.onAddChild} />
        </header>
      </div>
    );
  }
}

export default App;