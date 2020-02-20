const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/attend");

const personSeed = [
  {
    mobile_number: "+12005551000",
    first: "Bob",
    last: "Smith",
    email: "bobsmith@example.com",
    date: "2016-06-12T10:00:00Z",
    keywordsTexted: ["webhooktest", "hello"]
  },
  {
    mobile_number: "+12001231234",
    first: "Tim",
    last: "Anderson",
    email: "timmy@example.com",
    date: "2018-03-16T10:00:00Z",
    keywordsTexted: ["webhooktest"]
  }
];

db.Person.remove({})
  .then(() => db.Person.collection.insertMany(personSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
