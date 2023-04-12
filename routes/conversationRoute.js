const express = require("express");
const {
  createConversation,
  getConversations,
  getSingleConversation,
  updateConversation,
} = require("../controllers/conversationController");
const router = express.Router();

router.route("/").get(getConversations).post(createConversation);
router.get("/single/:id", getSingleConversation);
router.put("/:id", updateConversation);

module.exports = router;
