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
    date: "3/1/2020"
  },
  {
    keyword: "webhooktest",
    name: "Sunday Service",
    host: "Orangewood Church",
    type: "service",
    date: "2/25/2020"
  },
  {
    keyword: "hello",
    name: "Neighborhood Bash, 2020",
    host: "Local Society",
    type: "block party",
    date: "12/24/1999"
  },
  {
    keyword: "hello",
    name: "Community Matters",
    host: "Local Society",
    type: "town hall meeting",
    date: "12/24/1999"
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
