const { status } = require("../helper/api.responses");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = await new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(status.OK).send("User has been created.");
  } catch (err) {
    res.status(status.InternalServerError).send("something went wrong!");
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public

const login = async (req, res) => {
  res.send({ name: "login user" });
};

// @desc    Logout User
// @route   POST /api/auth/logout
// @access  Public

const logout = async (req, res) => {
  res.send({ name: "logout user" });
};

module.exports = { register, login, logout };
