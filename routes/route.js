const express = require("express");
const router = express.Router();

const bookRoute = require("./book_route");
const userRoute = require("./user_route");
const authorRoute = require("./author_route");

router.use("/api", userRoute);
router.use("/api", authorRoute);
router.use("/api", bookRoute);

module.exports = router;
