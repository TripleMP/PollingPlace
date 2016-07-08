
//MODULES
var express = require('express');
var app = express();
var router = require('express').Router();
var db = require('../db/db.js');



// function checkUser() {

// }

router.post ('/polls', function (req, res) {
  var userId = req.body.user.id;
  var poll = req.body.poll

  db.query('INSERT INTO Polls SET  title = ?, content = ?, vote_score = ?, created_at = ?, user_id = ?;',
    [poll.title, poll.content, poll.voteScore, poll.created_at, poll.userId],
    function(err, result) {
      if (err) {
        console.error('error logging poll to db', err)
      } else {
      db.query('SELECT * FROM Polls WHERE id = ?;',
        [result.insertId],
        function(err, rows) {
          res.status(201).json(rows[0]);
        })
      }
    })
})




module.exports = router;
