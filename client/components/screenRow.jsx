import React from 'react';
import PropTypes from 'prop-types';

const ScreenRow = (props) => {
  return <input className={"screen__row " + props.className} type="text" readOnly value={props.value}/>
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default ScreenRow;