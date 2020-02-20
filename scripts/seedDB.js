const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/attend");

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
