const express = require("express");
const { getUser, deleteUser } = require("../controllers/userController");
const verifyToken = require("../middleware/jwt");

const router = express.Router();

router.route("/:id").get(getUser).delete(verifyToken, deleteUser);

module.exports = router;
