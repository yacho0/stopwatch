import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Interface from './Interface';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flaga: 0,     //nie wiadomo do czego ta flaga?
      desec: 0,
      secound: 0,
      minute: 0,
      hour: 0
    }
  };

  startWatch(event){

    event.preventDefault();

    const ds = 100;
    const sec = 1000;
    const min = (60 * sec);
    const hour = (60 * min);

    // if (this.state.flaga === 100) {
      console.log("i am in");

      this.interval = setInterval(() => this.tickDesec(), ds);
      this.interval = setInterval(() => this.tickSec(), sec);
      this.interval = setInterval(() => this.tickMin(), min);
      this.interval = setInterval(() => this.tickHour(), hour);
    // }


  }

  tickDesec() {
    this.setState(state => ({
      desec: (state.desec + 1) % 10
    }));
  }

  tickSec() {
    this.setState(state => ({
      secound: (state.secound + 1) % 60
    }));

  }

  tickMin() {
    this.setState(state => ({
      minute: (state.minute + 1) % 60
    }));
  }

  tickHour() {
    this.setState(state => ({
      hour: (state.hour + 1) % 24
    }));
  }


  // componentDidMount() {

  // }

  controlStopwatcher() {

    this.setState(state => ({
      // flaga: !(state.flaga)
      flaga: 100
    })
    );

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>{this.state.desec} : {this.state.secound} : {this.state.minute} : {this.state.hour}</p>

          {/* <button onClick={this.controlStopwatcher.bind(this)}>Function</button> */}
          {/* <p>{this.state.flaga}</p> */}
          <Interface startWatch={this.startWatch.bind(this)} />
        </header>
      </div>
    );
  }
}

export default App;
