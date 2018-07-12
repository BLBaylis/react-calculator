import React from 'react';
import Screen from './screen.jsx';

class Frame extends React.Component {

  render() {
    return (
      <div className="frame">
        <div className="calculator-title"> 
        </div>
        <Screen/>
      </div>
    );
  }
}

export default Frame;