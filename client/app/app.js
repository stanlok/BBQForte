import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBanner from './components/errorbanner';
import PlayListFeed from './components/playlistfeed';
import Sidebar from './components/navbar';
import Navbar from './components/sidebar';
import GameCarousel from './components/game-carousel';
import NewsUpdates from './components/news-updates';
import Profile from './components/profile';
import NewReleases from './components/new-releases';
import MostPopular from './components/most-popular';
import HighestRated from './components/highest-rated';
import RisingPlaylists from './components/rising';
import Forum from './components/forum';
import ForumTopic from './components/forum-topic';
import ForumThread from './components/forum-thread';
import ForumNewThread from './components/forum-newthread';
import ForumNewPost from './components/forum-newpost';
import PrivateChat from './components/private-chat';
import AboutUs from './components/about-us';
import SongList from './components/song-list';
import SearchResult from './components/search-result';
import ContactUs from './components/contact-us';
import Settings from './components/settings';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

/**
* Start Page PLACEHOLDER
*/
class StartPage extends React.Component {
  render() {
    return (
      <div>
        <GameCarousel />
        <NewsUpdates />
      </div>
    );
  }
}

/**
 * A Profile Page PLACEHOLDER
 */
class ProfilePage extends React.Component {
  render() {
    return (
      <Profile userID={"000000000000000000000001"} profileID={this.props.params.id}/>
    );
  }
}

class SettingsPage extends React.Component {
    render() {
	return (
	    <Settings userID={"000000000000000000000001"} />
	);
    }
}




/**
 * The Saved Playlist Page PLACEHOLDER page.
 */
class SavedPlayListPage extends React.Component {
  render() {
      return (
        <PlayListFeed userID={"000000000000000000000001"} />
      );
  }
}

/**
 * The New Releases Page PLACEHOLDER page.
 */
class NewReleasesPage extends React.Component {
  render() {
      return (
        <NewReleases />
      );
  }
}

/**
 * The Most Popular Page PLACEHOLDER page.
 */
class MostPopularPage extends React.Component {
  render() {
      return (
        <MostPopular />
      );
  }
}

/**
 * The Highest Rated Page PLACEHOLDER page.
 */
class HighestRatedPage extends React.Component {
  render() {
      return (
        <HighestRated />
      );
  }
}

/**
 * The Forums Page PLACEHOLDER page.
 */
class ForumPage extends React.Component {
  render() {
      return (
        <Forum userId={this.props.params.id}/>
      );
  }
}

class ForumTopicPage extends React.Component {
  render() {
      return (
        <ForumTopic tid={this.props.params.tid} category={this.props.params.cat} userId={this.props.params.id}/>
      );
  }
}

class ForumThreadPage extends React.Component {
  render() {
      return (
        <ForumThread thid={this.props.params.thid} category={this.props.params.cat} tid={this.props.params.tid} userId={this.props.params.id}/>
      );
  }
}

class ForumNewThreadPage extends React.Component {
  render() {
      return (
        <ForumNewThread tid={this.props.params.tid} category={this.props.params.cat} userID={this.props.params.id}/>
      );
  }
}

class ForumNewPostPage extends React.Component {
  render() {
      return (
        <ForumNewPost thid={this.props.params.thid} category={this.props.params.cat} tid={this.props.params.tid} userID={this.props.params.id}/>
      );
  }
}

/**
 * The Highest Rated Page PLACEHOLDER page.
 */
class RisingPlaylistsPage extends React.Component {
  render() {
      return (
        <RisingPlaylists />
      );
  }
}

/**
 * The Private Chat Page PLACEHOLDER page.
 */
class PrivateChatPage extends React.Component {
  render() {
      return (
        <PrivateChat userID={"000000000000000000000001"}/>
      );
  }
}

/**
 * The About Page PLACEHOLDER page.
 */
class AboutUsPage extends React.Component {
  render() {
      return (
        <AboutUs />
      );
  }
}

/**
 * The Song List Page PLACEHOLDER page.
 */
class SongListPage extends React.Component {
  render() {
      return (
        <SongList pid={this.props.params.pid} userID={this.props.params.id} />
      );
  }
}


class SearchResultPage extends React.Component {
  getSearchTerm() {
    // If there's no query input to this page (e.g. /foo instead of /foo?bar=4),
    // query may be undefined. We have to check for this, otherwise
    // JavaScript will throw an exception and die!
    var queryVars = this.props.location.query;
    var searchTerm = "";
    if (queryVars && queryVars.q) {
      searchTerm = queryVars.q;
      // Remove extraneous whitespace.
      searchTerm.trim();
    }
    return searchTerm;
  }

  render() {
    var searchTerm = this.getSearchTerm();
      return (
        <SearchResult userID={"000000000000000000000001"} searchTerm={searchTerm}/>
      );
  }
}

class ContactUsPage extends React.Component {
  render() {
      return (
        <ContactUs />
      );
  }
}

/**
 * The primary component in our application.
 * The Router will give it different child Components as the user clicks
 * around the application.
 */
class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar userID={"000000000000000000000001"} />
        <div className="container">
          <div className = "row">
            <div className="col-md-2">
              <Sidebar userID={"000000000000000000000001"} />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12">
                  <ErrorBanner />
                </div>
              </div>
              <div className="row">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render((
    // <PlayListFeed />
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={StartPage} />
      <Route path="home/:id" component={StartPage} />
      <Route path="saved-playlist/:id" component={SavedPlayListPage} />
      <Route path="new-releases/:id" component={NewReleasesPage} />
      <Route path="most-popular/:id" component={MostPopularPage} />
      <Route path="highest-rated/:id" component={HighestRatedPage} />
      <Route path="rising-playlists/:id" component={RisingPlaylistsPage} />
      <Route path="profile/:id" component={ProfilePage} />
      <Route path="settings/:id" component={SettingsPage} />
      <Route path="forum/:id" component={ForumPage} />
      <Route path="forum-topic/:tid/:cat/:id" component={ForumTopicPage} />
      <Route path="forum-thread/:thid/:tid/:cat/:id" component={ForumThreadPage} />
      <Route path="forum-newthread/:tid/:cat/:id" component={ForumNewThreadPage} />
      <Route path="forum-newpost/:thid/:tid/:cat/:id" component={ForumNewPostPage} />
      <Route path="private-chat/:id" component={PrivateChatPage} />
      <Route path="about-us/:id" component={AboutUsPage} />
      <Route path="song-list/:pid/:id" component={SongListPage} />
      <Route path="search" component={SearchResultPage} />
      <Route path="contact-us/:id" component={ContactUsPage} />
    </Route>
  </Router>
),document.getElementById('page-content'));
