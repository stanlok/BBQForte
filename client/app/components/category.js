import React from 'react';
import ForumRow from './forum-row';

export default class Category extends React.Component{

  constructor(props) {
    super(props);
    this.state = { topics: this.props.topics}
  }

  render() {
    return (
      <tbody>
      <tr className="board-title">
        <td>
          {this.props.title}
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      {
        this.props.topics.map((topicsItem, i) => {
        return (
          <ForumRow key = {i}
            id = {this.props.userId}
            tid = {i}
            category = {this.props.category}
            title = {topicsItem.title}
            threadCount = {topicsItem.threadCount}
            postCount = {topicsItem.postCount}
          />
        );
      })}
      </tbody>
    )
  }
}
