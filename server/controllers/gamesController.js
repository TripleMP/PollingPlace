var models = require('../models/gamesModel.js');
var url = require('url');

module.exports = {
  games : {
    get : function(req, res) {
      models.games.get(function(data, msg) {
        if (data) {
          console.log(data,"SQL retour")
          res.send(data);
        } else {
          res.status(404).send(msg);
        }
      },req.url)
    },
    post : function(req, res) {
      console.log('+++line 16: ', req.body)
      models.games.post(function(data, msg) {
        if (data) {
          res.status(201).json({success: true});
        } else {
          res.status(404).send(msg); 
        }
      }, req.body);
    },
    put : function(req, res) {
      models.games.put(function(data, msg) {
        if (data) {
          res.status(201).send(data);
        } else {
          res.status(404).send(msg);
        }

      }, req.body);
    },
    delete : function(req, res) {
      models.games.delete(function(data, msg) {
      })
    }
  }
}