const express = require("express");
const app = express();
const morgan = require("morgan");
const dbConnection = require("./lib/db");
const mainRoute = require("./routes/route");
const checkToken = require("./middleware/checkToken");
const AuthorModel = require("./model/author_schema");
const BookModel = require("./model/book_schema");
const PORT = 4005;

dbConnection();
// dbConnection;

app.use(express.json()).use(morgan("dev")).use(checkToken);

app.use(mainRoute);
app.listen(PORT, () => {
  console.log("Server is running at Port ", PORT);
});
