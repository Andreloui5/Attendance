const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_sqdfjnrc:vf0l2ht3k4erljgaadm8jpktif@ds259250.mlab.com:59250/heroku_sqdfjnrc"
);

const eventSeed = [
  {
    keyword: "webhooktest",
    host: "Orangewood Church",
    type: "service",
    date: "2016-06-12T10:00:00Z"
  },
  {
    keyword: "webhooktest",
    host: "Orangewood Church",
    type: "service",
    date: "2020-02-18T13:56:09-05:00"
  },
  {
    keyword: "hello",
    host: "Local Society",
    type: "block party",
    date: "2020-01-12T10:56:09-05:00"
  },
  {
    keyword: "hello",
    host: "Local Society",
    type: "town hall meeting",
    date: "2020-01-14T10:56:09-05:00"
  }
];

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

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
