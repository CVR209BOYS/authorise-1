const express = require("express");
const {uploadBooks,getBooks} = require("../controllers/book.js");
// const getBooks = require("../controllers/book.js");

const router = express.Router();

router.post("/upload", uploadBooks);
router.get("/get", getBooks);

module.exports = router;
