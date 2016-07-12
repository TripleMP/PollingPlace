var mysql = require('mysql');

var connection = {
  // connectionLimit : 1000,
  // connectTimeout : 60 * 60 * 1000,
  // aqcuireTimeout : 60 * 60 * 1000,
  // timeout : 60 * 60 * 1000
  host : 'pickups.justinpchen.com',
  user : 'psbyron3',
  password : 'cocacola1',
  database : "m2p_pickups_db",
  charset : 'utf8'
}

// var pool = mysql.createPool({
//   connectionLimit : 10,
//   user : 'root',
//   password : '',
//   port : 3000,
//   database : "pickups"
// });

module.exports = connection;