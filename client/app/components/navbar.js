import React from 'react';
import {Link} from 'react-router';
import { getUserData } from '../server';

export default class Navbar extends React.Component {


  constructor(props) {
    super(props);
    this.state = { value: "" };
    //Taken from Router note posted on course website
  }



  refresh() {
    getUserData(this.props.userID, (userData) => {
      this.setState(userData);
    });
  }

  // Called after navbar button is pressed
  /*onSearch(searchText) {
    if(!searchText){
      alert("Please enter search terms!");
    } else
      this.context.router.push({ pathname: "/search", query: { q: searchText } });
  }*/
  onSearch() {
    if(!this.state.value){
      alert("Please enter search terms!");
    } else
      this.context.router.push({ pathname: "/search", query: { q: this.state.value } });
  }

  componentDidMount() {
    this.refresh();
  }

  // Called after the navbar input is changed
  handleChange(event) {
    this.setState( {value: event.target.value} );
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      this.onSearch();
    }
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <span><img src="img/logo-xsmall.png" alt="BBQ Forte Logo" /></span> BBQ Forte
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <div className="nav navbar-nav navbar-left">

            </div>

            <ul className="nav navbar-nav navbar-right">
              <div className="btn-group" role="group">

                <button type="button" className="btn btn-default dropdown-toggle navbar-btn user-options" data-toggle="dropdown">
                  Hello, {this.state.userName}! <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><Link to={"/profile/" + this.state._id}>Profile</Link></li>
                <li><Link to={"/settings/" + this.state._id}>Settings</Link></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </div>
          </ul>

          <form className="navbar-form" role="search">
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control"
                  placeholder="Search BBQ Forte"
                  value={this.state.value}
                  onChange={(c) => this.handleChange(c)}
                  onKeyUp={(e) => this.handleKeyUp(e)} />
                  <span className="input-group-btn" id="search_button">
                    <button className="btn btn-secondary" type="button" onClick={() => this.onSearch()}>
                      Search
                    </button>
                  </span>

              </div>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

Navbar.contextTypes = {
router: React.PropTypes.object.isRequired
};
