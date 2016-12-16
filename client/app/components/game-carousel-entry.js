import React from 'react';

export default class GameCarouselEntry extends React.Component {
  render() {
    return (
      <div className={this.props.active}>
        <a href="#"><img src={this.props.imgURL} alt={this.props.altURL} /></a>
        <a href="#">
          <div className="carousel-caption">
            <h4>{this.props.description}</h4>
          </div>
        </a>
      </div>
    )
  }
}
