// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  const { name, email, password } = req.body;
  res.status(200).json({ message: name, email, password });
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
