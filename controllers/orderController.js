// @desc    Orders
// @route   POST /api/orders/create-payment-intent/:id
// @access  Private

const intent = async (req, res) => {
  res.status(200).json({ message: "Orders intent" });
};
// @desc    Orders
// @route   GET /api/orders
// @access  Private

const getOrders = async (req, res) => {
  res.status(200).json({ message: "show Orders" });
};
// @desc    Orders
// @route   PUT /api/orders
// @access  Private

const confirm = async (req, res) => {
  res.status(200).json({ message: 'Orders confirm' });
};

module.exports = {
  intent,
  getOrders,
  confirm,
};
