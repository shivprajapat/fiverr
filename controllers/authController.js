const { status, createError } = require("../helper/api.responses");
const User = require("../models/user.model");
const env = require("../config/envConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    next(err);
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(status.NotFound, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect)
      return next(
        createError(status.BadRequest, "Wrong password or username!")
      );

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      env.JWT_KEY
    );
    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
      })
      .status(status.OK)
      .send(info);
  } catch (error) {
    next(error);
  }
};

// @desc    Logout User
// @route   POST /api/auth/logout
// @access  Public

const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .status(status.OK)
    .send("User has been logged out.");
};

module.exports = { register, login, logout };
