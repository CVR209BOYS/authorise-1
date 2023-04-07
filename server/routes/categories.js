const express = require("express");
const { getCategories } = require("../controllers/categories");
const router = express.Router();

router.get("/get", getCategories);

module.exports = router;
