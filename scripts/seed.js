const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/attend");

const eventSeed = [
  {
    keyword: "webhooktest",
    name: "Sunday Service",
    host: "Orangewood Church",
    type: "service",
    // dates stamp formatted by moment().format()
    date: "02/25/2020",
    attenders: []
  },
  {
    keyword: "hello",
    name: "Neighborhood Bash, 1999",
    host: "Local Society",
    type: "block party",
    date: "12/24/1999",
    attenders: []
  },
  {
    keyword: "attendapp",
    name: "Neighborhood Bash, 1999",
    host: "Local Society",
    type: "block party",
    date: "12/24/1999",
    attenders: []
  }
];

const personSeed = [];

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
