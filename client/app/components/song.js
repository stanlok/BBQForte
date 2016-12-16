import React from 'react';

export default class Song extends React.Component {

  handleRemoveSongClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      this.props.callbackPlaylist(this.props.songIndex);
    }
  }

  render() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <td className="col-md-4">{this.props.trackNumber}: {this.props.title}
            </td>
            <td className="col-md-3">{this.props.artist}</td>
            <td className="col-md-4">{this.props.album}</td>
            <td className="col-md-1">
              {(() => {
                switch (this.props.hideRemoveSong) {
                  case "true":
                    return null;
                  default:
                    return <button type="button"
                      className="btn btn-default playlist-button playlist-button-small"
                      onClick={(e) => this.handleRemoveSongClick(e)}>
                      <span className="fa fa-times"></span>
                    </button>;
                }
              })()}

            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
