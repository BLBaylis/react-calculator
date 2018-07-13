import React from 'react';
import ScreenRow from './screenRow.jsx';
import PropTypes from 'prop-types';

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question}/>
      <ScreenRow className="bottom-screen-row" value={props.answer}/>
    </div>
  );
}

Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Screen;