import React from 'react';
import Screen from './screen.jsx';
import Button from './button.jsx';
import HTMLLabelButton from './htmlLabelButton.jsx';

class Frame extends React.Component {
  	constructor() {
    	super();
    	this.state = {
      		displayQuestion: '',
      		internalQuestion : '',
      		answer: ''
    	}
    	this.handleClick = this.handleClick.bind(this);
  	}

  	render() {
   		return (
      	<div className="calculator">
        	<Screen question={this.state.displayQuestion} answer={this.state.answer}/>
        	<div className = "keypad">
          		<Button name={'AC'} handleClick={this.handleClick} type='action' />
          		<Button name={'DEL'} handleClick={this.handleClick} type='action' />
          		<Button name={'ANS'} handleClick={this.handleClick} type='action' />
          		<HTMLLabelButton name = {'*'} value='&times;' handleClick={this.handleClick} type='action' />
          		<Button name={'7'} handleClick={this.handleClick} type='input' />
          		<Button name={'8'} handleClick={this.handleClick} type='input' />
          		<Button name={'9'} handleClick={this.handleClick} type='input' />
          		<Button name={'/'} handleClick={this.handleClick} type='action' />
          		<Button name={'4'} handleClick={this.handleClick} type='input' />
          		<Button name={'5'} handleClick={this.handleClick} type='input' />
          		<Button name={'6'} handleClick={this.handleClick} type='input' />
          		<Button name={'+'} handleClick={this.handleClick} type='action' />
          		<Button name={'1'} handleClick={this.handleClick} type='input' />
          		<Button name={'2'} handleClick={this.handleClick} type='input' />
          		<Button name={'3'} handleClick={this.handleClick} type='input' />
          		<Button name={'-'} handleClick={this.handleClick} type='action' />
          		<Button name={'0'} handleClick={this.handleClick} type='input' />
          		<Button name={'(-)'} handleClick={this.handleClick} type='action' />
          		<Button name={'.'} handleClick={this.handleClick} type='input' />
          		<Button name={'='} handleClick={this.handleClick} type='action' />
        	</div>
      	</div>
    	);
  	}	


  	handleClick(event){
    	const name = event.target.name;
    	const value = event.target.value;
    	console.log(value);
    	switch (name) {
      		case '=': {
        		const answer = eval(this.state.internalQuestion).toString();
        		this.setState({ answer });
        		break;
      		}
      		case 'Cls': {
        		this.setState({ internalQuestion: '', displayQuestion: '', answer: '' });
        		break;
      		}
      		default: {
        		this.setState({ internalQuestion: this.state.internalQuestion += name, displayQuestion: this.state.displayQuestion += value});
        		console.log(this.state);
        		break;
      		}
    	}
  	}
}

export default Frame;