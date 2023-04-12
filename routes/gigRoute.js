const express = require("express");
const {
  createGig,
  getGigs,
  deleteGig,
  getGig,
} = require("../controllers/gigController");
const router = express.Router();

router.route("/").post(createGig).get(getGigs);
router.delete("/:id", deleteGig);
router.get("/single/:id", getGig);

module.exports = router;
