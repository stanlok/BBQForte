import React from 'react';
import Song from './song';
import {getSongList, addSong} from '../server';

export default class SongList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { songs: [], value: "", currentSearch: "" };
  }

  handleSongSearch(searchText) {
    if (searchText !== "") {
      this.setState({currentSearch: searchText});
      getSongList(searchText, (songList) => {
        this.setState({songs: songList, value: ""});
      });
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleKeyUp(e) {
    if (e.key === "Enter") {
      var searchText = this.state.value;
      if (searchText !== "") {
        this.handleSongSearch(searchText);
      }
    }
  }

  handleAddSongClick(clickEvent, songItem) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {

      var callbackFunction = (updatedSongs) => {
        this.setState({ songs: [], value: "", currentSearch: "" });
        this.props.callbackPlaylist(updatedSongs);
      };
      addSong(this.props.pid, this.props.userID, songItem, callbackFunction);
    }
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <div className="row text-center playlist-toolbar">
          <form className="navbar-form" role="search">
            <div className="form-group">
              <div className="input-group">
                <input type="text"
                       className="form-control"
                       placeholder="Search for songs..."
                       value={this.state.value}
                       onChange={(e) => this.handleChange(e)}
                       onKeyUp={(e) => this.handleKeyUp(e)} />
                <span className="input-group-addon">
                  <span className="fa fa-search"></span>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          {(() => {
            switch (this.state.currentSearch) {
              case "":
                return null;
              default:
                return <p className="search-result">Results for "{this.state.currentSearch}"</p>;
            }
          })()}

        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 songlist-table">
            {this.state.songs.map((songItem, i) => {
              return (
                <div key={i} onClick={(e) => this.handleAddSongClick(e, songItem)}>
                  <Song key={i}
                        trackNumber={i + 1}
                        spotifyID={songItem.spotify_id}
                        title={songItem.title}
                        artist={songItem.artist}
                        album={songItem.album}
                        uri={songItem.uri}
                        playlistID={this.state._id}
                        callbackPlaylist = {this.onChildChanged}
                        hideRemoveSong="true" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

SongList.contextTypes = {
  router: React.PropTypes.object.isRequired
};
