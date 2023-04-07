const express = require("express");
const { createPub, getPub } = require("../controllers/publication.js");

const router = express.Router();

router.post("/", createPub);
router.post("/myPub", getPub);

module.exports = router;
