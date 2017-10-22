import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clickOnButton = this.clickOnButton.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.props.onTextInput(event.target.value);
  }

  clickOnButton(event) {
    this.props.clickOnButton(event);
  }

  handleKeyPress(event) {
    this.props.handleKeyPress(event);
  }

  render() {
    return (
      <div className='message'>
        <input
          type='text'
          autoComplete='off'
          className='messageBox'
          placeholder='Write a message...'
          value={this.props.inputValue}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.clickOnButton}>Send</button>
      </div>
    )
  }
}

export default InputForm;
