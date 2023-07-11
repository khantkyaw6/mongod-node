const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://node:password@127.0.0.1:27017/node")
    .then((result) => console.log("Connected!"))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
