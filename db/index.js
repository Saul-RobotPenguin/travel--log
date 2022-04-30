const mongoose = require("mongoose");

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/reviewDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("You're Connected Successfully To MongoDB");
  })
  .catch((e) => {
    console.error("Connection error has occurred", e.message);
  });

const db = mongoose.connection;

module.exports = db;
