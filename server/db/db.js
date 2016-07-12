//db on justin's domain: m2p_pickups_dbrtqqwqqgqq
//_____________________________MODULES_________________________________________
var mysql = require('mysql');
var fs = require('fs');
var tables = require('./tables.js');
var db_config = require('./dbConfig.js');



//init connection from Poll_db
var createConnection = function() {
  connection = mysql.createConnection(db_config);
  
  // connection.connect(function (err) {
  //   if (err) {
  //     console.error('error connecting: ' + err);
  //   } else {
  //     console.log("Database is connected")
  //   }
  // });

  connection.on('error', function(err) {
    console.error(err);
  });
}

createConnection();

tables.create();

module.exports = connection;


  //Error handle 
  // createConnection.on('error', function() { console.error("ERROR in database") });

  // //Init DB setup when server boots
  // fs.readFile(__dirname + '/pickups.sql', 'utf-8', function(err, data) {
  //   //Multiple statement work-around
  //   var commands = data.split(";");
  //   commands.pop(); 
  //   commands.forEach (function(command) {
  //     createConnection.query(command, function(err, results) {
  //       if (err) {
  //         console.error(err);
  //       } 
  //     }); 
  //   });
  // });
  // addGame : function(sport, rules, time, player_max, created_by, callback) {
  //   var check = 'SELECT * FROM Games WHERE sport = ? AND time = ?';
  //   var checkValues = [sport, time];
  //   var insert = "INSERT into Games (sport, rules, time, player_max, created_by) values (?, ?, ?, ?, ?);";
  //   var insertValues = [sport, rules, time, player_max, created_by];


  //   connection.query(check, checkValues, function(err, data) {
  //     if (err) {
  //       console.error("error 1 db addGame : ", err);
  //     }
  //     if (data.length === 0) {
  //       connection.query(insert, insertValues, function(err) {
  //         if (err) {console.error('error 2 in db addGame :', err)}
  //         else { callback(true); }
  //       });
  //     } 
  //     else { callback(false); }
  //   });
  // },


  // addLocation : function(address, city, state, zip_code, callback) {
  //   var check = 'SELECT * FROM Locations WHERE address = ? AND zip_code = ?';
  //   var checkValues = [address, zip_code];
  //   var insert = "INSERT into Locations (address, city, state, zip_code);";
  //   var insertValues = [address, city, state, zip_code];

  //   connection.query(check, checkValues, function(err, data) {
  //     if (err) {
  //       console.error("check query error in db addLocation : ", err);
  //     }
  //     if (data.length === 0) {
  //       connection.query(insert, insertValues, function(err) {
  //         if (err) {console.error("insert query error in db addLocation : ", err); }
  //         else { callback(true); }
  //       });
  //     }
  //     else { callback(false); }
  //   })

  // }, 

  // addPlayers : function(name, age, callback) {
  //   var check = 'SELECT * FROM Players WHERE name = ? AND age = ?';
  //   var checkValues = [name, age];
  //   var insert = "INSERT into Players (name, age);";
  //   var insertValues = [name, age];

  //   connection.query(check, checkValues, function(err, data) {
  //     if (err) {
  //       console.error("check query error in db addPlayers : ", err);
  //     }
  //     if (data.length === 0) {
  //       connection.query(insert, insertValues, function(err) {
  //         if (err) { console.error("insert query error in db addPlayers : ", err); }
  //         else { callback(true); }
  //       });
  //     } 
  //     else { callback(false); }
  //   })
  // }


  

