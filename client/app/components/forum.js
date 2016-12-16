import React from 'react';
import { getForum } from '../server';
import { Link } from 'react-router';
import Category from './category';


export default class Forum extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "categories": [
        {
          "title": "Empty",
          "topics": []
        }
      ]
    };
  }
  refresh() {
    getForum((forumData) => {
      this.setState({categories: forumData.categories})
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="col-md-12 main">
        {/* Forums Header*/}
        <div className="row">
          <div className="col-md-12">
            <ol className="breadcrumb">
              <li><Link to={"/home/" + this.props.userId}>Home</Link></li>
              <li className="active">Forums</li>
            </ol>
            <h2> Forums</h2>
          </div>
        </div>
        {/* Boards */}
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody>
                <tr className="table-header">
                  <td>
                    Board Title
                  </td>
                  <td>
                    Threads
                  </td>
                  <td>
                    Posts
                  </td>
                </tr>
                </tbody>
                {
                  this.state.categories.map((cat,i) => {
                    return (
                      <Category key={i}
                        category = {i}
                        userId = {this.props.userId}
                        title = {cat.title}
                        topics = {cat.topics} />
                    );
                  })}

            </table>
          </div>
        </div>
      </div>

    )
  }
}
