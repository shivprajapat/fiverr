const express = require("express");
const {
  getOrders,
  intent,
  confirm,
} = require("../controllers/orderController");
const router = express.Router();

router.route("/").get(getOrders).put(confirm);
router.post("/create-payment-intent/:id", intent);

module.exports = router;
