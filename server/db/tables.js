
//create schema
module.exports = {
    games : 'CREATE TABLE IF NOT EXISTS `Games` (`id` INTEGER NOT NULL AUTO_INCREMENT, `sport` VARCHAR(50) NULL DEFAULT NULL, `rules` VARCHAR(500) NULL DEFAULT NULL, `time` VARCHAR(10) NULL DEFAULT NULL, `location` VARCHAR(500) NULL DEFAULT NULL, `originalPlayers` INTEGER NULL DEFAULT 1, `joinedPlayers` VARCHAR(1000) NULL DEFAULT NULL, `playersNeeded` INTEGER NULL DEFAULT NULL, `created_by` VARCHAR(50) NULL DEFAULT NULL, `created_at` TIMESTAMP NULL DEFAULT NULL, `location_id` INTEGER NULL DEFAULT NULL, PRIMARY KEY (`id`) );',

    players : 'CREATE TABLE IF NOT EXISTS `Players` ( `id` INTEGER NOT NULL AUTO_INCREMENT, `game_id` INTEGER NULL DEFAULT NULL, `name` VARCHAR(30) NULL DEFAULT NULL, PRIMARY KEY (`id`) );',

    locations : 'CREATE TABLE IF NOT EXISTS `Locations` ( `id` INTEGER NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, `address` VARCHAR(150) NOT NULL, `lat` FLOAT(10, 6) NOT NULL, `lng` FLOAT(10, 6) NOT NULL, `type` VARCHAR(30) NOT NULL, `game_id` INTEGER NOT NULL, PRIMARY KEY (`id`) )  ENGINE = MYISAM; ',

  create : function() {
    connection.query(this.games, function (err) {
      if (err) { console.log('error creating games table : ', err); } 
      else { console.log("games table created") }
    });

    connection.query(this.locations, function (err) {
      if (err) { console.log('error creating locations table : ', err); }
      else { console.log("locations table created") }
    });

    connection.query(this.players, function (err) {
      if (err) { console.log('error creating players table : ', err); }
      else { console.log('players table created') }
    });

  }

}

