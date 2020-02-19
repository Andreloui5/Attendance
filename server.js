const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// connects to Mongo DB
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost:27017/attend";
mongoose.connect(mongoURL, { useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to mongoDB").catch(err => {
    console.log("error connecting to mongoDB");
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
