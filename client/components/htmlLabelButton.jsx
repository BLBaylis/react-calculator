import React from 'react';
import PropTypes from 'prop-types';

const HTMLLabelButton = (props) => {
  return (
    <input
    	type="button"
     	className={props.type === 'action' ? 'button action-button' : 'button input-button'}
      	onClick={props.handleClick}
      	name = {props.name}
      	value = {props.value}
      />
  );
}

HTMLLabelButton.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value : PropTypes.string.isRequired
}

export default HTMLLabelButton;