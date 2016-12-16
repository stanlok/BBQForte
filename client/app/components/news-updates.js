import React from 'react';
import NewsEntry from './news-entry';
import {getNewsUpdates} from '../server';

export default class NewsUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newsEntries: [] };
  }

  refresh() {
    getNewsUpdates((newsData) => {
      this.setState(newsData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body panel-title-style img-rounded">
                <h2>News and Updates</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.newsEntries.map((entry, i) => {
            return (
              <NewsEntry key={i}
                title={entry.title}
                contents={entry.contents}
                publishDate={entry.publishDate} />
            );
          })}
        </div>
      </div>
    )
  }
}
