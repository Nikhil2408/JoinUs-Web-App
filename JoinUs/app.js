var express = require("express");
var mysql = require("mysql");
var app = express();

// Establishing connection to MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
  password: "root",
});

// Setting what to display when particular path is accessed
// Displays number of users in our database
app.get("/", function (req, res) {
  var q = "select count(*) as count from users";
  connection.query(q, function (error, results) {
    if (error) throw error;
    //console.log(results[0].count);
    res.send("We have " + results[0].count + " users");
  });
});

app.get("/learn", function (req, res) {
  res.send("Learnt basics of Node.js");
});

// To make the server listen on port 8080
app.listen(8080, function () {
  console.log("Server running on port 8080");
});

// This is how I generated 500 users with their random email addresses

// // Generating and pushing data from faker library
// var data = [];
// for (var i = 0; i < 520; i++) {
//   data.push([faker.internet.email(), faker.date.past()]);
// }

// // Creating query to insert bulk data
// var q = "INSERT INTO users (email, created_at) VALUES ?";

// /*var end_result = */
// connection.query(q, [data], function (err, result) {
//   console.log(err);
//   console.log(result);
// });

// // To print the data after it is being inserted into database
// // //console.log(end_result);

// // Closing the connection
// connection.end();
