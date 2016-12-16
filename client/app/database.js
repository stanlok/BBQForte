import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "BBQ Forte";

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "userName": "Jon Snow",
      "playlistfeed": 1,
      "nickName" : "4TheWatch",
      "spotifyProfileName": "bbqforte",
      "about" : "Classic rock and League of Legends are my favorites",
      "currentPlaylistID" : 101,
      "followers" : [2,3],
      "following" : [3],
      "profile_public": true,
      "recommend": false,
      "status": "online",
      "chattingWith": 2,
      "recommendations":
        [{"_id": 201, "artist": "Amon Amarth", "song": "Live for the Kill", "reason": " other heavy metal songs"},
          {"_id": 202, "artist": "Gaelic Storm", "song": "What's the Rumpus?", "reason": " other irish rock songs"}]
    },
    "2": {
      "_id": 2,
      "userName": "Ned Stark",
      "playlistfeed": 2,
      "nickName" : "StarkShark",
      "spotifyProfileName": "",
      "about" : "Head of House Stark. Overall pretty chill dude, love heavy metal and Call of Duty.",
      "currentPlaylistID" : 101,
      "followers" : [3],
      "following" : [1],
      "profile_public": false,
      "recommend": false,
      "status": "online"
    },
    "3": {
      "_id": 3,
      "userName": "Tyrion Lannister",
      "playlistfeed": 3,
      "nickName" : "SmallButFierce47",
      "spotifyProfileName": "",
      "about" : "Big fan of Hearthstone and smooth jazz",
      "currentPlaylistID" : 101,
      "followers" : [1],
      "following" : [1,2],
      "profile_public": true,
      "recommend": true,
      "status": "online"
    },
    "4": {
      "_id": 4,
      "userName": "Rock Expert 1",
      "playlistfeed": 4,
      "status": "online"
    },
    "5": {
      "_id": 5,
      "userName": "Rock Expert 2",
      "playlistfeed": 5,
      "status": "online"
    },
    "6": {
      "_id": 6,
      "userName": "Rock Expert 3",
      "playlistfeed": 6,
      "status": "away"
    },
    "7": {
      "_id": 7,
      "userName": "Rock Expert 4",
      "playlistfeed": 7,
      "status": "away"
    },
    "8": {
      "_id": 8,
      "userName": "Electronic Expert 1",
      "playlistfeed": 8,
      "status": "online"
    },
    "9": {
      "_id": 9,
      "userName": "Electronic Expert 2",
      "playlistfeed": 9,
      "status": "online"
    },
    "10": {
      "_id": 10,
      "userName": "Electronic Expert 3",
      "playlistfeed": 10,
      "status": "away"
    },
    "11": {
      "_id": 11,
      "userName": "Ambient Expert 1",
      "playlistfeed": 11,
      "status": "online"
    },
    "12": {
      "_id": 12,
      "userName": "Ambient Expert 2",
      "playlistfeed": 12,
      "status": "online"
    },
    "13": {
      "_id": 13,
      "userName": "Metal Expert 1",
      "playlistfeed": 13,
      "status": "away"
    },
    "14": {
      "_id": 14,
      "userName": "Metal Expert 2",
      "playlistfeed": 14,
      "status": "away"
    },
    "15": {
      "_id": 15,
      "userName": "Hip-Hop Expert 1",
      "playlistfeed": 15,
      "status": "online"
    },
    "16": {
      "_id": 16,
      "userName": "Hip-Hop Expert 2",
      "playlistfeed": 16,
      "status": "online"
    },
    "17": {
      "_id": 17,
      "userName": "Hip-Hop Expert 3",
      "playlistfeed": 17,
      "status": "away"
    },
    "18": {
      "_id": 18,
      "userName": "Indie Expert 1",
      "playlistfeed": 18,
      "status": "away"
    }
  },

  "songs": {
    "1": {
      "artist": "Amon Amarth",
      "name": "Live for the Kill"
    },
    "2": {
      "artist": "Gaelic Storm",
      "name": "If Good Times were Dollars"
    }
  },
  "playlist-feeds": {
    "1": {
      "_id": 1,
      "contents": [101, 102]
    },
    "2": {
      "_id": 2,
      "contents": [101]
    },
    "3": {
      "_id": 3,
      "contents": [101]
    }
  },
  "playlists": {
    "101": {
      "_id": 101,
      "userId": 1,
      "game": "Elite Dangerous",
      "imageURL": "img/elite-dangerous.jpg",
      "title": "Music for Space Travel",
      "author": 1,
      "votes": [1, 3],
      "genre": "Classical",
      "description": "Epic orchestra music.",
      "spotify_id": "3ZYMZPBcsIKT61hOInhRJ6",
      "spotify_author": "1257653694",
      "url": "https://api.spotify.com/v1/users/1257653694/playlists/3ZYMZPBcsIKT61hOInhRJ6",
      "uri": "spotify:user:1257653694:playlist:3ZYMZPBcsIKT61hOInhRJ6",
      "songs": [
        {
          "spotify_id": "6ZFbXIJkuI1dVNWvzJzown",
          "title": "Time",
          "artist": "Hans Zimmer",
          "album": "Inception (Music From The Motion Picture)",
          "uri": "spotify:track:6ZFbXIJkuI1dVNWvzJzown",
          "duration": 275546
        },
        {
          "spotify_id": "778xIyFSF5rOC7Mu5d195Q",
          "title": "Tuesday",
          "artist": "Hans Zimmer",
          "album": "Batman v Superman: Dawn Of Justice - Original Motion Picture Soundtrack (Standard)",
          "uri": "spotify:track:778xIyFSF5rOC7Mu5d195Q",
          "duration": 240919
        },
        {
          "spotify_id": "6eWfgktrz9i593f0ivmw25",
          "title": "Scherzo for X-Wings",
          "artist": "John Williams",
          "album": "Star Wars: The Force Awakens (Original Motion Picture Soundtrack)",
          "uri": "spotify:track:6eWfgktrz9i593f0ivmw25",
          "duration": 152146
        },
        {
          "spotify_id": "73kJJ42uVT0eu1CseFBu7i",
          "title": "The Falcon",
          "artist": "John Williams",
          "album": "Star Wars: The Force Awakens (Original Motion Picture Soundtrack)",
          "uri": "spotify:track:73kJJ42uVT0eu1CseFBu7i",
          "duration": 212493
        },
        {
          "spotify_id": "0xfvrdSqRiMpq4GeXR5JVS",
          "title": "The Ruination of Atlantis, I. Overture",
          "artist": "Jess Hendricks",
          "album": "The Ruination of Atlantis",
          "uri": "spotify:track:0xfvrdSqRiMpq4GeXR5JVS",
          "duration": 196161
        }
      ]
    },
    "102": {
      "_id": 102,
      "userId": 1,
      "game": "Call of Duty",
      "imageURL": "img/elite-dangerous.jpg",
      "title": "Music for Shooting Folks",
      "author": 1,
      "votes": [],
      "genre": "Minimalist",
      "description": "Some weirdness.",
      "spotify_id": "3YWnVhdaGYWscY85HVQ6HM",
      "spotify_author": "bbqforte",
      "url": "https://api.spotify.com/v1/users/bbqforte/playlists/3YWnVhdaGYWscY85HVQ6HM",
      "uri": "spotify:user:bbqforte:playlist:3YWnVhdaGYWscY85HVQ6HM",
      "songs": [
        {
          "spotify_id": "4iDCHDK1PPIvs3IZsTcWgY",
          "title": "Metamorphosis 1",
          "artist": "Philip Glass",
          "album": "Glass Piano (Extended Version)",
          "uri": "spotify:track:4iDCHDK1PPIvs3IZsTcWgY",
          "duration": 387490
        },
        {
          "spotify_id": "5azyfcs4B1YqIxWGS7vHBR",
          "title": "Six Etudes for Piano - q = 168",
          "artist": "Philip Glass",
          "album": "Time Curve: Music for Piano by Philip Glass and William Duckworth",
          "uri": "spotify:track:5azyfcs4B1YqIxWGS7vHBR",
          "duration": 256680
        }
      ]
    }
  },
  "forums": {
    "1": {
      "_id": 1,
      "categories": [
        {
          "title": "BBQ Forte",
          "topics": [
          {
            "_id": 1,
            "title": "General Forte Discussion",
            "category": "forte",
            "threadCount": 2,
            "postCount": 2,
            "threads": [
              {
                "_id": 1,
                "title": "First Thread",
                "postCount": 1,
                "posts": [
                  {
                    "_id": 1,
                    "author": 1,
                    "postDate": 1453668480000,
                    "contents": "Aut si rem a me pecuniam in Midiam elit. Nec ego in imperio elit. Id quod sum sub potestate felis. Etiam Id est - problema solvenda. Skyler est simplex partitio - introducam pecuniam, pecuniam launder. Id quod vobis deerat. Qui nunc loqueris? Ecce qui cogitatis? Vos scitis quanta ego faciam annum Id est, ut ego dixi vobis non credunt. Scis quid si ne subito placuit ire in opus?"
                  },
                  {
                    "_id": 2,
                    "author": 2,
                    "postDate": 1453668480000,
                    "contents": "Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere. Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai? Qui nosti ... Quis dimisit filios ad necem ... hmm? Gus! Est, ante me factus singulis decem gradibus. Et nunc ad aliud opus mihi tandem tollendum est puer ille consensus et nunc fugit. Ipse suus obtinuit eam. Non solum autem illa, sed te tractantur in se trahens felis."
                  }
                ]
              },
              {
                "_id": 2,
                "title": "Let's Discuss",
                "postCount": 0,
                "posts": []
              }
            ]
          },
          {
            "_id": 2,
            "title": "Help and Suggestions",
            "category": "forte",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 3,
            "title": "Off-Topic",
            "category": "forte",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          }
        ]},
        {
          "title": "Music",
          "topics": [{
            "_id": 4,
            "title": "Music General",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 5,
            "title": "Polls/Quizzes/Games",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 6,
            "title": "Ambient",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 7,
            "title": "Classical",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 8,
            "title": "Electronic",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 9,
            "title": "Folk",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 10,
            "title": "Hip-Hop",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 11,
            "title": "Indie",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 12,
            "title": "Jazz/Blues",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 13,
            "title": "Metal",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 14,
            "title": "Pop",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 15,
            "title": "Rock",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          }
        ]},
        {
          "title": "Games",
          "topics":[
          {
            "_id": 16,
            "title": "Games General",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 17,
            "title": "Polls/Quizzes/Games",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 18,
            "title": "Action-Adventure",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 19,
            "title": "Fighters",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 20,
            "title": "Shooters",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 21,
            "title": "JRPGs",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 22,
            "title": "MOBAs/MMOs",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 23,
            "title": "Platformers",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 24,
            "title": "Sandbox RPGs",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 25,
            "title": "Sports",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 26,
            "title": "Strategy",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
          {
            "_id": 27,
            "title": "Visual Novel/Adventure",
            "category": "games",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          }
        ]
      }
      ]
    }
  },
  "newsUpdates": {
    "1": {
      "_id": 1,
      "newsEntries": [
        {
          "_id": 1,
          "title": "New Releases",
          "contents": "Playlists have been added for the new releases Blade and Soul, Rise of the Tomb Raider, and more!",
          "publishDate": "2.6.2016"
        },
        {
          "_id": 2,
          "title": "Horror Playlist Update",
          "contents": "You asked. We delivered. We have updated our horror section to include playlists with creepy children!",
          "publishDate": "1.26.2016"
        },
        {
          "_id": 3,
          "title": "New Releases",
          "contents": "Playlists have been added for the new releases Wick, Life is Strange, and more!",
          "publishDate": "1.20.2016"
        },
        {
          "_id": 4,
          "title": "Genre Update: Rock",
          "contents": "We have updated our rock music section with several new playlists.",
          "publishDate": "1.3.2016"
        },
        {
          "_id": 5,
          "title": "Site Maintenance",
          "contents": "The website will be down for maintenance on 12.23.2016 at 3:00 A.M. EST and should take approximately 2 hours.",
          "publishDate": "12.22.2015"
        },
        {
          "_id": 6,
          "title": "New Releases",
          "contents": "Playlists have been added for the new releases Just Cause 3, Fallout 4, and more!",
          "publishDate": "12.13.2015"
        }
      ]
    }
  },
  "carousel": {
    "1": {
      "_id": 1,
      "contents": [
        {
          "active": "item active",
          "imgURL": "img/steam_banner.png",
          "altURL": "Steam Banner",
          "description": "Sync your Steam library to BBQ Forte!"
        },
        {
          "active": "item",
          "imgURL": "img/blade_and_soul_banner.png",
          "altURL": "Blade and Soul Banner",
          "description": "Check out playlists for the new release Blade and Soul"
        },
        {
          "active": "item",
          "imgURL": "img/ori_banner.png",
          "altURL": "Ori Banner",
          "description": "Browse popular single-player game playlists"
        },
        {
          "active": "item",
          "imgURL": "img/civ_v_banner.png",
          "altURL": "Civ V Banner",
          "description": "Listen to the top-rated playlists for Civ V"
        },
        {
          "active": "item",
          "imgURL": "img/i_am_bread_banner.png",
          "altURL": "I am Bread Banner",
          "description": "Even bread needs some great music! Check out these playlists"
        }
      ]
    }
  },
  "newRelease": {
    "1": {
      "._id": 1,
      "contents": [
        {
          "imageURL": "img/fallout4.jpg",
          "gameTitle": "Fallout 4",
          "playlists": [103,104,105,106]
        },
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [107,108,109,110]
        }
      ]
    }
  },
  "mostPopular": {
    "1": {
      "._id": 1,
      "contents": [
        {
          "imageURL": "img/fallout4.jpg",
          "gameTitle": "Fallout 4",
          "playlists": [103,104,105,106]
        },
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [107,108,109,110]
        }
      ]
    }
  },
  "highestRated": {
    "1": {
      "._id": 1,
      // first newRelease Section
      "contents": [
        {
          "imageURL": "img/fallout4.jpg",
          "gameTitle": "Fallout 4",
          "playlists": [103,104,105,106]
        },
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [107,108,109,110]
        }
      ]
    }
  },
  "liveHelp": {
    "1": {
      "_id": 1,
      "contents": [
        {
          "genre": "Rock",
          "userList": [4, 5, 6, 7]
        },
        {
          "genre": "Electronic",
          "userList": [8, 9, 10]
        },
        {
          "genre": "Ambient",
          "userList": [11, 12]
        },
        {
          "genre": "Metal",
          "userList": [13, 14]
        },
        {
          "genre": "Hip-Hip",
          "userList": [15, 16, 17]
        },
        {
          "genre": "Indie",
          "userList": [18]
        }
      ]
    }
  },
  "rising": {
    "1": {
      "._id": 1,
      // first newRelease Section
      "contents": [
        {
          "imageURL": "img/fallout4.jpg",
          "gameTitle": "Fallout 4",
          "playlists": [103,104,105,106]
        },
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [107,108,109,110]
        }
      ]
    }
  },
  "conversations": {
    "1": {
      "_id": 1,
      "userID": 1,
      "chatlogs": [
        {
          "otherUser": 2,
          "messages": [
            {
              "author": 2,
              "content": "Hello, this is Ned Stark!"
            },
            {
              "author": 1,
              "content": "Hello, this is Jon Snow!"
            },
            {
              "author": 1,
              "content": "Please excuse me while I type enough to fill up more than one line of text to show that the chat bubble expands!"
            },
            {
              "author": 1,
              "content": "Wow, that worked out great!"
            },
            {
              "author": 2,
              "content": "I am glad that worked out great!"
            },
            {
              "author": 1,
              "content": "Make me a lasagna."
            },
            {
              "author": 2,
              "content": "W-what...?"
            },
            {
              "author": 1,
              "content": "I said. Make me a lasagna, peasant!"
            }
          ]
        },
        {
          "otherUser": 3,
          "messages": [
            {
              "author": 3,
              "content": "Hello, you have one unread message!"
            },
            {
              "author": 3,
              "content": "Just kidding, you have two now."
            }
          ]
        },
        {
          "otherUser": 7,
          "messages": [
            {
              "author": 1,
              "content": "Hi..."
            }
          ]
        },
        {
          "otherUser": 5,
          "messages": [
            {
              "author": 5,
              "content": "Is anybody home?"
            }
          ]
        },
        {
          "otherUser": 16,
          "messages": [
            {
              "author": 16,
              "content": "I like hip-hop."
            },
            {
              "author": 1,
              "content": "Same"
            }
          ]
        }
      ]
    }
  },
  "recent-conversations": {
    "1": {
      "_id": 1,
      "userList": [2, 3, 7, 5, 16]
    }
  }
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates reading a "document", in this case playlist, from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readPlaylist() {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data["playlists"]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
          var xhr = new XMLHttpRequest();
        xhr.open('POST', '/resetdb');
        xhr.addEventListener('load', function() {
          window.alert("Database reset! Refreshing the page now...");
          document.location.reload(false);
        });
        xhr.send();
        }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
