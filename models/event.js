const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  keyword: { type: String, required: true },
  host: { type: String },
  type: String,
  date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
