import React, { Component } from 'react';
import './Interface.css'
import play from './play.png';
import pause from './pause.png';
import stop from './stop.png';


const Interface = (props) => {

    return (
        // <button onClick={props.stopWatch}>Stop</button>
        <div>
            <img style={props.stateRun ? {display : 'inline'} : {display : 'none'}} className="Play-image" src={play} alt="my image" onClick={props.constrolWatch} />
            <img style={props.stateRun ? {display : 'none'} : {display : 'inline'}} className="Pause-image" src={pause} alt="my image" onClick={props.constrolWatch} />
            <img style={props.stateStop ? {display : 'inline'} : {display : 'none'}} className="Stop-image" src={stop} alt="my image" onClick={props.stopWatch} />
        </div>
    );
};

export default Interface;