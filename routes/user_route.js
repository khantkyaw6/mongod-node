const express = require("express");
const { register, login } = require("../controller/userController");
const router = express.Router();
const userBasePath = "/user";

router.post(`${userBasePath}/register`, register);
router.post(`${userBasePath}/login`, login);

module.exports = router;
