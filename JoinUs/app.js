var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

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
    var count = results[0].count;
    //console.log(results[0].count);
    //res.send("We have " + results[0].count + " users");
    res.render("home", { count: count });
  });
});

app.post("/registerPage", function (req, res) {
  var user = {
    email: req.body.email,
  };
  connection.query("insert into users set ?", user, function (error, results) {
    if (error) throw error;
    //res.send("Thanks for joining. Have a Good Day!!");
    res.redirect("/");
  });
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
