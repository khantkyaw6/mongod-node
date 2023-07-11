const express = require("express");
const router = express.Router();
const { createBook } = require("../controller/bookController");

const bookBasePath = "/book";

router.post(`${bookBasePath}/create`, createBook);

module.exports = router;
