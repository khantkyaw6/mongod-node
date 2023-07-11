const jwt = require("jsonwebtoken");
const UserModel = require("../model/user_schema");
const secretKey = "secret007";

const checkToken = (req, res, next) => {
  const whiteList = ["/api/user/login", "/api/user/register"];

  let check = whiteList.includes(req.path);
  if (check) {
    next();
  } else {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      res.status(200).json({
        error: true,
        message: "Auth token required",
      });
      return;
    }
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        res.status(200).send({ error: true, message: "Unauthorized Token!" });
        return;
      }
      const exitUser = await UserModel.findOne({ auth_token: token });
      exitUser && next();
    });
  }
};
module.exports = checkToken;
