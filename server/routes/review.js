const express = require("express");
const { createReview, getReview } = require("../controllers/review.js");

const router = express.Router();

router.post("/", createReview);
router.get("/myreview", getReview);

module.exports = router;
