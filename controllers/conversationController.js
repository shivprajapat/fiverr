// @desc    Register new user
// @route   POST /api/conversations
// @access  Private
const createConversation = async (req, res) => {
  res.status(200).json({ message: "set conversations" });
};

// @desc    Conversations
// @route   GET /api/conversations
// @access  Private

const getConversations = async (req, res) => {
  res.send({ name: "show conversations" });
};

// @desc    Conversations
// @route   GET /api/conversations/single/:id
// @access  Private

const getSingleConversation = async (req, res) => {
  res.status(200).json({ message: `conversations single ${req.params.id}` });
};
// @desc    Conversations
// @route   PUT /api/conversations/:id
// @access  Private

const updateConversation = async (req, res) => {
  res.status(200).json({ message: `conversations Update ${req.params.id}` });
};

module.exports = {
  createConversation,
  getConversations,
  getSingleConversation,
  updateConversation,
};
