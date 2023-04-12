const express = require("express");
const { createMessage, getMessages } = require("../controllers/messagesController");
const router = express.Router();

router.post("/", createMessage);
router.get("/:id", getMessages);

module.exports = router;
