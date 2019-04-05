import React from 'react';
import PropTypes from 'prop-types';
import './Interface.css'
import play from './play.png';
import pause from './pause.png';
import stop from './stop.png';

const Interface = (props) => {
    return (
        <div>
            <img style={props.stateRun ? {display : 'inline'} : {display : 'none'}} className="Play-image" src={play} alt="my1" onClick={props.constrolWatch} />
            <img style={props.stateRun ? {display : 'none'} : {display : 'inline'}} className="Pause-image" src={pause} alt="my2" onClick={props.constrolWatch} />
            <img style={props.stateStop ? {display : 'inline'} : {display : 'none'}} className="Stop-image" src={stop} alt="my3" onClick={props.stopWatch} />
        </div>
    );
};

Interface.propTypes = {
    stateRun : PropTypes.bool.isRequired,
    stateStop : PropTypes.bool.isRequired,
    constrolWatch : PropTypes.func.isRequired,
    stopWatch : PropTypes.func.isRequired,
}

export default Interface;