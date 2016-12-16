import React from 'react';
import { getTopic } from '../server';
import { Link } from 'react-router';
import { postComment } from '../server';
import { hashHistory } from 'react-router';


export default class ForumNewPost extends React.Component {

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
        newPostContents:""
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


  handleNewPostContentsChange(e){
    e.preventDefault();
    this.setState({newPostContents: e.target.value })
  }

  handleNewPostClick(e) {
       e.preventDefault();
      if (e.button === 0 && this.state.newPostContents !== "") {
        postComment(this.props.userID, this.props.category, this.props.tid, this.props.thid, this.state.newPostContents);
        const path = `/forum-thread/${this.props.thid}/${this.props.tid}/${this.props.category}/${this.props.userID}` ;
        hashHistory.push(path);
      }
     }

  render() {
    return (
      <div className="col-md-12 main">
        <div className="row ">
          <div className="col-md-12">
            <ol className="breadcrumb">
              <li><Link to={"/home/" + this.props.userID}>Home</Link></li>
              <li>
                <Link to={"/forum/" + this.props.userID}>Forums</Link>
              </li>
              <li>
                <Link to={"/forum-topic/" + this.props.tid + "/" + this.props.category + "/" + this.props.userID}>General Forte Discussion</Link>
              </li>
              <li>
                <Link to={"/forum-thread/" +  this.props.thid + "/" + this.props.tid + "/" + this.props.category + "/" + this.props.userID }>First Thread</Link>
              </li>
              <li className="active">New Post</li>
            </ol>
            <h2> Forums: New Post</h2>
        </div>
      </div>
        <div className="row">
          <div className="col-md-12">
            <h4>
              Original Message:
            </h4>
            <div className="panel panel-default">
              <div className="panel-body panel-comment">
                {this.state.thread.posts[0].contents}
              </div>
            </div>
            <h4>
              Latest Message:
            </h4>
            <div className="panel panel-default">
              <div className="panel-body panel-comment">
                {this.state.thread.posts[this.state.thread.posts.length-1].contents}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <textarea className="form-control" rows={15} value={this.state.value} onChange={(e) => this.handleNewPostContentsChange(e)} />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <button
              className="btn btn-default pull-right nav-btm cr-btn"type="submit"
              onClick={(e) => this.handleNewPostClick(e)}>
                Submit
             </button>
          </div>
        </div>
      </div>
    )
  }
}
