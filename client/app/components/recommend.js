import React from 'react';
import Recommendation from './recommendation'
import {getUserData, setUserData, useRecommendation, delRecommendation} from '../server';

export default class Recommend extends React.Component {

    constructor(props) {
	super(props);
	this.state = { value: "" };
    }


    refresh() {
	getUserData(this.props.userID, (userData) => {
	    this.setState({userInfo: userData});
	});

    }

    componentDidMount() {
	this.refresh();
    }

    addRec(id) {
	useRecommendation(this.props.userID, id, () => this.refresh());
    }

    delRec(id) {
	delRecommendation(this.props.userID, id, () => this.refresh());
    }

    render() {
	if(this.state.userInfo) {
	    return (
		<div className="row">
		<div className="col-md-8 col-md-offset-2 playlist table-responsive">
		<h2> Recommended songs </h2>
	    <div className="row recommendation container">
	    {this.state.userInfo.recommendations.map((recommendation) => {
		return (
		    <Recommendation key={recommendation._id}
				    userId={this.props.userId}
				    song={recommendation.song}
				    artist={recommendation.artist}
				    reason={recommendation.reason}
		    onAdd={this.addRec.bind(this)}
		    onDel={this.delRec.bind(this)}
		    />)})}
		</div>
		</div>
		</div>
	)
	}
	else {
	    return null
	}
    }
}
