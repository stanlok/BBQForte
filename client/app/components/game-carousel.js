import React from 'react';
import {getCarousel} from '../server';
import GameCarouselEntry from './game-carousel-entry';

export default class GameCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contents: [] };
  }

  refresh() {
    getCarousel((carouselData) => {
      this.setState(carouselData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div id="myCarousel" className="carousel slide center-block" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              {this.state.contents.map((entry, i) => {
                return (
                  <GameCarouselEntry key={i}
                    active={entry.active}
                    imgURL={entry.imgURL}
                    altURL={entry.altURL}
                    description={entry.description} />
                );
              })}
            </div>

            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
