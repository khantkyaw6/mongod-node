const express = require("express");
const { create } = require("../controller/authorController");

const router = express.Router();
const authorBasePath = "/author";

router.post(`${authorBasePath}/create`, create);

module.exports = router;
