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
  res.status(200).json({ message: `Delete User ${req.params.id}` });
};

module.exports = { getUser, deleteUser };
