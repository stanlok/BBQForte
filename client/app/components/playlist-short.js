/**
 * Created by jesshendricks on 4/4/16.
 */
import React from 'react';

export default class PlaylistShort extends React.Component {


  render() {
    return (
      <table className="table table-hover">
        <tbody>
        <tr>
          <td className="col-md-4">{this.props.title}
          </td>
          <td className="col-md-4">{this.props.owner}</td>
          <td className="col-md-4">{this.props.numTracks} tracks</td>
        </tr>
        </tbody>
      </table>
    )
  }
}