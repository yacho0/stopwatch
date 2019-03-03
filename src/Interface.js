import React, { Component } from 'react';


const Interface = (props) => {

    return (
        // <button onClick={props.stopWatch}>Stop</button>
        <div>
            <button onClick={props.constrolWatch}>Start</button>
            <button onClick={props.constrolWatch}>Pause</button>
            <button onClick={props.stopWatch}>Stop</button>
        </div>
    );
};

export default Interface;