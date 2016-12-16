import React from 'react';
import { Link } from 'react-router';
import { getTopic } from '../server';

export default class ForumThreadRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "thread": {
        "title": "Empty",
        "postCount": [],
        "posts": [
          {
            "author": 0,
            "postDate": 1000000000000,
            "contents": "Empty"
          }
        ]
      }
    }
  }

  refresh() {
     getTopic(this.props.category, this.props.tid, (topicData) => {
       this.setState({thread: topicData[0].threads[this.props.thid]})
     });
  }

  componentDidMount() {
    this.refresh();
  }


  render() {
    return (
      <tr>
        <td className="discussion">
          <Link to={"/forum-thread/" +  this.props.thid + "/" + this.props.tid + "/" + this.props.category + "/" + this.props.id }>{this.props.title}</Link>
        </td>
        <td className="threads">
          {this.props.replyCount}
        </td>
        <td className="posts">
          0
        </td>
        <td className="lastdisc">
          {this.state.thread.posts[this.state.thread.posts.length-1].contents}
        </td>
      </tr>
    )
  }
}
