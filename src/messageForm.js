import React, { Component } from 'react';
import Messages from './messages';
import ReactDOM from 'react-dom';

class MessageForm extends Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className='messageForm'>
        <Messages
          messages={this.props.messages}
        />
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}
        />
      </div>
    )
  }
}

export default MessageForm;
