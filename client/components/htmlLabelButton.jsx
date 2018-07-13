import React from 'react';
import PropTypes from 'prop-types';

const HTMLLabelButton = (props) => {
  return (
    <input
    	type="button"
      	onClick={props.handleClick}
      	className = {props.className}
      	name = {props.name}
      	value = {props.value}
      />
  );
}

HTMLLabelButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value : PropTypes.string.isRequired
}

export default HTMLLabelButton;