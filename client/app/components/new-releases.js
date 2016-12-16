import React from 'react';
import { getNewRelease } from '../server';
import PlaylistTable from './playlistTable';

export default class NewReleases extends React.Component {
  constructor(props) {
    super(props);
    // Populating this.state.contents with empty mock data to display before data is retrieved from database
    this.state = {
      contents: [{
        "gameTitle": "Empty",
        "playlists": [
          {
            "game": "Empty",
            "imageURL": "",
            "title": "Empty",
            "author": 0,
            "votes": [],
            "genre": "Empty",
            "description": "Empty",
            "url": "Empty",
            "songs": []
          }
        ]
      },{
        "gameTitle": "Empty",
        "playlists": [
          {
            "game": "Empty",
            "imageURL": "",
            "title": "Empty",
            "author": 0,
            "votes": [],
            "genre": "Empty",
            "description": "Empty",
            "url": "Empty",
            "songs": []
          }
        ]
      }
      ]
    };
  }

  refresh() {
    getNewRelease((newReleases) => {
      this.setState({contents: newReleases.contents})
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        {this.state.contents.map((content, k) => {
          return(
            <div key={k} className="row">
              <div className="col-md-8 col-md-offset-2 playlist table-responsive">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="playlist-title"> New Playlists for <strong>
                      {content.gameTitle}
                    </strong></h3>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={content.imageURL}
                      className="img-responsive"
                      alt="Image" />
                  </div>
                </div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Votes</th>
                      <th>Title</th>
                      <th>Creator</th>
                      <th>Description</th>
                      <th />
                    </tr>
                  </thead>

                  <tbody>
                    {content.playlists.map((d, i)=> {
                      return(
                        <PlaylistTable key={i}
                          votes={d.votes.length}
                          title={d.title}
                          creator={d.author}
                          description={d.description} />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}
