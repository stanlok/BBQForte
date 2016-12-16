import React from 'react';
import PrivateChatMessage from './private-chat-message';
import PrivateChatMessageEntry from './private-chat-conversation-entry';
import {getChatConversations, sendMessage, createNewChatlog} from '../server';

export default class PrivateChatConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "chatlogs": [
      {
        "otherUser": "000000000000000000000002",
        "messages": [
          {
            "author": {},
            "content": ""
          }
        ]
      }
    ],
    "otherUserIndex": 0
    }
  }

  refresh() {
    getChatConversations(this.props.userID, (chatData) => {
      this.setState({"chatlogs": chatData.chatlogs});
    });
    this.getOtherUser(this.props.user.chattingWith, (otherUserData) => {
      this.setState({otherUserIndex: otherUserData})
    });
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    getChatConversations(this.props.userID, (chatData) => {
      this.setState({"chatlogs": chatData.chatlogs});
    });
    this.getOtherUser(nextProps.user.chattingWith, (otherUserData) => {
      this.setState({otherUserIndex: otherUserData})
    });
  }

  onPost(messageContents) {
    var otherUserIndex = this.state.otherUserIndex;
    sendMessage(this.props.userID, otherUserIndex, messageContents, () => {
      this.refresh();
    });
  }

  getOtherUser(otherUser, cb) {
    if (this.props.user.chattingWith === undefined) {
      cb(0);
      return;
    }

    for (var i = 0; i < this.state.chatlogs.length; i++) {
      if (this.state.chatlogs[i].otherUser._id === otherUser) {
        cb(i);
        return;
      }
    }

    createNewChatlog(this.props.userID, this.props.user.chattingWith, () => {
      this.refresh();
    });
  }
  /**
  {this.state.chatlogs.forEach((chatlog) => {
    if (chatlog.otherUser._id === this.props.otherUserID) {
      return index;
    }

  })}

  {this.state.chatlogs.map((chatlog, i) => {
    if(chatlog.otherUser === 2) {
      {chatlog.messages.map((message, i) => {
        return (
          <PrivateChatMessage key={i}
            author={message.author}
            content={message.content}
            userID={this.props.userID} />
        );
      })}
    }
  })}*/

  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-body panel-title-style chat-split">
            <h4>
              <a href="#">
                {this.state.chatlogs[this.state.otherUserIndex].otherUser.userName}
              </a>
              <span className={this.state.chatlogs[this.state.otherUserIndex].otherUser.status}> ●</span>
            </h4>
          </div>

          <div className="panel-body panel-title-style chat-scroll">
            {this.state.chatlogs[this.state.otherUserIndex].messages.map((message, i) => {
              return (
                <PrivateChatMessage key={i}
                  author={message.author}
                  content={message.content}
                  userID={this.props.userID} />
              );
            })}
          </div>

          <PrivateChatMessageEntry onPost={(messageContents) => this.onPost(messageContents)}/>

        </div>
      </div>
    )
  }
}
