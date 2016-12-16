import React from 'react';
import { getUserEdit, getUserData, getUserNickName, setUserName, setUserAbout} from '../server';
import { Link } from 'react-router';
import {hideElement} from '../util'

function countLines(str) {
  // Number of lines is the number of newlines plus 1.
  // Example:
  // "Fee\nFi\nFo\nFum" is:
  // Fee
  // Fi
  // Fo
  // Fum
  // Three newlines, four lines of text.
  if(str == undefined){
    return 1;
  }
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\n') {
      count++;
    }
  }
  return count;
}

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canEdit: false, editing: false, editSubmitted: false, editedNameValue: '', editedAboutValue: '', followers: [],
                  followerNickNames: [], following: [], followingNickNames: []};
  }

  onEditClick(e) {
    e.preventDefault();
    this.setState({
      editing: true,
      editSubmitted: false,
      editedValue: this.props.value
    });
  }

  onEditCancel(e) {
  e.preventDefault();
  this.setState({
    editing: false,
    editSubmitted: false
  });
}

onEdit(e) {
    e.preventDefault();
    setUserAbout(this.state._id, this.state.editedAboutValue, (updatedUser) => {
      this.setState(updatedUser);
    });
    setUserName(this.state._id, this.state.editedNameValue, (updatedUser) => {
      this.setState(updatedUser);
    });
    this.setState({
      editSubmitted: true,
      editing: false
    });
  }

  handleEditNameChange(e) {
    e.preventDefault();
    this.setState({ editedNameValue: e.target.value });
  }

  handleEditAboutChange(e) {
    e.preventDefault();
    this.setState({ editedAboutValue: e.target.value });
  }

  componentWillReceiveProps() {
    if (this.state.editing && this.state.editSubmitted) {
      // Component has received its new status update text!
      this.setState({
        editing: false,
        editSubmitted: false
      });
    }
  }

  refresh() {
    if(this.props.profileID == this.props.userID){
      this.state.canEdit = true;
    }
    getUserData(this.props.profileID, (userData) => {
      var data = userData;
      data.followers.map( (followerID) => {
        getUserNickName(followerID, (nickname) => {
          this.state.followerNickNames.push(nickname);
         this.setState({followerNickNames: this.state.followerNickNames});
        });
      });
      data.following.map( (followingID) => {
        getUserNickName(followingID, (nickname) => {
          this.state.followingNickNames.push(nickname);
         this.setState({followingNickNames: this.state.followingNickNames});
        });
      });
      this.setState({editedNameValue: data.userName});
      this.setState({editedAboutValue: data.about});
      this.setState(data);
    });

  }


  edit() {
    this.setState({
      editing: true
    });
  }

  finishEdit(){
    this.setState({
      editing: false
    });
  }

  componentDidMount() {
    this.refresh();
  }


  render() {
    return (
      <div className="col-md-10 col-md-offset-1 transparent-background">
        <div className="row profile-row">
          <div className="profile-header-container">
            <div className="profile-header-img">
              <img
                className="img-circle"
                src="img/profile_pic_default.png" />
              {/* badge */}
              <div className="rank-label-container">
                <span className="label label-default rank-label username-under-picture">{this.state.nickName}</span>
              </div>
            </div>
          </div>
          <div className="btn-group pull-left" role="group">
            <button
              type="button"
              className="btn btn-default profile-button">
              FOLLOW
            </button>
          </div>
          <div
            className="btn-group pull-right"
            role="group">
            <span className={hideElement(this.state.editing || !this.state.canEdit)}>
              <button
                type="button"
                className="btn btn-default profile-button"
                onClick= {(e) => this.onEditClick(e)}>
                <span className="glyphicon glyphicon-pencil"  />
              </button>
            </span>
            <span className={hideElement(!this.state.editing)}>
              <button
                type="button"
                className="btn btn-default profile-button"
                onClick={(e) => this.onEdit(e)}
                disabled={this.state.editSubmitted}>
                SAVE
              </button>
              <button
                type="button"
                className="btn btn-default profile-button"
                onClick={(e) => this.onEditCancel(e)}
                disabled={this.state.editSubmitted}>
                CANCEL
              </button>
            </span>
          </div>
          {/* end profile header container*/}
        </div>
        {/* end of profile pic row*/}
        <div className="row profile-row">
          <div className="col-md-2 col-md-offset-4">
            Name:
          </div>
          <div className="col-md-4">
            <span className={hideElement(this.state.editing)}>
            {this.state.userName}
            </span>
            <span className={hideElement(!this.state.editing)}>
              <textarea disabled={this.state.editSubmitted} className="form-control profile-edit" rows={countLines(this.state.editedNameValue).toString()} value={this.state.editedNameValue} onChange={(e) => this.handleEditNameChange(e)} />
            </span>
          </div>
        </div>
        {/*end of 3rd row*/}
        <div className="row profile-row">
          <div className="col-md-2 col-md-offset-4">
            About:
          </div>
          <div className="col-md-4">
            <span className={hideElement(this.state.editing)}>
              {this.state.about}
            </span>
            <span className={hideElement(!this.state.editing)}>
              <textarea disabled={this.state.editSubmitted} className="form-control profile-edit" rows={countLines(this.state.editedAboutValue).toString()} value={this.state.editedAboutValue} onChange={(e) => this.handleEditAboutChange(e)} />
            </span>
        </div>
        </div>
        {/*end of 4th row*/}
        
        {/*end of 6th row*/}
        <div className="row profile-row">
          <div className="col-md-2 col-md-offset-4">
            Following:
          </div>
          <div className="col-md-4">
            {
                this.state.followerNickNames.map( (nickname, i ) => {
                  return <Link to={"/profile/" + this.state.followers[i]} key = {i}>{nickname + ", "}</Link>
                })
            }
          </div>
        </div>
        {/*end of 7th row*/}
        <div className="row profile-row">
          <div className="col-md-2 col-md-offset-4">
            Followers:
          </div>
          <div className="col-md-4">
            {
                this.state.followingNickNames.map( (nickname, i ) => {
                  return <Link to={"/profile/" + this.state.following[i]} key = {i}>{nickname + ", "}</Link>
                })
            }
          </div>
        </div>
        {/*end of 8th row*/}
      </div>
    )
  }
}
