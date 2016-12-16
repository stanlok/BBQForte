import React from 'react';
import { Link } from 'react-router';
import { getTopic } from '../server';
import ForumPostRow  from './forum-post-row';


export default class ForumThread extends React.Component {

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
      },
      "topic" : "Empty"
    }
  }

  refresh() {
     getTopic(this.props.category, this.props.tid, (topicData) => {
       this.setState({
         thread: topicData[0].threads[this.props.thid],
         topic: topicData[0].title
       });
     });
  }

  componentDidMount() {
    this.refresh();
  }


  render() {
    return (
    <div className="col-md-12 main">
        <div className="row forum-header">
          <div className="col-md-12">
            <ol className="breadcrumb">
              <li><Link to={"/home/" + this.props.userId}>Home</Link></li>
              <li>
                <Link to={"/forum/" + this.props.userId}>Forums</Link>
              </li>
              <li>
                <Link to={"/forum-topic/" + this.props.tid + "/" + this.props.category + "/" + this.props.userId}>{this.state.topic}</Link>
              </li>
              <li className="active">
                {this.state.thread.title}
              </li>
            </ol>
            <h2> Forums: {this.state.thread.title} </h2>
            <div className="row">
              <div className="col-md-3">
                <button type="button" className="btn btn-default cr-btn">
                  <Link to={"/forum-newpost/" + this.props.thid + "/" +  this.props.tid + "/" + this.props.category + "/" + this.props.userId}><span className="glyphicon glyphicon-pencil" /> Reply
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Boards */}
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              {
                this.state.thread.posts.map((post,i) => {
                  return (
                    <ForumPostRow key={i}
                      author = {post.author}
                      date = {post.postDate}
                      contents = {post.contents} />
                  );
                })}
            </table>
          </div>
        </div>
        <div className="row nav-btm">
          <div className="col-md-3">
            <button type="button" className="btn btn-default cr-btn">
              <Link to={"/forum-newpost/" + this.props.thid + "/" +  this.props.tid + "/" + this.props.category + "/" + this.props.userId}><span className="glyphicon glyphicon-pencil" /> Reply
              </Link>
            </button>
          </div>

        </div>
      </div>
)
}
}
