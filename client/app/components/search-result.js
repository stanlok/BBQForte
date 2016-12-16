import React from 'react';
import { searchPlaylist, unvotePlaylist, votePlaylist } from '../server';

export default class SearchResult extends React.Component {

  constructor(props) {
    super(props);
    // Populating this.state.contents with mock search data to display

    this.state = {
      userID: this.props.userID,
      playlists: []
            /*,
      songs:[{
        "imgURL": "img/hobbit.jpg",
        "title": "My Dear Frodo",
        "artist": "Howard Shore",
        "album": "The Hobbit Soundtrack",
        "type": "Intrumental",
        "duration": 454,
        "url": "TBD"
      },{
        "imgURL": "img/harry_potter.jpg",
        "title": "The Story Continues",
        "artist": "Patrick Doyle",
        "album": "Harry Potter Soundtrack",
        "type": "Intrumental",
        "duration": 312,
        "url": "TBD"
      }
    ]*/
    };
  }

  refresh() {
    searchPlaylist(this.props.searchTerm, (playlists) => {
      this.setState({"playlists": playlists});
    });
  }

  componentDidMount() {
    this.refresh();
  }

  /*handleVoteClick(playlistID, e) {
    e.preventDefault();
    if (this.didUserVote(playlistID)) {
      this.unvotePlaylist(playlistID);
    } else {
      this.votePlaylist(playlistID);
    }

  }*/

  handleVoteClick(index, playlistID, e) {
    e.preventDefault();
    var cb = (newLikeCounter) => {
      this.state.playlists[index-1].votes = newLikeCounter;
      this.setState(this.state);
    };
    if (this.didUserVote(index)) {
      unvotePlaylist(playlistID, this.state.userID, cb);
    } else {
      votePlaylist(playlistID, this.state.userID, cb);
    }

  }

/* voting for playlist function for mock data
  unvotePlaylist(playlistID){
    var userIndex = this.state.playlists[playlistID-1].votes.indexOf(this.state.userID);
    if (userIndex !== -1) {
      this.state.playlists[playlistID-1].votes.splice(userIndex, 1);
    }
    this.setState(this.state);
  }

  votePlaylist(playlistID){
    this.state.playlists[playlistID-1].votes.push(this.state.userID);
    this.setState(this.state);
  }
*/
  didUserVote(playlistID) {
    var votes = this.state.playlists[playlistID-1].votes;
    var voted = false;
    for (var i=0; i < votes.length; i++) {
      if (votes[i] === this.state.userID) {
        voted = true;
        break;
      }
    }
    return voted;
  }

  render() {
    //var query = this.context.router.getCurrentQuery();
    //let {query} = this.props.location
    return (
      <div className="col-md-12">

        <h5>You are searching for ''{this.props.searchTerm}''</h5>
        <div className="panel-group">
          <h1 className="section-title">Playlists</h1>

          {this.state.playlists.map((playlist, i) => {
            var voteIcon = this.didUserVote(i+1)? <span className="glyphicon glyphicon-heart"></span> : <span className="glyphicon glyphicon-heart-empty"></span>

            return(
              <div key={i} className="panel panel-default">
                <div className="panel-heading playlist">
                  <div className="row">
                      <div className="col-md-2">
                        <img src={playlist.imageURL} className="img-responsive" />
                      </div>
                      <div className="col-md-5">
                        <h4>{playlist.title}</h4>
                        <h5>Game: {playlist.game}</h5>
                        <h5>Genre: {playlist.genre}</h5>
                        <h5>Number of songs: {playlist.songs.length}</h5>
                        {/*<button type="button" className="btn btn-default playlist-button" href="#"><span className="glyphicon glyphicon-play"></span></button>*/}
                        <button type="button" className="btn btn-default playlist-button button-addition" href="#" onClick={(e) => this.handleVoteClick(i+1,playlist._id, e)}>{voteIcon}</button>
                        <div className="pull-right">
                          <button type="button" className="btn btn-default playlist-button" data-toggle="collapse" href={"#collapse"+i}><span className="glyphicon glyphicon-option-vertical"></span></button>
                        </div>
                      </div>
                      <div className="col-md-5">
                        {/*Might consider adding more elements of playlists*/}
                      </div>
                  </div>
                </div>
                <div id={"collapse"+i} className="panel-collapse collapse">
                  <div className="panel-body playlist">
                    <div className="table-responsive ">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Track</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                        {playlist.songs.map((song, k) => {
                          return(
                            <tr key={k}>
                              <td>{k+1}</td>
                              <td>{song.title}</td>
                              <td>{song.artist}</td>
                              <td>{song.album}</td>
                              {/*converts seconds of song.duration to format MM min SS seconds for display*/}
                              <td>{(song.duration-(song.duration%60))/60 +" min "+song.duration%60+" sec"}</td>
                              <td>
                                <button type="button" className="btn btn-default playlist-button playlist-button-small">
                                  <span className="glyphicon glyphicon-plus-sign"></span>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <hr />
          {/*
          <h1 className="section-title">Songs</h1>
          {this.state.songs.map((song, i) => {
            return(
              <div key={i} className="panel panel-default">
                <div className="panel-heading playlist">
                  <div className="row">
                      <div className="col-md-2">
                        <img src={song.imgURL} className="img-responsive" />
                      </div>
                      <div className="col-md-5">
                        <h4>Title: {song.title}</h4>
                        <h5>Type: {song.type}</h5>

                        <button type="button" className="btn btn-default playlist-button" href="#"><span className="glyphicon glyphicon-play"></span></button>
                        <button type="button" className="btn btn-default playlist-button button-addition" href="#"><span className="glyphicon glyphicon-plus"></span></button>
                      </div>
                      <div className="col-md-5">
                        <h5>Artist: {song.artist}</h5>
                        <h5>Album: {song.album}</h5>

                        <h5>Duration: {(song.duration-(song.duration%60))/60 +" min "+song.duration%60+" sec"} </h5>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}*/}
        </div>
      </div>
    )
  }
}
