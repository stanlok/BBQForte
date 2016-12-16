import React from 'react';
import { getTopic } from '../server';
import { Link } from 'react-router';
import { postThread } from '../server';
import { hashHistory } from 'react-router';


export default class ForumNewThread extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        "data" : {
          "_id": 0,
          "title": "Empty",
          "category": "Empty",
          "threadCount": [],
          "postCount": [],
          "threads": []
        },
        newThreadName: "",
        newThreadContents: "",
        newThreadId:""
      };
    }

    refresh() {
       getTopic(this.props.category, this.props.tid, (topicData) => {
         this.setState({data: topicData[0]})
       })
    }

    componentDidMount() {
      this.refresh();
    }

    handleNewThreadNameChange(e) {
      e.preventDefault();
     this.setState({ newThreadName: e.target.value});
    }

    handleNewThreadContentsChange(e){
      e.preventDefault();
      this.setState({newThreadContents: e.target.value })
    }

    handleNewThreadClick(e) {
         e.preventDefault();
        if (e.button === 0 && this.state.newThreadName !== "" && this.state.newThreadContents !== "") {
          postThread(this.props.userID, this.props.category, this.props.tid, this.state.newThreadName, this.state.newThreadContents);
          const path = `/forum-thread/${this.state.data.threads.length}/${this.props.tid}/${this.props.category}/${this.props.userID}` ;
          hashHistory.push(path);
        }
       }

  render(){
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
                <Link to={"/forum-topic/" + this.props.tid + "/" + this.props.category + "/" + this.props.userID}>{this.state.data.title}</Link>
              </li>
              <li className="active">New Thread</li>
            </ol>
            <h2> Forums: New Thread</h2>
        </div>
      </div>
        <div className="row">
          <div className="col-md-8 ">
            <div className="input-group">
              <span
                className="input-group-addon cr-title"
                id="basic-addon1">Title:</span>
              <input
                type="text"
                className="form-control"
                aria-label="Title"
                aria-describedby="basic-addon1"
                onChange={(e) => this.handleNewThreadNameChange(e)} />
            </div>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <textarea className="form-control" rows={15}
              onChange={(e) => this.handleNewThreadContentsChange(e)} />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <button
              className="btn btn-default pull-right nav-btm cr-btn"type="submit"
              onClick={(e) => this.handleNewThreadClick(e)}>
                Submit
             </button>
          </div>
        </div>
      </div>
    )
  }
}
