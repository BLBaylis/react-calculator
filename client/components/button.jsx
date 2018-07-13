import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  	return (
    	<input
     		type="button"
     		onClick={props.handleClick}
     		className = {props.className}
     		value={props.name}
     		name = {props.name}
    	/>
  	);
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Button;