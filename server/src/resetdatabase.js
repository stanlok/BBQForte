var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "bbqforte";
// Put the initial mock objects here.
var initialData = {
  "users": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "userName": "Jon Snow",
      "playlistfeed": new ObjectID("000000000000000000000001"),
      "nickName" : "4TheWatch",
      "spotifyProfileName": "bbqforte",
      "about" : "Classic rock and League of Legends are my favorites",
      "currentPlaylistID" : new ObjectID("000000000000000000000001"),
      "followers" : [
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000003")
      ],
      "following" : [new ObjectID("000000000000000000000003")],
      "profile_public": true,
      "recommend": true,
      "status": "online",
      "chattingWith": new ObjectID("000000000000000000000002"),
      "recommendations":
        [{"_id": new ObjectID("000000000000000000000201"), "plid": "101", "artist": "Amon Amarth", "song": "Live for" +
        " the Kill", "reason": " other heavy metal songs"},
          {"_id": new ObjectID("000000000000000000000202"), "plid": "101",  "artist": "Gaelic Storm", "song": "What's" +
          " the Rumpus?", "reason": " other irish rock songs"}]
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "userName": "Ned Stark",
      "playlistfeed": new ObjectID("000000000000000000000002"),
      "nickName" : "StarkShark",
      "spotifyProfileName": "",
      "about" : "Head of House Stark. Overall pretty chill dude, love heavy metal and Call of Duty.",
      "currentPlaylistID" : new ObjectID("000000000000000000000001"),
      "followers" : [new ObjectID("000000000000000000000003")],
      "following" : [new ObjectID("000000000000000000000001")],
      "profile_public": false,
      "recommend": false,
      "status": "online"
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "userName": "Tyrion Lannister",
      "playlistfeed": new ObjectID("000000000000000000000003"),
      "nickName" : "SmallButFierce47",
      "spotifyProfileName": "",
      "about" : "Big fan of Hearthstone and smooth jazz. What I do: drink and know things.",
      "currentPlaylistID" : new ObjectID("000000000000000000000001"),
      "followers" : [new ObjectID("000000000000000000000001")],
      "following" : [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002")],
      "profile_public": true,
      "recommend": true,
      "status": "online"
    },
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "userName": "Rock Expert 1",
      "playlistfeed": new ObjectID("000000000000000000000004"),
      "status": "online"
    },
    "5": {
      "_id": new ObjectID("000000000000000000000005"),
      "userName": "Rock Expert 2",
      "playlistfeed": new ObjectID("000000000000000000000005"),
      "status": "online"
    },
    "6": {
      "_id": new ObjectID("000000000000000000000006"),
      "userName": "Rock Expert 3",
      "playlistfeed": new ObjectID("000000000000000000000006"),
      "status": "away"
    },
    "7": {
      "_id": new ObjectID("000000000000000000000007"),
      "userName": "Rock Expert 4",
      "playlistfeed": new ObjectID("000000000000000000000007"),
      "status": "away"
    },
    "8": {
      "_id": new ObjectID("000000000000000000000008"),
      "userName": "Electronic Expert 1",
      "playlistfeed": new ObjectID("000000000000000000000008"),
      "status": "online"
    },
    "9": {
      "_id": new ObjectID("000000000000000000000009"),
      "userName": "Electronic Expert 2",
      "playlistfeed": new ObjectID("000000000000000000000009"),
      "status": "online"
    },
    "10": {
      "_id": new ObjectID("000000000000000000000010"),
      "userName": "Electronic Expert 3",
      "playlistfeed": new ObjectID("000000000000000000000010"),
      "status": "away"
    },
    "11": {
      "_id": new ObjectID("000000000000000000000011"),
      "userName": "Ambient Expert 1",
      "playlistfeed": new ObjectID("000000000000000000000011"),
      "status": "online"
    },
    "12": {
      "_id": new ObjectID("000000000000000000000012"),
      "userName": "Ambient Expert 2",
      "playlistfeed": new ObjectID("000000000000000000000012"),
      "status": "online"
    },
    "13": {
      "_id": new ObjectID("000000000000000000000013"),
      "userName": "Metal Expert 1",
      "playlistfeed": new ObjectID("000000000000000000000013"),
      "status": "away"
    },
    "14": {
      "_id": new ObjectID("000000000000000000000014"),
      "userName": "Metal Expert 2",
      "playlistfeed": new ObjectID("000000000000000000000014"),
      "status": "away"
    },
    "15": {
      "_id": new ObjectID("000000000000000000000015"),
      "userName": "Hip-Hop Expert 1",
      "playlistfeed": new ObjectID("000000000000000000000015"),
      "status": "online"
    },
    "16": {
      "_id": new ObjectID("000000000000000000000016"),
      "userName": "Hip-Hop Expert 2",
      "playlistfeed": new ObjectID("000000000000000000000016"),
      "status": "online"
    },
    "17": {
      "_id": new ObjectID("000000000000000000000017"),
      "userName": "Hip-Hop Expert 3",
      "playlistfeed": new ObjectID("000000000000000000000017"),
      "status": "away"
    },
    "18": {
      "_id": new ObjectID("000000000000000000000018"),
      "userName": "Indie Expert 1",
      "playlistfeed": new ObjectID("000000000000000000000018"),
      "status": "away"
    }
  },
  "playlist-feeds": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "contents": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")]
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "contents": [new ObjectID("000000000000000000000001")]
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "contents": [new ObjectID("000000000000000000000001")]
    }
  },
  "playlists": {
    "101": {
      "_id": new ObjectID("000000000000000000000001"),
      "userId": new ObjectID("000000000000000000000001"),
      "game": "Elite Dangerous",
      "imageURL": "img/elite-dangerous.jpg",
      "title": "Music for Space Travel",
      "author": new ObjectID("000000000000000000000001"),
      "votes": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000003")],
      "popularity": 45,
      "timestamp": 140000000000,
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
      "_id": new ObjectID("000000000000000000000002"),
      "userId": new ObjectID("000000000000000000000001"),
      "game": "Call of Duty",
      "imageURL": "img/elite-dangerous.jpg",
      "title": "Music for Shooting Folks",
      "author": new ObjectID("000000000000000000000001"),
      "votes": [],
      "popularity": 45,
      "timestamp": 130999999999,
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
      "_id": new ObjectID("000000000000000000000001"),
      "categories": [
        {
          "title": "BBQ Forte",
          "topics": [
            {
              "_id": new ObjectID("000000000000000000000001"),
              "title": "General Forte Discussion",
              "category": "forte",
              "threadCount": 1,
              "postCount": 2,
              "threads": [
                {
                  "_id": new ObjectID("000000000000000000000001"),
                  "title": "First Thread",
                  "postCount": 1,
                  "posts": [
                    {
                      "_id": new ObjectID("000000000000000000000001"),
                      "author": new ObjectID("000000000000000000000003"),
                      "postDate": 1453668480000,
                      "contents": "Aut si rem a me pecuniam in Midiam elit. Nec ego in imperio elit. Id quod sum sub potestate felis. Etiam Id est - problema solvenda. Skyler est simplex partitio - introducam pecuniam, pecuniam launder. Id quod vobis deerat. Qui nunc loqueris? Ecce qui cogitatis? Vos scitis quanta ego faciam annum Id est, ut ego dixi vobis non credunt. Scis quid si ne subito placuit ire in opus?"
                    },
                    {
                      "_id": new ObjectID("000000000000000000000002"),
                      "author": new ObjectID("000000000000000000000002"),
                      "postDate": 1453668480000,
                      "contents": "Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere. Et suus vos. Nescio quis, qui est bonus usus liberi ad Isai? Qui nosti ... Quis dimisit filios ad necem ... hmm? Gus! Est, ante me factus singulis decem gradibus. Et nunc ad aliud opus mihi tandem tollendum est puer ille consensus et nunc fugit. Ipse suus obtinuit eam. Non solum autem illa, sed te tractantur in se trahens felis."
                    }
                  ]
                }
              ]
            },
            {
              "_id": new ObjectID("000000000000000000000002"),
              "title": "Help and Suggestions",
              "category": "forte",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000003"),
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
            "_id": new ObjectID("000000000000000000000004"),
            "title": "Music General",
            "category": "music",
            "threadCount": 0,
            "postCount": 0,
            "threads": []
          },
            {
              "_id": new ObjectID("000000000000000000000005"),
              "title": "Polls/Quizzes/Games",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000006"),
              "title": "Ambient",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000007"),
              "title": "Classical",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000008"),
              "title": "Electronic",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000009"),
              "title": "Folk",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000010"),
              "title": "Hip-Hop",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000011"),
              "title": "Indie",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000012"),
              "title": "Jazz/Blues",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000013"),
              "title": "Metal",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000014"),
              "title": "Pop",
              "category": "music",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000015"),
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
              "_id": new ObjectID("000000000000000000000016"),
              "title": "Games General",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000017"),
              "title": "Polls/Quizzes/Games",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000018"),
              "title": "Action-Adventure",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000019"),
              "title": "Fighters",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000020"),
              "title": "Shooters",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000021"),
              "title": "JRPGs",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000022"),
              "title": "MOBAs/MMOs",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000023"),
              "title": "Platformers",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000024"),
              "title": "Sandbox RPGs",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000025"),
              "title": "Sports",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000026"),
              "title": "Strategy",
              "category": "games",
              "threadCount": 0,
              "postCount": 0,
              "threads": []
            },
            {
              "_id": new ObjectID("000000000000000000000027"),
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
      "_id": new ObjectID("000000000000000000000001"),
      "newsEntries": [
        {
          "_id": new ObjectID("000000000000000000000001"),
          "title": "New Releases",
          "contents": "Playlists have been added for the new releases Blade and Soul, Rise of the Tomb Raider, and more!",
          "publishDate": "2.6.2016"
        },
        {
          "_id": new ObjectID("000000000000000000000002"),
          "title": "Horror Playlist Update",
          "contents": "You asked. We delivered. We have updated our horror section to include playlists with creepy children!",
          "publishDate": "1.26.2016"
        },
        {
          "_id": new ObjectID("000000000000000000000003"),
          "title": "New Releases",
          "contents": "Playlists have been added for the new releases Wick, Life is Strange, and more!",
          "publishDate": "1.20.2016"
        },
        {
          "_id": new ObjectID("000000000000000000000004"),
          "title": "Genre Update: Rock",
          "contents": "We have updated our rock music section with several new playlists.",
          "publishDate": "1.3.2016"
        },
        {
          "_id": new ObjectID("000000000000000000000005"),
          "title": "Site Maintenance",
          "contents": "The website will be down for maintenance on 12.23.2016 at 3:00 A.M. EST and should take approximately 2 hours.",
          "publishDate": "12.22.2015"
        },
        {
          "_id": new ObjectID("000000000000000000000006"),
          "title": "New Releases",
          "contents": "Playlists have been added for the new releases Just Cause 3, Fallout 4, and more!",
          "publishDate": "12.13.2015"
        }
      ]
    }
  },
  "carousel": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
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
      "._id": new ObjectID("000000000000000000000001"),
      "contents": [
        /*{
         "imageURL": "img/fallout4.jpg",
         "gameTitle": "Fallout 4",
         "playlists": [103,104,105,106]
         },*/
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")]
        }
      ]
    }
  },
  "mostPopular": {
    "1": {
      "._id": new ObjectID("000000000000000000000001"),
      "contents": [
        /*{
         "imageURL": "img/fallout4.jpg",
         "gameTitle": "Fallout 4",
         "playlists": [103,104,105,106]
         },*/
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")]
        }
      ]
    }
  },
  "highestRated": {
    "1": {
      "._id": new ObjectID("000000000000000000000001"),
      // first newRelease Section
      "contents": [
        /*{
         "imageURL": "img/fallout4.jpg",
         "gameTitle": "Fallout 4",
         "playlists": [103,104,105,106]
         },*/
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")]
        }
      ]
    }
  },
  "liveHelp": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "contents": [
        {
          "genre": "Rock",
          "userList": [
            new ObjectID("000000000000000000000004"),
            new ObjectID("000000000000000000000005"),
            new ObjectID("000000000000000000000006"),
            new ObjectID("000000000000000000000007")
          ]
        },
        {
          "genre": "Electronic",
          "userList": [
            new ObjectID("000000000000000000000008"),
            new ObjectID("000000000000000000000009"),
            new ObjectID("000000000000000000000010")
          ]
        },
        {
          "genre": "Ambient",
          "userList": [
            new ObjectID("000000000000000000000011"),
            new ObjectID("000000000000000000000012")
          ]
        },
        {
          "genre": "Metal",
          "userList": [
            new ObjectID("000000000000000000000013"),
            new ObjectID("000000000000000000000013")
          ]
        },
        {
          "genre": "Hip-Hip",
          "userList": [
            new ObjectID("000000000000000000000015"),
            new ObjectID("000000000000000000000016"),
            new ObjectID("000000000000000000000017")]
        },
        {
          "genre": "Indie",
          "userList": [new ObjectID("000000000000000000000018")]
        }
      ]
    }
  },
  "rising": {
    "1": {
      "._id": new ObjectID("000000000000000000000001"),
      // first newRelease Section
      "contents": [
        /*{
         "imageURL": "img/fallout4.jpg",
         "gameTitle": "Fallout 4",
         "playlists": [103,104,105,106]
         },*/
        {
          "imageURL": "img/elite-dangerous.jpg",
          "gameTitle": "Elite Dangerous",
          "playlists": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")]
        }
      ]
    }
  },
  "conversations": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "userID": new ObjectID("000000000000000000000001"),
      "chatlogs": [
        {
          "otherUser": new ObjectID("000000000000000000000002"),
          "messages": [
            {
              "author": new ObjectID("000000000000000000000002"),
              "content": "Hello, this is Ned Stark!"
            },
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "Hello, this is Jon Snow!"
            },
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "Please excuse me while I type enough to fill up more than one line of text to show that the chat bubble expands!"
            },
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "Wow, that worked out great!"
            },
            {
              "author": new ObjectID("000000000000000000000002"),
              "content": "I am glad that worked out great!"
            },
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "Make me a lasagna."
            },
            {
              "author": new ObjectID("000000000000000000000002"),
              "content": "W-what...?"
            },
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "I said. Make me a lasagna, peasant!"
            }
          ]
        },
        {
          "otherUser": new ObjectID("000000000000000000000003"),
          "messages": [
            {
              "author": new ObjectID("000000000000000000000003"),
              "content": "Hello, you have one unread message!"
            },
            {
              "author": new ObjectID("000000000000000000000003"),
              "content": "Just kidding, you have two now."
            }
          ]
        },
        {
          "otherUser": new ObjectID("000000000000000000000007"),
          "messages": [
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "Hi..."
            }
          ]
        },
        {
          "otherUser": new ObjectID("000000000000000000000005"),
          "messages": [
            {
              "author": new ObjectID("000000000000000000000005"),
              "content": "Is anybody home?"
            }
          ]
        },
        {
          "otherUser": new ObjectID("000000000000000000000016"),
          "messages": [
            {
              "author": new ObjectID("000000000000000000000016"),
              "content": "I like hip-hop."
            },
            {
              "author": new ObjectID("000000000000000000000001"),
              "content": "Same"
            }
          ]
        }
      ]
    }
  },
  "recent-conversations": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "userList": [
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000003"),
        new ObjectID("000000000000000000000007"),
        new ObjectID("000000000000000000000005"),
        new ObjectID("000000000000000000000016")
      ]
    }
  }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
