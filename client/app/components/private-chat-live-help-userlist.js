import React from 'react';

export default class PrivateChatLiveHelpUserList extends React.Component {
  handleSwitchChat(e, userID) {
    this.props.handleSwitchChat(e, userID);
  }

  render() {
    return (
      <div>
        {this.props.genre}
        <ul className="user-list-padding">
          {this.props.userList.map((user) => {
            return(
              <div key={user._id}>
                <a href="#" onClick={(e) => this.handleSwitchChat(e, user._id)}>
                  {user.userName} <span className={user.status}>●</span>
                </a>
                <br/>
              </div>
            );
          })}
        </ul>
      </div>
    )
  }
}
