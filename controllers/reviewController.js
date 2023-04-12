// @desc    Reviews
// @route   POST /api/reviews
// @access  Private

const createReview = async (req, res) => {
  res.status(200).json({ message: "set Reviews" });
};
// @desc    Reviews
// @route   GET /api/reviews/:gigId
// @access  Private

const getReviews = async (req, res) => {
  res.status(200).json({ message: `get Review by ID ${req.params.gigId}` });
};
// @desc    Reviews
// @route   DELETE /api/reviews/:id
// @access  Private

const deleteReview = async (req, res) => {
  res.status(200).json({ message: `Delete Review ${req.params.id}` });
};

module.exports = {
  createReview,
  getReviews,
  deleteReview,
};
