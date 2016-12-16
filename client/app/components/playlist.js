import React from 'react';
import Song from './song';
import SongList from './song-list';
import { editPlaylist, unvotePlaylist, votePlaylist, removePlaylist, removeSong } from '../server';

export default class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      game: this.props.data.game,
      description: this.props.data.description,
      genre: this.props.data.genre,
      songs: this.props.data.songs,
      votes: this.props.data.votes,
      newPlaylistName: "",
      newPlaylistGame: "",
      newPlaylistGenre: "",
      newPlaylistDescription: ""
    };
    this.onChildChanged = this.onChildChanged.bind(this);
    this.onRemoveSong = this.onRemoveSong.bind(this);
  }

  onRemoveSong(songIndex) {
    removeSong(this.props.data._id, this.props.data.spotify_author, this.props.userID, this.props.spotifyID, songIndex, (playlist) => {
      this.setState(playlist);
    })
  }

  onChildChanged(newState) {
    this.setState(newState);
  }

  handleNewPlaylistNameChange(e) {
    this.setState({newPlaylistName: e.target.value});
  }

  handleNewPlaylistGameChange(e) {
    this.setState({newPlaylistGame: e.target.value});
  }

  handleNewPlaylistGenreChange(e) {
    this.setState({newPlaylistGenre: e.target.value});
  }

  handleNewPlaylistDescChange(e) {
    this.setState({newPlaylistDescription: e.target.value});
  }

  handleEditPlaylistClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      this.setState({value: ""});
      var name = this.state.newPlaylistName !== "" ? this.state.newPlaylistName : this.props.data.title;
      var game = this.state.newPlaylistGame !== "" ? this.state.newPlaylistGame : this.props.data.game;
      var genre = this.state.newPlaylistGenre !== "" ? this.state.newPlaylistGenre : this.props.data.genre;
      var descrip = this.state.newPlaylistDescription !== "" ? this.state.newPlaylistDescription : this.props.data.description;
      editPlaylist(this.props.data._id, name, game, genre, descrip, (playlist) => {
        this.setState({title: playlist.title, game: playlist.game});
      });
    }
  }

  handleOpenInSpotify(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      window.open(this.props.data.uri);
    }
  }

  handleAddSongClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      this.context.router.push({pathname: "/song-list/" + this.props.data._id + "/" + this.props.userID});
    }
  }

  handleRemovePlaylistClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      var callbackFunction = () => {
        this.props.callbackPlaylistFeed();
      };
      removePlaylist(this.props.data._id, callbackFunction);
    }
  }

  handleVoteClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      var callbackFunction = (updatedVoteCounter) => {
        this.setState({votes: updatedVoteCounter});
      };

      if (this.didUserVote()) {
        unvotePlaylist(this.props.data._id, this.props.userID, callbackFunction);
      } else {
        votePlaylist(this.props.data._id, this.props.userID, callbackFunction);
      }
    }
  }

  didUserVote() {
    var votes = this.state.votes;
    var voted = false;
    for (var i=0; i < votes.length; i++) {
      if (votes[i] === this.props.userID) {
        voted = true;
        break;
      }
    }
    return voted;
  }

  render() {
    var voteButtonIcon = "fa fa-level-up";
    var voteButtonDesc = "Vote for playlist.";
    if (this.didUserVote()) {
      voteButtonIcon = "fa fa-check";
      voteButtonDesc = "Unvote.";
    }
    var playlistDivID = "#" + this.props.data._id;
    var playlistEditDivID = "#" + this.props.data.spotify_id;
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default playlist">
            <div className="panel-heading">
              <div className="row">
                <div className="col-md-8">
                  <h3 className="playlist-title"><strong>{this.state.title}</strong></h3>
                  <h4 className="playlist-subtitle"><strong>Game: </strong>{this.state.game}</h4>
                  <h4 className="playlist-subtitle"><strong>Genre: </strong>{this.state.genre}</h4>
                  <h5 className="playlist-subtitle"><strong>Description: </strong>{this.state.description}</h5>
                    <button type="button"
                      className="btn btn-default playlist-button"
                      title={voteButtonDesc}
                      onClick={(e) => this.handleVoteClick(e)}>
                      <span className={voteButtonIcon}></span>
                    </button><strong>Votes:</strong> {this.state.votes.length}
                  </div>
                  <div className="col-md-4">
                    <img src={this.props.data.imageURL} className="img-responsive" alt="PIC" />
                  </div>
                </div>

                <div className="btn-toolbar playlist-toolbar" role="toolbar">
                  <div className="input-group" role="group" aria-label="Playback Buttons">
                    <button type="button"
                            className="btn btn-default playlist-button"
                            title="Open in Spotify"
                            onClick={(e) => this.handleOpenInSpotify(e)}>
                      Open in Spotify <span className="fa fa-spotify"></span>
                    </button>
                  </div>
                  <div className="input-group pull-right" role="group" aria-label="Playlist Options">
                    <button type="button"
                      className="btn btn-default playlist-button"
                      title="View Tracks"
                      data-toggle="collapse"
                      data-target={playlistDivID}>
                      Songs <span className="fa fa-caret-square-o-down"></span>
                    </button>
                    <button type="button"
                            className="btn btn-default playlist-button"
                            title="Edit Playlist"
                            data-toggle="collapse"
                            data-target={playlistEditDivID}>
                      Edit <span className="fa fa-cogs"></span>
                    </button>
                    <button type="button"
                      className="btn btn-default playlist-button"
                      title="Delete Playlist"
                      onClick={(e) => this.handleRemovePlaylistClick(e)}>
                      Delete <span className="fa fa-times-circle"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div id={this.props.data.spotify_id} className="panel-collapse collapse">
                <form>
                  <div className="form-group col-md-4">
                    <label htmlFor="playlistName">Name</label>
                    <input type="text"
                           id="playlistName"
                           className="form-control"
                           placeholder="Name"
                           value={this.state.value}
                           onChange={(e) => this.handleNewPlaylistNameChange(e)} />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="playlistGame">Game</label>
                    <input type="text"
                           id="playlistGame"
                           className="form-control"
                           placeholder="Game"
                           value={this.state.value}
                           onChange={(e) => this.handleNewPlaylistGameChange(e)} />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="playlistGenre">Genre</label>
                    <input type="text"
                           id="playlistGenre"
                           className="form-control"
                           placeholder="Genre"
                           value={this.state.value}
                           onChange={(e) => this.handleNewPlaylistGenreChange(e)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="playlistDescription">Description</label>
                    <input type="text"
                           id="playlistDescription"
                           className="form-control"
                           placeholder="Description"
                           value={this.state.value}
                           onChange={(e) => this.handleNewPlaylistDescChange(e)} />
                  </div>
                  <button type="submit"
                          className="btn btn-default playlist-button"
                          onClick={(e) => this.handleEditPlaylistClick(e)}>
                    Submit
                  </button>
                </form>
              </div>
              <div id={this.props.data._id} className="panel-collapse collapse">
                <SongList pid={this.props.data._id}
                  userID={this.props.userID}
                  callbackPlaylist = {this.onChildChanged} />
                <table className="table">
                  <tbody>
                    <tr className="playlist-toolbar">
                      <td className="col-md-4">Song Title</td>
                      <td className="col-md-3">Artist</td>
                      <td className="col-md-4">Album</td>
                      <td className="col-md-1"></td>
                    </tr>
                  </tbody>
                </table>
                {this.state.songs.map((songItem, i) => {
                  return (
                    <Song key={i}
                      trackNumber={i + 1}
                      songIndex={i}
                      userId = {this.props.userID}
                      spotify_id = {songItem.spotify_id}
                      title={songItem.title}
                      artist={songItem.artist}
                      album={songItem.album}
                      uri={songItem.uri}
                      duration={songItem.duration}
                      playlistID={this.props.data._id}
                      callbackPlaylist = {this.onRemoveSong}
                      hideRemoveSong="false" />
                  );
                })}
              </div>
            <div className="panel-footer text-center">
              {this.state.songs.length} songs.
            </div>
            </div>


          </div>
        </div>
      )
    }
  }

  Playlist.contextTypes = {
    router: React.PropTypes.object.isRequired
  };
