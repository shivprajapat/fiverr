// @desc    Register new user
// @route   POST /api/gigs
// @access  Private
const createGig = async (req, res) => {
  res.status(200).json({ message: "set Gigs" });
};

// @desc    Gigs
// @route   GET /api/gigs
// @access  Public

const getGigs = async (req, res) => {
  res.send({ name: "show Gigs" });
};

// @desc    Gigs
// @route   GET /api/gigs/single/:id
// @access  Public

const getGig = async (req, res) => {
  res.status(200).json({ message: `Gigs single ${req.params.id}` });
};
// @desc    Gigs
// @route   DELETE /api/gigs/:id
// @access  Private

const deleteGig = async (req, res) => {
  res.status(200).json({ message: `Gigs delete ${req.params.id}` });
};

module.exports = {
  createGig,
  getGig,
  getGigs,
  deleteGig,
};
