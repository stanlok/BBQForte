import React from 'react';
import {unixTimeToString} from '../util';
import { Link } from 'react-router';
import { getUserNickName } from '../server';

export default class ForumPostRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "userData": "Empty"
      }
    }

  refresh() {
    if(this.props.author){
      getUserNickName(this.props.author, (userData) => {
        this.setState({userData})
      });
    }
  }

  componentDidMount() {
    this.refresh();
  }

  componentDidUpdate() {
    this.refresh();
  }

  render() {
    return (
      <tbody>
      <tr className="board-title">
        <td>
          {unixTimeToString(this.props.date)}
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          <Link to={"/profile/" + this.props.author}>{this.state.userData}</Link>
        </td>
        <td>
          {this.props.contents}
        </td>
      </tr>
      </tbody>
    )
  }
}
