// Importing faker and mysql libraries
var faker = require("faker");
var mysql = require("mysql");

// Establishing connection to MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
  password: "root",
});

// Generating and pushing data from faker library
var data = [];
for (var i = 0; i < 520; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

// Creating query to insert bulk data
var q = "INSERT INTO users (email, created_at) VALUES ?";

/*var end_result = */
connection.query(q, [data], function (err, result) {
  console.log(err);
  console.log(result);
});

// To print the data after it is being inserted into database
// //console.log(end_result);

// Closing the connection
connection.end();
