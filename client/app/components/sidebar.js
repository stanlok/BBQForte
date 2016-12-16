import React from 'react';
import {Link} from 'react-router';
import { getUserData } from '../server';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  refresh() {
    getUserData(this.props.userID, (userData) => {
      this.setState(userData);
    });
  }


  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="col-md-2 sidebar-separator">
        <ul className="nav nav-pills nav-stacked sidebar-text">
          <li role="presentation">
            <Link to={"/profile/" + this.state._id}>{this.state.userName}</Link>
          </li>
          <li role="presentation">
            <span className="glyphicon glyphicon-th-list"></span> BROWSE PLAYLISTS
            </li>
            <li role="presentation">
              <Link to={"/saved-playlist/" + this.state._id}>Your Saved Playlists</Link>
            </li>
            <li role="presentation">
              <Link to={"/new-releases/" + this.state._id}>New Releases</Link>
            </li>
            <li role="presentation">
              <Link to={"/most-popular/" + this.state._id}>Most Popular</Link>
            </li>
            <li role="presentation">
              <Link to={"/highest-rated/" + this.state._id}>Highest Rated</Link>
            </li>
            <li role="presentation">
              <Link to={"/rising-playlists/" + this.state._id}>Rising</Link>
            </li>
            <li role="presentation">
              <Link to={"/saved-playlist/" + this.state._id}>Browse All Playlists...</Link>
            </li>
            <li role="presentation"><span className="glyphicon glyphicon-comment"></span> SOCIAL</li>
            <li role="presentation">
              <Link to={"/forum/" + this.state._id}>Forum</Link>
            </li>
            <li role="presentation">
              <Link to ={"/private-chat/" + this.state._id}>Private Chat</Link>
            </li>
            <li role="presentation"><span className="glyphicon glyphicon-th-large"></span> MISCELLANEOUS</li>
            <li role="presentation">
              <Link to={"/about-us/" + this.state._id}>About Us</Link>
            </li>
            <li role="presentation">
              <Link to={"/contact-us/" + this.state._id}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )
    }
  }
