var gamesHelper = require('../helperFunctions/gamesHelper.js');


module.exports = {
  games : {
    get : function(callback, params) {
      gamesHelper.getGame(callback, params);
    },
    post : function(callback, params) {
      console.log("in model.post", params)
      gamesHelper.postGame(callback, params);
    },
    put : function(callback) { 
    },
    delete : function(callback) {
      gamesHelper.deleteGame(callback);
    }
  }

}