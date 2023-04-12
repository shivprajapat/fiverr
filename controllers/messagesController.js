// @desc    Messages
// @route   POST /api/messages
// @access  Private
const createMessage = async (req, res) => {
  res.status(200).json({ message: "set Messages" });
};

// @desc    Messages
// @route   GET /api/messages/single/:id
// @access  Public

const getMessages = async (req, res) => {
  res.status(200).json({ message: `Messages ID ${req.params.id}` });
};

module.exports = {
  createMessage,
  getMessages,
};
