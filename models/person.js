const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  mobile_number: { type: String, required: true },
  first: String,
  last: String,
  email: String,
  date: { type: Date, default: Date.now }
});

const Person = mongoose.model("Event", personSchema);

module.exports = Person;
