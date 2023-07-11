const UserModel = require("../model/user_schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "secret007";
const salt = 12;

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    res.status(200).json({
      error: false,
      message: "Email already exist",
    });
    return;
  }

  const auth_token = jwt.sign({ email }, secretKey, {
    expiresIn: "1h",
  });
  const hashPwd = bcrypt.hashSync(password, salt);

  const user = new UserModel({
    username,
    email,
    password: hashPwd,
    auth_token,
  });
  const saveUser = await user.save();
  res.status(200).json({
    error: false,
    message: "user register successfully",
    data: saveUser,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const auth_token = jwt.sign({ email }, secretKey, {
    expiresIn: "1h",
  });
  const existingUser = await UserModel.findOne({ email });

  if (!existingUser) {
    res.status(200).json({
      error: true,
      message: "Incorrect email or password",
    });
    return;
  }

  if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
    const filter = { _id: existingUser._id };
    const update = { auth_token };
    let updateUser = await UserModel.findOneAndUpdate(filter, update);

    res.status(200).json({
      error: false,
      message: "user login successfully",
      data: updateUser,
    });
  } else {
    res.status(200).json({
      error: true,
      message: "Incorrect Password",
    });
  }
};

module.exports = { register, login };
