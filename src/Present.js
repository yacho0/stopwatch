import React from 'react';
import PropTypes from 'prop-types';

const Present = (props) => {

    return <p>{props.text}</p>

};

Present.propTypes = {
    text : PropTypes.string.isRequired
}

export default Present;