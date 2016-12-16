import React from 'react';

export default class PlaylistTable extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <strong>{this.props.votes}</strong>
        </td>
        <td>
          {this.props.title}
        </td>
        <td>{this.props.creator}</td>
        <td>
          {this.props.description}
        </td>
        <td>
          {/*<button
            type="button"
            className="btn btn-default playlist-button">
            <span className="glyphicon glyphicon-play-circle" />
          </button>*/}
        </td>
      </tr>
    )
  }
}
