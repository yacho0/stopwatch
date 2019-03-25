import React, { Component } from 'react';
import Interface from './Interface';

class StopWatch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            run: true,
            stop: false,
            desec: 0,
            secound: 0,
            minute: 0,
            hour: 0,
            start1 : 0,
            start2 : 0,
            start3 : 0,
            start4 : 0,
        }
    };

    // service buttons play and pause
    constrolWatch(event) {
        event.preventDefault();

        var localStart1 = 0;
        var localStart2 = 0;
        var localStart3 = 0;
        var localStart4 = 0;
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
            localStart1 = setInterval(() => this.tickDesec(), ds);
            localStart2 = setInterval(() => this.tickSec(), sec);
            localStart3 = setInterval(() => this.tickMin(), min);
            localStart4 = setInterval(() => this.tickHour(), hour);

            this.setState({
                start1 : localStart1,
                start2 : localStart2,
                start3 : localStart3,
                start4 : localStart4,
            })
        } else {
            clearInterval(this.state.start1);
            clearInterval(this.state.start2);
            clearInterval(this.state.start3);
            clearInterval(this.state.start4);
        }
    }

    // service of button stop time
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

        clearInterval(this.state.start1);
        clearInterval(this.state.start2);
        clearInterval(this.state.start3);
        clearInterval(this.state.start4);
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
