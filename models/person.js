const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const personSchema = new Schema({
  mobile_number: { type: String, required: true },
  first: String,
  last: String,
  email: String,
  date: { type: String, default: moment().format("L") },
  keywordsTexted: [{ type: String }],
  keywordDatePair: [{ type: String }],
  lastKeywordTexted: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
