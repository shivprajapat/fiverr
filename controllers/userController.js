const env = require("../config/envConfig");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { status } = require("../helper/api.responses");

// @desc    Show All Users
// @route   GET /api/users/:id
// @access  Public
const getUser = async (req, res) => {
  res.status(200).json({ name: "all users" });
};

// @desc    Delete User
// @route   DELETE /api/users/:id
// @access  Private

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(
      createError(status.Forbidden, "You can delete only your account!")
    );
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(status.OK).send("user deleted successfully.");
};

module.exports = { getUser, deleteUser };
