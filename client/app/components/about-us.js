import React from 'react';


export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="col-md-12 ">
      <div className="row">
        <div className="col-md-12 about">
          <h1>About</h1>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <img src="img/forte.png" alt="BBQ Forte Logo" />
            </div>
          </div>
          <div className="row">
            <div className = "col-md-offset-2 col-md-8">
              <h4>
                BBQ Forte is a web app that allows users to view music tracks and playlists that go well with all your favorite Steam games.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
