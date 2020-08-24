//console.log("Hello World");

var faker = require("faker");
//console.log(faker.internet.email());

function generateAddress() {
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
}

generateAddress();
