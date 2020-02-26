const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const eventSchema = new Schema({
  keyword: { type: String, required: true },
  name: { type: String, required: true },
  host: { type: String },
  type: String,
  // dates stamp formatted by moment().format()
  date: { type: String, default: moment().format("L") },
  attenders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Person"
    }
  ]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
