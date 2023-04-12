const express = require("express");
const { getUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.route("/:id").get(getUser).delete(deleteUser);


module.exports = router