import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  getList() {
    let messages = this.props.messages;
    let messagesList = messages.map((messages, index) =>
      <li key={index}>
        {messages}
      </li>
    )
    return messagesList
  }

  render() {
    return (
      <ul className='messages'>
        { this.getList() }
      </ul>
    )
  }
}

export default Messages;
