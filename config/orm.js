var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
    all:function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + " ORDER BY date asc;";
        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    // INSERT INTO `burger_db`.`burgers` (`burger_name`) VALUES ('veggie');
    create: function(burgerName, cb){
        var queryString = "INSERT INTO burgers(burger_name) VALUES ('"+ burgerName +"');";
        connection.query(queryString, function(err, res){
            if(err) throw err;
            cb("New Burger added");
        });
    },
    // UPDATE `burger_db`.`burgers` SET `is_eaten`='1' WHERE `burger_id`='4';
    // eaten: function(tableInput, burg, )
    update: function(burgID, cb){
        var queryString = "UPDATE burgers SET is_eaten=1 WHERE burger_id="+burgID+";";
        connection.query(queryString, function(err, res){
            if(err) throw err;
            cb("Burger Eaten");
        });
    }

};

module.exports = orm;