// here will put handle for example append next stopwatch
// loop like this is not ok in App, is ugly

import React, { Component } from 'react';
import StopWatch from '../StopWatch/StopWatch';
import plus from './plus2.png'

class Controller extends Component {

    state = {
        numChildren: 1
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }

    render() {

        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<StopWatch key={i} />);
        };

        return (
            <div>
                {children}
                <img className="App-plus" alt="plus" src={plus} onClick={this.onAddChild} />
            </div>
        )
    };
}

export default Controller;
