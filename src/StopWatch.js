import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Interface from './Interface';

var set1 = '';
var set2 = '';
var set3 = '';
var set4 = '';


class StopWatch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            run: true,
            stop: false,
            desec: 0,
            secound: 0,
            minute: 0,
            hour: 0
        }
    };

    constrolWatch(event) {
        event.preventDefault();

        const ds = 100;
        const sec = 1000;
        const min = 60000;
        const hour = 3600000;

        this.setState((prevState) => {
            return {
                run: !prevState.run,
                stop: true
            }
        });

        if (this.state.run) {
            set1 = setInterval(() => this.tickDesec(), ds);
            set2 = setInterval(() => this.tickSec(), sec);
            set3 = setInterval(() => this.tickMin(), min);
            set4 = setInterval(() => this.tickHour(), hour);
        } else {
            console.log('stop');
            clearInterval(set1);
            clearInterval(set2);
            clearInterval(set3);
            clearInterval(set4);
        }
    }

    stopWatch(event) {
        event.preventDefault();

        this.setState({
            run: true,
            stop: false,
            desec: 0,
            secound: 0,
            minute: 0,
            hour: 0
        })

        clearInterval(set1);
        clearInterval(set2);
        clearInterval(set3);
        clearInterval(set4);
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

    // add zeros to numbers in front
    pad(num, size) {
        var s = num + ""; //have 1 lenght
        while (s.length < size) s = "0" + s;  // 1 < 2 so +0
        return s;
    }

    render() {
        return (
            <div>
                <p>
                    {this.pad(this.state.hour, 2)}:
              {this.pad(this.state.minute, 2)}:
              {this.pad(this.state.secound, 2)}:
              {this.pad(this.state.desec, 1)}
                </p>
                <Interface
                    stateRun={this.state.run}
                    stateStop={this.state.stop}
                    constrolWatch={this.constrolWatch.bind(this)}
                    stopWatch={this.stopWatch.bind(this)} />
            </div>
        );
    }
}

export default StopWatch;
