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
      		displayAnswer: '',
      		internalAnswer: ''
    	}
    	this.handleClick = this.handleClick.bind(this);
  	}

  	render() {
   		return (
      	<div className="calculator">
        	<Screen question={this.state.displayQuestion} answer={this.state.displayAnswer}/>
        	<div className = "keypad">
          		<Button name={'AC'} handleClick={this.handleClick} className='button button--order-minus-2 button--delete-btn' />
          		<Button name={'DEL'} handleClick={this.handleClick} className='button button--order-minus-2 button--delete-btn' />
          		<Button name={'ANS'} handleClick={this.handleClick} className='button button--order-4' />
          		<HTMLLabelButton name = {'*'} value='&times;' handleClick={this.handleClick} className='button button--order-0' />
          		<Button name={'7'} handleClick={this.handleClick} className='button button--order-minus-3 button--number' />
          		<Button name={'8'} handleClick={this.handleClick} className='button button--order-minus-3 button--number' />
          		<Button name={'9'} handleClick={this.handleClick} className='button button--order-minus-3 button--number' />
          		<HTMLLabelButton name = {'/'} value='&divide;' handleClick={this.handleClick} className='button button--order-0' />
          		<Button name={'4'} handleClick={this.handleClick} className='button button--order-minus-1 button--number' />
          		<Button name={'5'} handleClick={this.handleClick} className='button button--order-minus-1 button--number' />
          		<Button name={'6'} handleClick={this.handleClick} className='button button--order-minus-1 button--number' />
          		<HTMLLabelButton name = {'+'} value='&#43;' handleClick={this.handleClick} className='button button--order-2' />
          		<Button name={'1'} handleClick={this.handleClick} className='button button--order-1 button--number' />
          		<Button name={'2'} handleClick={this.handleClick} className='button button--order-1 button--number' />
          		<Button name={'3'} handleClick={this.handleClick} className='button button--order-1 button--number' />
          		<HTMLLabelButton name = {'-'} value='&minus;' handleClick={this.handleClick} className='button button--order-2' />
          		<Button name={'0'} handleClick={this.handleClick} className='button button--order-3 button--number' />
          		<Button name={'.'} handleClick={this.handleClick} className='button button--order-3 button--number' />
          		<HTMLLabelButton name={'(-)'} value = '( &minus; )' handleClick={this.handleClick} className='button button--order-3 button--number' />
          		<Button name={'='} handleClick={this.handleClick} className='button button--order-4 button--equals' />
        	</div>
      	</div>
    	);
  	}	


  	handleClick(event){
    	const name = event.target.name;
    	const value = event.target.value;
    	switch (name) {
      		case '=': {
        		const displayAnswer = eval(this.state.internalQuestion).toString();
        		this.setState({ displayAnswer, internalAnswer: displayAnswer});
        		break;
      		}
      		case 'AC': {
        		this.setState({ internalQuestion: '', displayQuestion: '', displayAnswer: ''});
        		break;
      		}
      		case 'DEL': {
      			let displayQuestion = this.state.displayQuestion;
      			let sliceTo = displayQuestion[displayQuestion.length -1] === 'S' ? -3 : -1;
      			this.setState({ internalQuestion: this.state.internalQuestion.slice(0, sliceTo), displayQuestion: this.state.displayQuestion.slice(0, sliceTo)});
      			break;
      		}
      		case 'ANS': {
      			if (this.state.internalAnswer === "") {
      				this.setState({displayAnswer: "ANS is not yet defined!"});
      			} else {
      				let newIntAnswer = /\d/.test(this.state.internalQuestion[this.state.internalQuestion.length - 1]) ? "*" + this.state.internalAnswer : this.state.internalAnswer;
      				this.setState({ internalQuestion: this.state.internalQuestion += newIntAnswer, displayQuestion: this.state.displayQuestion += value})
      			}
      			break;
      		}
      		default: {
        		this.setState({ internalQuestion: this.state.internalQuestion += name, displayQuestion: this.state.displayQuestion += value});
        		break;
      		}
    	}
  	}
}

export default Frame;