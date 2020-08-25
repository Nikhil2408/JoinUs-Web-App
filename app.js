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

// Generating data from faker library
var user = {
  email: faker.internet.email(),
  created_at: faker.date.past(),
};

// To print data that the faker has generated
//console.log(user);

/*var end_result = */

connection.query("insert into users set ?", user, function (
  error,
  results,
  fields
) {
  if (error) throw error;
  console.log(results);
});

// To print the data after it is being inserted into database
//console.log(end_result);

// Closing the connection
connection.end();
