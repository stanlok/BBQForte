import React from 'react';

export default class PrivateChatMessage extends React.Component {
  render() {
    if (this.props.author._id === this.props.userID) {
      return (
        <div className="row">
        <p />
          <div className="chat-bubble right-speech">
            {this.props.content}
          </div>
        <p />
        </div>
      )
    }
    else {
      return (
        <div className="row">
        <p />
          <div className="chat-bubble left-speech">
            {this.props.content}
          </div>
        <p />
        </div>
      )
    }
  }
}
