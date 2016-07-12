//_________________MODULES_______________________________

var db = require('../db/db.js');
var router = require('express').Router();
var connection = require('../db/db.js')


exports.getGame = function(callback, params) {
  var check = 'SELECT * FROM Games';
  //var checkValues = [params.sport, params.rules, params.time, params.location, params.currentPlayers, params.maxPlayers, params.created_by];

 connection.query(check, function(err, data) {
    if (err) {
      console.error("error getting games db.getGame : ", err);
    }
    if (data) {
      callback(data)
    }
  })
}

exports.postGame = function(callback, params) {
  console.log("params in postGame", params);
  var check = 'SELECT * FROM Games WHERE sport = ? AND time = ?';
  var checkValues = [params.sport, params.time];
  var insert = "INSERT into Games (sport, rules, time, location, originalPlayers, joinedPlayers, playersNeeded, created_by) values (?, ?, ?, ?, ?, ?, ?, ?);";
  var insertValues = [params.sport, params.rules, params.time, params.location, params.originalPlayers, params.joinedPlayers, params.playersNeeded, params.created_by];

 connection.query(check, checkValues, function(err, data) {
    if (err) {
      console.error("error 1 gamesHelper addGame : ", err);
    }
    if (data.length === 0) {
     connection.query(insert, insertValues, function(err) {
        if (err) {console.error('error 2 in gamesHelper addGame :', err)}
        else { callback(data); }
      });
    } 
    else { callback(data); console.log("Game successfully stored in db!") }
  });
}

exports.deleteGame = function(callback) {


}

exports.addGameLocation = function(callback, params) {
  var check = 'SELECT * FROM Markers WHERE lat = ? and lng = ?';
  var checkValues = [params.lat, params.lng];
  var insert = "INSERT INTO Locations (name, address, lat, lng, type, game_id) values (?, ?, ?, ?, ?, ?);";
  

}

// router.post ('/pickups', function (req, res) {
//   var userId = req.body.user.id;
//   var pickup = req.body.pickup;

//   db.query('INSERT INTO Pickups SET  sport = ?, rules = ?, time = ?, player_max = ?, created_by = ?;',
//     [pickups.sport, pickups.rules, pickups.time, pickups.player_max, pickups.created_by],
//     function(err, result) {
//       if (err) {
//         console.error('error logging pickup to db', err)
//       } else {
//       db.query('SELECT * FROM Pickups WHERE id = ?;',
//         [result.insertId],
//         function(err, rows) {
//           res.status(201).json(rows[0]);
//         })
//       }
//     })
// });

// router.get('/pickups', function(req, res) {

//   db.query('SELECT sport, rules, time, player_max, created_by, created_at FROM pickups')
// })
