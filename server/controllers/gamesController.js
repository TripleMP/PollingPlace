var models = require('../models/gamesModel.js');
var url = require('url');

module.exports = {
  games : {
    get : function(req, res) {
      models.games.get(function(data, msg) {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send(msg);
        }
      })
    },
    post : function(req, res) {
      models.games.post(function(data, msg) {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send(msg); 
        }
      }, req.body)
    },
    put : function(req, res) {
      models.games.put(function(data) {

      })
    },
    delete : function(req, res) {
      models.games.delete(function(data, msg) {
      })
    }
  }
}