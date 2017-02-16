// Set up MySQL connection.
var mysql = require("mysql");
// Local connection
/*
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "162605",
  database: "burger_db"
});
*/

// CLEARDB CONNECTION
var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "bcafda952ee0a5",
  password: "b472594e",
  database: "heroku_24bd092f1a8ecfe"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
