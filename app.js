var faker = require("faker");
var mysql = require("mysql");
//console.log(faker.internet.email());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
  password: "root",
});

var q = "SELECT COUNT(*) as count FROM users";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].count);
});

connection.end();
