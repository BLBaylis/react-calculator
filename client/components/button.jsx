import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <input
     	type="button"
     	className={props.type === 'action' ? 'button action-button' : 'button input-button'}
     	onClick={props.handleClick}
     	value={props.name}
     	name = {props.name}
    />
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Button;