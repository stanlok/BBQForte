import {readDocument, writeDocument, addDocument, readPlaylist } from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

var token = 'eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJ9';
/**
 *  Properly configure and send an XMLHttpRequest with error handling,
 *  authorization handling, and other needed properties
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  /* global FacebookError */
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      cb(xhr);
    } else {
      var responseText = xhr.responseText;
      BBQError('Could not ' +
        verb + " " +
        resource + ": Received " +
        statusCode + " " +
        statusText + ": " +
        responseText);
    }
  });
  xhr.timeout = 30000;
  xhr.addEventListener('error', function() {
    BBQError("Could not " +
      verb + " " +
      resource + ": Could not connect to the server.");
  });
  xhr.addEventListener('timeout', function() {
    BBQError("Could not " +
      verb + " " +
      resource + ": Request timed out.");
  });
  switch (typeof (body)) {
    case 'undefined':
      xhr.send();
      break;
    case 'string':
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error("Unknown body type: " + typeof(body));
  }
}

//  ********* Spotify Authorization Functions ************

export function checkSpotifyLoggedIn(userID, cb) {
  isSpotifyLoggedIn(userID, (isLoggedIn) => {
    if (isLoggedIn) {
      cb(true);
    } else {
      spotifyLoginUser(userID, (authURL) => {
        //  Opens a new window that allows the user to login to Spotify
        window.open(authURL);
        //  Returns undefined so the calling function knows that the playlist was not actually synced.
        cb(undefined);
      });
    }
  });
}

/**
 * Returns the login URL for the current user for Spotify.
 * @param userID
 * @param cb
 */
function spotifyLoginUser(userID, cb) {
  sendXHR('GET', '/spotify/user/' + userID, undefined, (xhr) => {
    cb(xhr.responseText);
  });
}

/**
 * Call this to check if there is an access token for Spotify
 * @param userID
 * @param cb
 */
function isSpotifyLoggedIn(userID, cb) {
  sendXHR('GET', '/spotify/loggedin/user/' + userID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
 * Log the current user out of Spotify.
 * This should be called when the user logs out of our app as well.
 * @param userID
 * @param cb
 */
export function spotifyLogoutUser(userID, cb) {
  sendXHR('DELETE', 'spotify/user/' + userID, undefined, () => {
    cb();
  });
}

//  ********* END Spotify Authorization Functions ************

// Steam API
var steamKey = '0FA3A4F28AF88CB432578F4EAE64D2A5';

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var url = 'http://updates.html5rocks.com';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
/**
 * Returns the steamid of the given userName.
 */
export function steamGetSteamId(userName, cb){
  var url = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/' + '?key=' + steamKey + '&vanityurl=' + userName;
  var xhr = createCORSRequest('GET', url);
  xhr.send();
  cb(JSON.parse(xhr.responseText));
}

/**
 * Returns the owned games of the account belonging to the given steamid.
 */
export function steamOwnedGames(steamId, cb){
  sendXHR('GET', 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v2' + '?key=' + steamKey + '&steamid=' + steamId, undefined, () => {
    cb();
  });
}

/**
 * Returns information about the game tied to the given appid.
 */
export function steamGameSchema(appId, cb) {
  sendXHR('GET', 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/' + '?key=' + steamKey + '&appid=' + appId, undefined, () => {
    cb();
  });
}

/**
 * Returns information about the user tied to the given steamid.
 */
export function steamProfileSchema(steamId, cb) {
  sendXHR('GET', 'https://api.steampowered.com/ISteamUserStats/GetPlayerSummaries/v2/' + '?key=' + steamKey + '&steamids=' + steamId, undefined, () => {
    cb();
  });
}

/**
 * This will likely need to be moved? I am just performing a GET from Spotify's song database.
 */
export function getSongList(searchData, cb) {
  sendXHR('POST', '/spotify/songlist', searchData, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
 * Searches Spotify for playlists
 * @param searchTerm
 * @param userID
 * @param cb
 */
export function searchForPlaylists(searchTerm, userID, cb) {
  sendXHR('POST', '/spotify/playlistresults/' + userID, searchTerm, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

//  ********* Playlist Functions ************

/**
 * Given a user ID (for now), returns a PlaylistFeed object.
 */
export function getPlaylistFeed(userID, cb) {
  sendXHR('GET', '/playlistfeed/user/' + userID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
 * Create a new playlist
 */
export function createNewPlaylist(userID, title, game, genre, description, cb) {
  isSpotifyLoggedIn(userID, (isLoggedIn) => {
    if (isLoggedIn) {
      sendXHR('POST', '/playlist', {
        userID: userID,
        author: userID,
        title: title,
        game: game,
        genre: genre,
        description: description
      }, (xhr) => {
        cb(JSON.parse(xhr.responseText));
      });
    } else {
      spotifyLoginUser(userID, (authURL) => {
        //  Opens a new window that allows the user to login to Spotify
        window.open(authURL);
        //  Returns undefined so the calling function knows that the playlist was not actually synced.
        cb(undefined);
      });
    }
  });
}

/**
* Removes a playlist from the local database.
 * Does not affect Spotify.
*/
export function removePlaylist(playlistID, cb) {
  sendXHR('DELETE', '/playlist/' + playlistID, undefined, () => {
    cb();
  });
}

/**
* Updates a playlist's votes by adding the userID.
*/
export function votePlaylist(playlistID, userId, cb) {
  sendXHR('PUT', '/playlist/'+playlistID+'/votes/'+userId, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Updates a playlist's votes by removing the userID.
*/
export function unvotePlaylist(playlistID, userId, cb) {
  sendXHR('DELETE', '/playlist/'+playlistID+'/votes/'+userId, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Adds a song to a playlist
*/
export function addSong(playlistID, userID, song, cb) {
  isSpotifyLoggedIn(userID, (isLoggedIn) => {
    if (isLoggedIn) {
      sendXHR('PUT', '/playlist/' + playlistID + '/songs/' + userID, {
        spotify_id: song.spotify_id,
        title: song.title,
        artist: song.artist,
        album: song.album,
        uri: song.uri,
        duration: song.duration
      }, (xhr) => {
        cb(JSON.parse(xhr.responseText));
      });
    } else {
      spotifyLoginUser(userID, (authURL) => {
        //  Opens a new window that allows the user to login to Spotify
        window.open(authURL);
        //  Returns undefined so the calling function knows that the playlist was not actually synced.
        cb(undefined);
      });
    }
  });
}

/**
 * Removes a song from a playlist.
 * Should FAIL if the user does not own the playlist.
 */
export function removeSong(playlistID, spotifyAuthorID, userID, userSpotify, songIndex, cb) {
  isSpotifyLoggedIn(userID, (isLoggedIn) => {
    if (isLoggedIn) {
      sendXHR('DELETE',
        '/playlist/' + playlistID +
        '/spotify/' + spotifyAuthorID +
        '/spotifyuser/' + userSpotify +
        '/songs/' + songIndex +
        '/user/' + userID, undefined,
        (xhr) =>
        {
          cb(JSON.parse(xhr.responseText));
        });
    } else {
      spotifyLoginUser(userID, (authURL) => {
        //  Opens a new window that allows the user to login to Spotify
        window.open(authURL);
        //  Returns undefined so the calling function knows that the playlist was not actually synced.
        cb(undefined);
      });
    }
  });
}

/**
 * Adds a new, empty playlist to the local and Spotify accounts.
 * @param playlist
 * @param userID
 * @param cb
 */
export function addPlaylist(playlist, userID, cb) {
  isSpotifyLoggedIn(userID, (isLoggedIn) => {
    if (isLoggedIn) {
      sendXHR('PUT', '/playlistfeed/user/' + userID + '/playlist/', {
        userID: userID,
        author: playlist.playlist.author,
        title: playlist.playlist.title,
        game: playlist.playlist.game,
        imageURL: playlist.playlist.imageURL,
        genre: playlist.playlist.genre,
        description: playlist.playlist.description,
        spotify_id: playlist.playlist.spotify_id,
        spotify_author: playlist.playlist.spotify_author,
        url: playlist.playlist.url,
        uri: playlist.playlist.uri
      }, (xhr) => {
        cb(JSON.parse(xhr.responseText));
      });
    } else {
      spotifyLoginUser(userID, (authURL) => {
        //  Opens a new window that allows the user to login to Spotify
        window.open(authURL);
        //  Returns undefined so the calling function knows that the playlist was not actually synced.
        cb(undefined);
      });
    }
  });
}

/**
 * Edits the local playlist info.
 * @param userID
 * @param name
 * @param game
 * @param genre
 * @param descrip
 * @param cb
 */
export function editPlaylist(playlistID, name, game, genre, descrip, cb) {
  sendXHR('PUT', 'playlist/' + playlistID, {
    name: name,
    game: game,
    genre: genre,
    description: descrip
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
*with callback to use for profile page
*/
export function getPlaylistCB(playlistID, cb) {
  var playlist = readDocument('playlists', playlistID);
  // playlist.contents = playlist.songs.map(getSong);
  emulateServerReturn(playlist, cb);
}

/**
* Given a playlist ID returns a Playlist object.
* Might considering merging with getPlaylist(playlistID)
*/
function getPlaylistWithAuthor(playlistID) {
  var playlist = readDocument('playlists', playlistID);
  var userID = playlist.author;
  playlist.author = readDocument('users', userID).userName
  return playlist;
}

/**
* Given a user ID (for now), returns a UserData object.
*/
export function getUserData(userID, cb) {
  sendXHR('GET', '/user/' + userID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


export function setUserData(userID, data, cb) {
    sendXHR('PUT', '/user/' + userID, { data: data }, (xhr) => {
	cb(JSON.parse(xhr.responseText));
    });
}

export function setUserName(userID, nickname, cb) {
  sendXHR('PUT', '/user/' + userID + '/name', nickname, xhr => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function setUserAbout(userID, about, cb) {
  sendXHR('PUT', '/user/' + userID + '/about', about, xhr => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getUserNickName(userID, cb) {
  sendXHR('GET', '/user/' + userID + '/nickName', undefined, xhr => {
    cb(JSON.parse(xhr.responseText));
  });
}


export function useRecommendation(userID, key, cb) {
    sendXHR('PUT', '/user/' + userID + '/recommendations/' + key, (xhr) => {
	cb(JSON.parse(xhr.responseText));
    });
}

export function delRecommendation(userID, key, cb) {
    sendXHR('DELETE', '/user/' + userID + '/recommendations/' + key, (xhr) => {
	cb(JSON.parse(xhr.responseText));
    });
}

/**
* Returns a Forum object.
*/
export function getForum(cb) {
  sendXHR('GET', '/forum/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a Topic object.
*/
export function getTopic(category, topicID, cb ) {
  sendXHR('GET', '/forum/' +  'category/' + category + '/topic/' + topicID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Adds a Thread object.
*/
export function postThread(author, category, topicId, title, contents) {
  sendXHR('POST', "/forum/" +  "category/" + category + "/topic/" + topicId + "/newTopic" ,
  {  author: author, title: title, contents : contents})
  }

  /**
  * Adds a Comment object.
  */
export function postComment( author, category, topicId, threadId, contents) {
  sendXHR('POST', "/forum/" +  "category/" + category + "/topic/" + topicId + "/thread/" + threadId, {
    author: author,
    contents : contents})
}


/**
* Returns a NewsUpdates object.
*/
export function getNewsUpdates(cb) {
  sendXHR('GET', '/news-updates/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a GameCarousel object.
*/
export function getCarousel(cb) {
  sendXHR('GET', '/carousel/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a NewRelease object
*/
export function getNewRelease(cb) {
  // var newReleaseData = readDocument('newRelease', 1);
  // newReleaseData.contents.forEach((n) => {
  //   n.playlists = n.playlists.map(getPlaylistWithAuthor)
  // });
  // emulateServerReturn(newReleaseData, cb);
  sendXHR('GET', '/new-release/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a MostPopular object
*/
export function getMostPopular(cb) {
  // var mostPopularData = readDocument('mostPopular', 1);
  // mostPopularData.contents.forEach((n) => {
  //   n.playlists = n.playlists.map(getPlaylistWithAuthor)
  // });
  // emulateServerReturn(mostPopularData, cb);
  sendXHR('GET', '/most-popular/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a HighestRated object
*/
export function getHighestRated(cb) {
  // var highestRatedData = readDocument('highestRated', 1);
  // highestRatedData.contents.forEach((n) => {
  //   n.playlists = n.playlists.map(getPlaylistWithAuthor)
  // });
  // emulateServerReturn(highestRatedData, cb);
  sendXHR('GET', '/highest-rated/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a Rising object
*/
export function getRising(cb) {
  // var risingData = readDocument('rising', 1);
  // risingData.contents.forEach((n) => {
  //   n.playlists = n.playlists.map(getPlaylistWithAuthor)
  // });
  // emulateServerReturn(risingData, cb);
  sendXHR('GET', '/rising/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Returns a search result object
*/
export function searchPlaylist(terms, cb) {
  var playlists = readPlaylist('playlists');
  var arr = [];
  var result = [];
  for (var attr in playlists){
    arr.push(playlists[attr])
  }

  outer:
  for (var i = 0; i < arr.length; i++){
    for (var x in arr[i]){
      if(x === "game" || x === "title" || x === "genre" || x === "description"){
        //console.log(typeof arr[i][x]);
        if(arr[i][x].toLowerCase().includes(terms.toLowerCase())){
          result.push(arr[i]);
          continue outer;
        }
      }
    }
  }
  emulateServerReturn(result, cb);
}



/**
* Given a user ID (for now), returns a PrivateChatLiveHelp object.
*/
export function getLiveHelpList(userID, cb) {
  sendXHR('GET', '/private-chat/live-help/' + userID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

/**
* Given a user ID (for now), returns a RecentConversations object. Also adds otherUserID to the user list if not found.
*/
export function getRecentConversations(userID, otherUserID, cb) {
  sendXHR('GET', '/private-chat/recent/' + userID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function addRecentChat(userID, otherUserID, cb) {
  sendXHR('POST', '/private-chat/recent/' + userID + '/add/' + otherUserID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

/**
* Given a user ID (for now), returns a PrivateChatConversation object.
*/
export function getChatConversations(userID, cb) {
  sendXHR('GET', '/private-chat/conversations/' + userID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

/**
* Adds a new message to the messages array of a user's chatlogs in 'conversations'
*/
export function sendMessage(userID, otherUserIndex, contents, cb) {
  sendXHR('POST', '/private-chat/conversations/' + userID + '/chat-with/' + otherUserIndex, {author: userID, content: contents}, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

/**
* Adds a new conversation (chatlog entry in chatlogs index) for a user in 'conversations'
*/
export function createNewChatlog(userID, otherUserID, cb) {
  sendXHR('POST', '/private-chat/conversations/' + userID + '/create-chat/' + otherUserID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

/**
* Removes an entry in a user's Recent Conversations menu
*/
export function removeRecentChat(userID, otherUserID, cb) {
  sendXHR('DELETE', '/private-chat/recent/' + userID + '/remove/' + otherUserID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

/**
* Switches the chat box to display a conversation with a different user
*/
export function updateChattingWith(userID, otherUserID, cb) {
  sendXHR('PUT', '/private-chat/switch/' + userID + '/to/' + otherUserID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
