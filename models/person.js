const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const personSchema = new Schema({
  mobile_number: { type: String, required: true },
  first: String,
  last: String,
  email: String,
  date: { type: Date, default: moment().format() },
  keywordsTexted: [{ type: String }],
  pair: [
    { date: { type: Date, default: moment().format() } },
    { keywordsTexted: { type: String } }
  ]
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
