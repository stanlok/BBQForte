import React from 'react';
import {getRecentConversations, removeRecentChat, addRecentChat} from '../server';

export default class RecentConversations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList: [] };
  }

  refresh() {
    getRecentConversations(this.props.userID, this.props.otherUserID, (recentConversations) => {
      this.setState(recentConversations);
    });

    /*if(this.state.userList.indexOf(this.props.otherUserID === -1)) {
      addRecentChat(this.props.userID, this.props.otherUserID, (updatedList) => {
        this.setState(updatedList);
      });
    }*/
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.userList.indexOf(nextProps.otherUserID) === -1) {
      addRecentChat(this.props.userID, nextProps.otherUserID, (updatedList) => {
        this.setState(updatedList);
      });
    }
    this.refresh();
  }

  handleSwitchChat(e, userID) {
    this.props.handleSwitchChat(e, userID);
  }

  handleRemoveRecentChat(e, userID) {
    e.preventDefault();

    if (e.button === 0) {
      var callbackFunction = (updatedUserList => {
        this.setState({userList: updatedUserList});
      })

      removeRecentChat(this.props.userID, userID, callbackFunction);
    }
  }

  render() {
    return (
      <div id="recent-convos" className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-body panel-title-style chat-split">
            <h4>
              Recent Conversations
            </h4>
          </div>

          <div className="panel-body panel-title-style user-list conversation-scroll">
            <br />
            {this.state.userList.map((user, i) => {
              return (
                <div key={i}>
                  <a href="#" onClick={(e) => this.handleRemoveRecentChat(e, user._id)}>
                    <div className="pull-right">
                      <span className="fa fa-times-circle"></span>
                    </div>
                  </a>
                  <a href="#" onClick={(e) => this.handleSwitchChat(e, user._id)}>
                    <div className="media">
                      <br />
                      <div className="media-left">
                        PIC
                      </div>
                      <div className="media-body">
                        <div className="media-heading">
                          {user.userName}
                        </div>

                      </div>
                    </div>
                  </a>
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
