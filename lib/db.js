const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://node:password@127.0.0.1:27017/kkBooks")
    .then((result) => console.log("Database Connected!"))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
