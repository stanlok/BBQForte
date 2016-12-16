import React from 'react';
import { Link } from 'react-router';

export default class ForumRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="discussion">
          <Link to={"/forum-topic/" + this.props.tid + "/" + this.props.category + "/" + this.props.id }>{this.props.title}</Link>
        </td>
        <td className="threads">
          {this.props.threadCount}
        </td>
        <td className="posts">
          {this.props.postCount}
        </td>
      </tr>
    )
  }
}
