const express = require("express");
const { getLanguages } = require("../controllers/languages.js");

const router = express.Router();

router.get("/get", getLanguages);

module.exports = router;
