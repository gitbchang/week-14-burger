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
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    // INSERT INTO `burger_db`.`burgers` (`burger_name`) VALUES ('veggie');
    create: function(tableInput, burgerName, cb){
        var queryString = "INSERT INTO " + tableInput + "(burger_name) VALUES " + burgerName + ";";
        connection.query(queryString, function(err, res){
            if(err) throw err;
            cb("New Burger added");
        });
    }
    // UPDATE `burger_db`.`burgers` SET `is_eaten`='1' WHERE `burger_id`='4';
    // eaten: function(tableInput, burg, )

};

module.exports = orm;