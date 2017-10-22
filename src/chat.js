import React, { Component } from 'react';
import MessageForm from './messageForm'
import InputForm from './inputForm'
import Network from './network.js';

const network = new Network();

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      lastMessageId: null,
      value: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clickOnButton = this.clickOnButton.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  refresh() {
    this.timer = setInterval(

      () => network.getLastMessages((messages, lastMessageId) => {
        let newArrayMessages = this.state.messages.concat(messages);
        this.setState({messages: newArrayMessages})
        this.setState({lastMessageId: lastMessageId})

      }, this.state.lastMessageId), 1000
    );
  }

  clickOnButton(event) {
    let message = this.state.value;
    if (message.replace(/\s/g,"") !== "")
    network.addNewMessage(message)
    this.setState({value: ''})
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      let message = this.state.value;
      if (message.replace(/\s/g,"") !== "")
      network.addNewMessage(message)
      this.setState({ value: '' })
    }
  }

  handleInput(value) {
    this.setState({ value: value });
  }

  render() {
    return (
      <div className='chat'>
        <MessageForm
          messages={this.state.messages}
        />
        <InputForm
          inputValue={this.state.value}
          onTextInput={this.handleInput}
          clickOnButton={this.clickOnButton}
          handleKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}
