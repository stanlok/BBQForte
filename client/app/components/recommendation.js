import React from 'react';

export default class Recommendation extends React.Component {
    constructor(props) {
	super(props);
	this.state = { value: "" };
    }

    handleAdd(){
	this.props.onAdd(this.key);
    }

    handleDel(){
	this.props.onDel(this.key);
    }

    render() {

	return (
	    <div className="row">
	      <div className="col-md-4 recommendation-box">
		<div className="row">
		  <div className="col-md-10">
		    {this.props.song} - {this.props.artist}
		  </div>
		  <div className="col-md-2">
		    <button type="button" className="btn btn-default playlist-button playlist-button-small"
			    onClick = {this.handleAdd.bind(this)}>
		      <span className="glyphicon glyphicon-plus"></span>
		    </button>
		    <button type="button" className="btn btn-default playlist-button playlist-button-small"
			    onClick = {this.handleDel.bind(this)}>
		      <span className="glyphicon glyphicon-remove-circle"></span>
		    </button>
		  </div>
		</div>
	      </div>
	      <div className="col-md-8 recommend-text">
		Because you liked {this.props.reason}
	      </div>
	    </div>
	)
    }
}
