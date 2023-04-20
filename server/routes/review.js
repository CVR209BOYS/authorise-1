const express = require("express");
const { createReview, getReview } = require("../controllers/review.js");

const router = express.Router();

router.post("/createreview", createReview);
router.post("/getreviews", getReview);

module.exports = router;
